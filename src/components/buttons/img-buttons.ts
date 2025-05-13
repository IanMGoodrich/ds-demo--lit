import { css } from "lit";

export const buttonStyles = css`
  .floral,
  :host([theme='floral']) {
    .primary-button,
    slot[name^='button-cta-primary'] {
      --button-padding: var(--spacing-50-100) var(--spacing-75-125);
      --button-font-size: var(--fs-body);
      --button-font-family: var(--body-font-floral);
      --button-font-weight: var(--link-font-weight-floral);
      --button-bg-color: var(--cl-light-secondary-floral);
      --button-color: var(--cl-bold-primary-floral);
      --button-border-radius: 24px;
      --button-border-color: var(--cl-bold-primary-floral);
      --button-border-width: 2px;
      --button-outline-offset: 2px;      
      --button-outline-color: var(--button-border-color-active);
      --button-outline-width: 2px;

      /* Due to a difference in the way browsers forward the :hover pseudo-class vs :focus/:focus-visible,
        focus specific vars need to be set here and applied directly to the button at :focus-visible.
        These styles are in line with :hover for aesthetic reasons and can be decouple by changing the hover values below.
      */

      --button-bg-color-active: var(--cl-light-tertiary-floral);
      --button-color-active: var(--cl-bold-secondary-floral);
      --button-border-color-active: var(--cl-bold-secondary-floral);
        
      &:hover {
        --button-bg-color: var(--button-bg-color-active);
        --button-color: var(--button-color-active);
        --button-border-color: var(--button-border-color-active);
      }
    }

    &.secondary-button,
    slot[name^='button-cta-secondary'] {
      --button-padding: var(--spacing-50-100) var(--spacing-75-125);
      --button-font-size: var(--fs-body);
      --button-font-family: var(--body-font-floral);
      --button-font-weight: var(--link-font-weight-floral);
      --button-bg-color: var(--cl-accent-primary-floral);
      --button-color: var(--cl-light-tertiary-floral);
      --button-border-radius: 24px;
      --button-border-color: var(--cl-accent-tertiary-floral);
      --button-border-width: 2px;
      --button-outline-offset: 2px;  
      --button-outline-color:  var(--cl-bold-primary-floral);
      --button-outline-width: 2px;
      --button-bg-color-active: var(--cl-light-primary-floral);
      --button-color-active: var(--cl-bold-primary-floral);
      --button-border-color-active: var(--cl-bold-primary-floral);
      
      &:hover {
        --button-bg-color: var(--cl-light-primary-floral);
        --button-color: var(--cl-bold-primary-floral);
        --button-border-color: var(--cl-bold-primary-floral);
      }
    }
  }

  .sprawl,
  :host([theme='sprawl']) {
    &.primary-button,
    slot[name^='button-cta-primary'] {
      --button-padding: var(--spacing-50-100);
      --button-font-size: var(--fs-body);
      --button-font-family: var(--body-font-sprawl);
      --button-font-weight: var(--link-font-weight-sprawl);
      --button-bg-color: var(--cl-background-primary-sprawl);
      --button-color: var(--cl-light-primary-sprawl);
      --button-border-radius: 5px;
      --button-border-color: var(--cl-light-primary-sprawl);
      --button-border-width: 1px;
      --button-outline-offset: 2px;    
      --button-outline-color: var(--cl-light-secondary-sprawl);
      --button-outline-width: 2px;
      --button-bg-color-active: var(--cl-light-secondary-sprawl);
      --button-color-active:  var(--cl-bold-secondary-sprawl);
      --button-border-color-active: var(--cl-light-secondary-sprawl);
      
      &:hover {
        --button-bg-color: var(--cl-light-secondary-sprawl);
        --button-color: var(--cl-bold-secondary-sprawl);
        --button-border-color: var(--cl-light-secondary-sprawl);
      }
    }

    &.secondary-button,
    slot[name^='button-cta-secondary'] {
      --button-padding: var(--spacing-50-100);
      --button-font-size: var(--fs-body);
      --button-font-family: var(--body-font-sprawl);
      --button-font-weight: var(--link-font-weight-sprawl);
      --button-bg-color: var(--cl-background-primary-sprawl);
      --button-color: var(--cl-bold-primary-sprawl);
      --button-border-radius: 5px;
      --button-border-color: var(--cl-bold-primary-sprawl);
      --button-border-width: 1px;
      --button-outline-offset: 2px;   
      --button-outline-color: var(--cl-bold-primary-sprawl);
      --button-outline-width: 1px;
      --button-bg-color-active: var(--cl-bold-primary-sprawl);
      --button-color-active: 
      --button-border-color-active: var(--cl-bold-primary-sprawl);
      
      &:hover {
        --button-bg-color: var(--cl-bold-primary-sprawl);
        --button-color: var(--cl-bold-secondary-sprawl);
        --button-border-color: var(--cl-bold-primary-sprawl);
      }
    }
  }

  .default,
  :host([theme='default']) {
    &.primary-button,
    slot[name^='button-cta-primary'] {
      --button-padding: var(--spacing-50-100);
      --button-font-size: var(--fs-body);
      --button-font-family: var(--body-font-default);
      --button-font-weight: var(--link-font-weight-default);
      --button-bg-color: var(--cl-bold-primary-default);
      --button-color: var(--cl-accent-tertiary-default);
      --button-border-radius: 30px;
      --button-border-color: var(--cl-bold-primary-default);
      --button-border-width: 2px;
      --button-outline-offset: 2px;      
      --button-outline-color: var(--cl-bold-primary-default);
      --button-outline-width: 2px;
      --button-bg-color-active: var(--cl-accent-tertiary-default);
      --button-color-active: var(--cl-bold-primary-default);
      --button-border-color-active: var(--cl-bold-primary-default);
      
      &:hover {
        --button-bg-color: var(--cl-accent-tertiary-default);
        --button-color: var(--cl-bold-primary-default);
        --button-border-color: var(--cl-bold-primary-default);
      }
    }

    &.secondary-button,
    slot[name^='button-cta-secondary'] {
      --button-padding: var(--spacing-50-100);
      --button-font-size: var(--fs-body);
      --button-font-family: var(--body-font-default);
      --button-font-weight: var(--link-font-weight-default);
      --button-bg-color: var(--cl-accent-tertiary-default);
      --button-color: var(--cl-bold-primary-default);
      --button-border-radius: 30px;
      --button-border-color: var(--cl-bold-primary-default);
      --button-border-width: 2px;
      --button-outline-offset: 2px;
      --button-outline-color: var(--cl-bold-primary-default);
      --button-outline-width: 2px;
      --button-bg-color-active:  var(--cl-bold-primary-default);
      --button-color-active: var(--cl-accent-tertiary-default);
      --button-border-color-active: var(--cl-bold-primary-default);
      
      &:hover {
        --button-bg-color: var(--cl-bold-primary-default);
        --button-color: var(--cl-accent-tertiary-default);
        --button-border-color: var(--cl-bold-primary-default);
      }
    }
  }

  button,
  ::slotted(button) {
    display: flex;
    width: fit-content;
    padding: var(--button-padding);
    background-color: var(--button-bg-color);
    color: var(--button-color);
    border: solid var(--button-border-color) var(--button-border-width);
    border-radius: var(--button-border-radius);
    font-family: var(--button-font-family);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
    line-height: 1;
  }
  
  button:focus-visible,
  ::slotted(button:focus-visible) {
    background-color: var(--button-bg-color-active);
    color: var(--button-color-active);
    border: solid var(--button-border-color-active) var(--button-border-width);
    outline: solid var(--button-outline-color) var(--button-outline-width);
    outline-offset: var(--button-outline-offset);
  }
`   