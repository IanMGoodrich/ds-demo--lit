import { css } from "lit";
export const logoStyles = css`
  

:host([theme='floral']) img-svg {
  --logo-color: var(--svg-color-floral);
  --action-color-primary: var(--action-color-primary-floral);
  --action-color-secondary: var(--action-color-secondary-floral);
  --logo-bg-color: var(--background-color-primary-floral);
}

:host([theme='sprawl']) {
  --logo-color: var(--svg-color-sprawl);
  --action-color-primary: var(--action-color-secondary-sprawl);
  --action-color-secondary: var(--action-color-primary-sprawl);
  --logo-bg-color: var(--background-color-primary-sprawl);
}

:host([theme='default']) {
  --logo-color: var(--svg-color-default);
  --action-color-primary: var(--action-color-primary-default);
  --action-color-secondary: var(--action-color-secondary-default);
  --logo-bg-color: var(--background-color-primary-default);
}

`