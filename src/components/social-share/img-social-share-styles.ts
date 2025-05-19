import { css } from "lit";
export const socialShareStyles = css`
  ul, li {
    all: unset;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    width: fit-content;
    border: solid var(--border-width) var(--border-color);
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    gap: 1rem;
    align-items: baseline;
  }

  :host([theme='floral']) {
  --svg-color: var(--cl-svg-floral);
  --border-radius: 8px;
  --border-width: 2px;
  --border-color: var(--cl-border-floral);
  --action-color-primary: var(--cl-bold-tertiary-floral);
  --background-color: var(--cl-background-primary-floral);    
}

:host([theme='sprawl']) {
  --svg-color: var(--cl-svg-sprawl);
  --border-width: 1px;
  --border-radius: 0px;
  --border-color: var(--cl-border-sprawl);
  --action-color-primary: var(--cl-bold-primary-sprawl);
  --background-color: var(--cl-background-primary-sprawl);
}

:host([theme='default']) {
  --svg-color: var(--cl-svg-default);
  --border-radius: 4px;
  --border-width: 2px;
  --border-color: var(--cl-border-default);
  --action-color-primary: var(--cl-bold-tertiary-default);
  --background-color: var(--cl-background-primary-default);
}

.img-social-share--link {
  display: block;
  
  &:hover {
    --svg-color: var(--action-color-primary);
  }

  &:focus {
    --svg-color: var(--action-color-primary);
    outline: solid 2px var(--action-color-primary);
    outline-offset: 2px;
  }
}
`
