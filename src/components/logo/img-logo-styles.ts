import { css } from "lit";
export const logoStyles = css`
  

:host([theme='floral']) img-svg {
  --logo-color: var(--cl-svg-floral);
  --action-color-primary: var(--action-color-primary-floral);
  --action-color-secondary: var(--action-color-secondary-floral);
  --logo-bg-color: var(--cl-background-primary-floral);
}

:host([theme='sprawl']) {
  --logo-color: var(--cl-svg-sprawl);
  --action-color-primary: var(--action-color-secondary-sprawl);
  --action-color-secondary: var(--action-color-primary-sprawl);
  --logo-bg-color: var(--cl-background-primary-sprawl);
}

:host([theme='default']) {
  --logo-color: var(--cl-svg-default);
  --action-color-primary: var(--action-color-primary-default);
  --action-color-secondary: var(--action-color-secondary-default);
  --logo-bg-color: var(--cl-background-primary-default);
}

`