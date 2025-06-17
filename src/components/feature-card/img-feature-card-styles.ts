import { css } from "lit";
export const featureCardStyles = css`
:host([theme='floral']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-color: var(--heading-color-floral);
  --eyebrow-font: var(--body-font-floral);
  --eyebrow-weight: var(--body-font-weight-light-floral);
  --heading-color: var(--heading-color-floral);
  --heading-font: var(--heading-font-floral);
  --heading-size: var(--fs-heading-3);
  --heading-weight: var(--heading-font-weight-floral);
  --description-font: var(--body-font-floral);
  --description-size: var(--fs-body); 
  --description-color: var(--body-color-flora);
  --description-weight: var(--body-font-weight-floral);
  --cta-weight: var(--heading-font-weight-light-floral);
  --background-color: var(--cl-background-primary-floral);
  --border-radius: 8px;
  --border-width: 2px;
  --border-color: var(--cl-border-floral);
  --duration-time: var(--action-duration-primary-floral);
}

:host([theme='sprawl']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-font: var(--body-font-sprawl);
  --eyebrow-color: var(--heading-color-sprawl);
  --eyebrow-weight: var(--body-font-weight-light-sprawl);
  --heading-color: var(--heading-color-sprawl);
  --heading-font: var(--heading-font-sprawl);
  --heading-size: var(--fs-heading-3);
  --heading-weight: var(--heading-font-weight-sprawl);
  --description-font: var(--body-font-sprawl);
  --description-size: var(--fs-body);
  --description-color: var(--body-color-sprawl);
  --description-weight: var(--body-font-weight-sprawl);
  --cta-weight: var(--heading-font-weight-light-sprawl);
  --background-color: var(--cl-background-primary-sprawl);
  --border-color: var(--cl-border-sprawl);
  --border-width: 1px;
  --border-radius: 0px;
  --duration-time: var(--action-duration-primary-sprawl);
}

:host([theme='default']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-font: var(--heading-font-default);
  --eyebrow-color: var(--body-color-default);
  --eyebrow-weight: var(--body-font-weight-light-default);
  --heading-color: var(--heading-color-default);
  --heading-size: var(--fs-heading-3);
  --heading-font: var(--heading-font-default);
  --heading-weight: var(--heading-font-weight-default);
  --description-font: var(--body-font-default); 
  --description-size: var(--fs-body);
  --description-color: var(--body-color-default);
  --description-weight: var(--body-font-weight-default);
  --cta-weight: var(--heading-font-weight-light-default);
  --background-color: var(--cl-background-primary-default);
  --border-radius: 4px;
  --border-width: 2px;
  --border-color: var(--cl-border-default);
  --duration-time: var(--action-duration-primary-default);
}

:host {
  --heading-line-height: 1;
  --heading-bottom-padding: 0.5rem;
}

.img-feature-card {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  justify-content: space-between;
  padding: var(--spacing-150-300);
  row-gap: 1rem;
  
  @media(min-width: 768px) {
    flex-direction: row;
    column-gap: 7%;
  }
}

.img-feature-card--main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cta-wrapper {
  margin-top: auto;
}

.image-wrapper {
  width: 100%;

  @media(min-width: 768px) {
    max-width: 40%;
  }
}

slot[name='eyebrow']::slotted(*) {
  font-size: var(--eyebrow-size);
  color: var(--eyebrow-color);
  font-family: var(--description-font);
  text-transform: uppercase;
  font-weight: var(--eyebrow-weight);
  margin: 0px;
}

slot[name='heading']::slotted(*) {
  line-height: var(--heading-line-height);
  padding-bottom: var(--heading-bottom-padding);
  font-size: var(--heading-size);
  color: var(--heading-color);
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
  margin: 0px;
}

slot[name='description']::slotted(*) {
  font-size: var(--description-size);
  font-family: var(--description-font);
  color: var(--description-color);
  font-weight: var(--description-weight);
}

slot[name='image']::slotted(img),
slot[name='image']::slotted(picture) {
  object-fit: contain;
  width: 100%;
  height: auto;
}
  
slot[name^='link-cta']::slotted(a)::before {
  display: flex;
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

slot[name^='link-cta']::slotted(a:focus) {
  outline: none;
}

slot[name^='link-cta']::slotted(a:focus)::before {
  outline: solid 2px var(--border-color);
  outline-offset: 4px;
}
`