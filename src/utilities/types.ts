export const sharedThemes  = ['floral', 'sprawl', 'default'] as const;
export type Theme = (typeof sharedThemes)[number];
export type CssVarVal = {var: string, val: string};