import { css } from "lit";
export const linkStyles = css`
.floral,
:host([theme='floral']) {
  .primary-link,
  slot[name^='link-cta-primary'] {
    --link-font-size: var(--fs-body);
    --link-font-family: var(--body-font-floral);
    --link-font-weight: var(--link-font-weight-floral);
    --link-color: var(--cl-bold-primary-floral);
    --link-underline-color: var(--cl-bold-tertiary-floral); 
    --link-color-active: var(--cl-bold-tertiary-floral);
    --link-outline-color: var(--cl-bold-tertiary-floral);
    --link-outline-width: 2px;
    --link-outline-offset: 2px;
    --duration-time: var(--action-duration-primary-floral);
    
    &:hover {
      --link-color: var(--cl-bold-tertiary-floral);
    }
  }
}

.default,
:host([theme='default']) {
  .primary-link,
  slot[name^='link-cta-primary'] {
    --link-font-size: var(--fs-body);
    --link-font-family: var(--body-font-default);
    --link-font-weight: var(--link-font-weight-default);
    --link-color: var(--cl-bold-primary-default);
    --link-underline-color: var(--cl-bold-tertiary-default); 
    --link-color-active: var(--cl-bold-tertiary-default);
    --link-outline-color: var(--cl-bold-tertiary-default);
    --link-outline-width: 2px;
    --link-outline-offset: 2px;
    --duration-time: var(--action-duration-primary-default);
    
    &:hover {
      --link-color: var(--cl-bold-tertiary-default);
    }
  }
}

.sprawl,
:host([theme='sprawl']) {
  .primary-link,
  slot[name^='link-cta-primary'] {
    --link-font-size: var(--fs-body);
    --link-font-family: var(--body-font-sprawl);
    --link-font-weight: var(--link-font-weight-sprawl);
    --link-color: var(--cl-light-primary-sprawl);
    --link-underline-color: var(--cl-light-secondary-sprawl); 
    --link-color-active: var(--cl-light-secondary-sprawl);
    --link-outline-color: var(--cl-light-secondary-sprawl);
    --link-outline-width: 2px;
    --link-outline-offset: 2px;
    --duration-time: var(--action-duration-primary-sprawl);
    
    &:hover {
      --link-color: var(--cl-light-secondary-sprawl);
    }
  }
  .secondary-link,
  slot[name^='link-cta-secondary'] {
    --link-font-size: var(--fs-body);
    --link-font-family: var(--body-font-sprawl);
    --link-font-weight: var(--link-font-weight-sprawl);
    --link-color: var(--cl-light-primary-sprawl);
    --link-underline-color: var(--cl-bold-primary-sprawl); 
    --link-color-active: var(--cl-bold-primary-sprawl);
    --link-outline-color: var(--cl-bold-primary-sprawl);
    --link-outline-width: 2px;
    --link-outline-offset: 2px;
    --duration-time: var(--action-duration-primary-sprawl);
    
    &:hover {
      --link-color: var(--cl-bold-primary-sprawl);
    }
  }
}

a,
::slotted(a) {
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--link-color);
  font-family: var(--link-font-family);
  font-weight: var(--link-font-weight);
  text-decoration: none;
}

a::after,
::slotted(a)::after {
  content: '';
  display: flex;
  height: 2px;
  width: 0px;
  transition: var(--duration-time);
  background-color: var(--link-outline-color);
}

a:hover::after,
::slotted(a:hover)::after {
  width: 100%;
}

a:focus-visible,
::slotted(a:focus-visible) {
  outline: var(--link-outline-color) var(--link-outline-width) solid;
  outline-offset: var(--link-outline-offset);
  color: var(--link-color-active);
}
`