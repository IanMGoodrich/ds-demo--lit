import { css } from "lit";
export const footerStyles = css`

.img-footer {
  background-color: var(--background-color);
}

.img-footer-wrapper {
  padding: 2rem;
}

.img-footer--top-content {
  display: flex; 
  justify-content: space-between;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;

  @media(min-width: 768px) {
    align-items: unset;
    flex-direction: row;
  }
}

.img-footer--nav-social {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  row-gap: 2rem;
}

.img-footer--social-wrapper {
  width: fit-content;
  align-self: center;

  @media(min-width: 768px) {
    flex-direction: row;
    align-self: flex-end;
  }
}

.img-footer--bottom-content {
  padding-top: 1rem;
  margin-top: 2rem;
  border-top: solid 1px var(--border-color);
}

.img-footer--legal-copyright {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--body-color);

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

:host([theme='default']) {
  --link-font-main: var(--heading-font-default);
  --link-size-main: var(--fs-heading-6);
  --action-color-secondary: var(--action-color-secondary-default);
  --action-color-primary: var(--action-color-primary-default);
  --background-color: var(--cl-background-primary-default);
  --body-color: var(--body-color-default);
  --border-color: var(--cl-border-default);
}

:host([theme='floral']) {
  --link-size-main: var(--fs-heading-6);
  --link-font-main: var(--heading-font-floral);
  --action-color-secondary: var(--action-color-secondary-floral);
  --action-color-primary: var(--action-color-primary-floral);
  --background-color: var(--cl-background-primary-floral);
  --body-color: var(--body-color-floral);
  --border-color: var(--cl-border-floral);
}

:host([theme='sprawl']) {
  --link-font-main: var(--heading-font-sprawl);
  --link-size-main: var(--fs-heading-6);
  --action-color-secondary: var(--action-color-secondary-sprawl);
  --action-color-primary: var(--action-color-primary-sprawl);
  --background-color: var(--cl-background-primary-sprawl);
  --body-color: var(--body-color-sprawl);
  --border-color: var(--cl-border-sprawl);
}
`