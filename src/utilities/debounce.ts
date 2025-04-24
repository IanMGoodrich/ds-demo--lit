export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
  instant = false
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let hasCalled = false;

  const debounced = (...args: Parameters<T>) => {
    const callNow = instant && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!instant) {
        func(...args);
      }
      hasCalled = false;
    }, delay);

    if (callNow && !hasCalled) {
      func(...args);
      hasCalled = true;
    }
  };

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    hasCalled = false;
  };

  return debounced;
}