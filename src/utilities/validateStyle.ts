import tokens from '../styles/token-library.css?raw';

export const styleIsValid = (property: string, value: string) => {
  if (value.includes('--')) {
    const tokenizedValue = getTokenValue(value);
    return  CSS.supports(property, tokenizedValue? tokenizedValue : 'none');
  } else {
    return CSS.supports(property, value);
  }
}

const getTokenValue = (token:string) => {
  // Clean up the input token
  const cleanToken = token.replace(/var\(|\)|\s+/g, '').trim();
  const regex = new RegExp(`(^|\\s*)(${cleanToken}):\\s*([^;]+);`, 'm');
  const match = tokens.match(regex);
  
  if (match && match.includes('--')) {
    return getTokenValue(match[3].trim())
  } else {
    return match ? match[3].trim() : null;
  }
};