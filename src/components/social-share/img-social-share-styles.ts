import { css } from "lit";
export const socialShareStyles = css`
  ul, li {
    all: unset;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    border: solid var(--border-width) var(--border-color);
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    column-gap: 1rem;
    align-items: baseline;
  }

  :host([theme='floral']) {
  --svg-color: var(--svg-color-floral);
  --border-radius: 8px;
  --border-width: 2px;
  --border-color: var(--border-color-floral);
  --action-color-primary: var(--action-color-primary-floral);
  --action-color-secondary: var(--action-color-secondary-floral);
  --background-color: var(--background-color-primary-floral);
}

:host([theme='sprawl']) {
  --svg-color: var(--svg-color-sprawl);
  --border-width: 1px;
  --border-radius: 0px;
  --border-color: var(--border-color-sprawl);
  --action-color-primary: var(--action-color-secondary-sprawl);
  --action-color-secondary: var(--action-color-primary-sprawl);
  --background-color: var(--background-color-primary-sprawl);
}

:host([theme='default']) {
  --svg-color: var(--svg-color-default);
  --border-radius: 4px;
  --border-width: 2px;
  --border-color: var(--border-color-default);
  --action-color-primary: var(--action-color-primary-default);
  --action-color-secondary: var(--action-color-secondary-default);
  --background-color: var(--background-color-primary-default);
}

.img-social-share--link {
  display: block;
  
  &:hover {
    --svg-color: var(--action-color-primary);
  }

  &:focus {
    --svg-color: var(--action-color-primary);
    outline: solid 2px var(--action-color-secondary);
    outline-offset: 2px;
  }
}
`
