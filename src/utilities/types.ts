export const sharedThemes  = ['floral', 'sprawl', 'default'] as const;
export type Theme = (typeof sharedThemes)[number];