import { css } from "lit";
export const footerStyles = css`

.img-footer {
  background-color: var(--background-color);
}

.img-footer--top-content {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  
  @media(min-width: env(mobile-breakpoint)) {
      border: solid 12px red;
   }
}

:host([theme='default']) {
  --link-font-main: var(--heading-font-default);
  --link-size-main: var(--fs-heading-6);
  --action-color-secondary: var(--action-color-secondary-default);
  --action-color-primary: var(--action-color-primary-default);
  --background-color: var(--background-color-primary-default);
  --body-color: var(--body-color-default);
  --border-color: var(--border-color-default);
}

:host([theme='floral']) {
  --link-size-main: var(--fs-heading-6);
  --link-font-main: var(--heading-font-floral);
  --action-color-secondary: var(--action-color-secondary-floral);
  --action-color-primary: var(--action-color-primary-floral);
  --background-color: var(--background-color-primary-floral);
  --body-color: var(--body-color-floral);
  --border-color: var(--border-color-floral);
}

:host([theme='sprawl']) {
  --link-font-main: var(--heading-font-sprawl);
  --link-size-main: var(--fs-heading-6);
  --action-color-secondary: var(--action-color-secondary-sprawl);
  --action-color-primary: var(--action-color-primary-sprawl);
  --background-color: var(--background-color-primary-sprawl);
  --body-color: var(--body-color-sprawl);
  --border-color: var(--border-color-sprawl);
}
`