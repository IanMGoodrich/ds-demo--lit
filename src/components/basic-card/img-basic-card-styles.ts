import { css } from "lit";
export const cardStyles = css`
:host {
  display: flex;
  width: fit-content;
  --heading-line-height: 1;
  --heading-bottom-padding: 0.5rem;
}

:host([silent-link]) {
  .cta-wrapper {
    height: 0px;
    width: 0px;
  }
  slot[name='cta']::slotted(a) {
    height: 0px;
    width: 0px;
  }
}

:host([theme='floral']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-color: var(--heading-color-floral);
  --eyebrow-font: var(--body-font-floral);
  --heading-color: var(--heading-color-floral);
  --heading-font: var(--heading-font-floral);
  --heading-size: var(--fs-heading-3);
  --description-font: var(--body-font-floral);
  --description-size: var(--fs-body); 
  --description-color: var(--body-color-flora);
  --background-color: var(--background-color-primary-floral);
  --border-radius: 8px;
  --border-width: 2px;
  --border-color: var(--border-color-floral);
  --duration-time: var(--action-duration-primary-floral);
  --action-color-primary: var(--action-color-primary-floral);
  --action-color-secondary: var(--action-color-secondary-floral);
}

:host([theme='sprawl']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-font: var(--body-font-sprawl);
  --eyebrow-color: var(--heading-color-sprawl);
  --heading-color: var(--heading-color-sprawl);
  --heading-font: var(--heading-font-sprawl);
  --heading-size: var(--fs-heading-3);
  --description-font: var(--body-font-sprawl);
  --description-size: var(--fs-body);
  --description-color: var(--body-color-sprawl);
  --background-color: var(--background-color-primary-sprawl);
  --border-color: var(--border-color-sprawl);
  --border-width: 1px;
  --border-radius: 0px;
  --duration-time: var(--action-duration-primary-sprawl);
  --action-color-primary: var(--action-color-secondary-sprawl);
  --action-color-secondary: var(--action-color-primary-sprawl);
}

:host([theme='default']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-font: var(--heading-font-default);
  --eyebrow-color: var(--heading-font-default);
  --heading-color: var(--heading-color-default);
  --heading-size: var(--fs-heading-3);
  --heading-font: var(--heading-font-default);
  --description-font: var(--body-font-default); 
  --description-size: var(--fs-body);
  --description-color: var(--body-color-default);
  --background-color: var(--background-color-primary-default);
  --border-radius: 4px;
  --border-width: 2px;
  --border-color: var(--border-color-default);
  --duration-time: var(--action-duration-primary-default);
  --action-color-primary: var(--action-color-primary-default);
  --action-color-secondary: var(--action-color-secondary-default);
}

.img-basic-card {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  position: relative;
  padding: var(--padding-1-175);
  background-color: var(--background-color);
  border: var(--border-width) var(--border-color) solid;
  border-radius: var(--border-radius);
}

slot[name='eyebrow']::slotted(*) {
  font-size: var(--eyebrow-size);
  color: var(--heading-color);
  font-family: var(--description-font);
  text-transform: uppercase;
  font-weight: 200;
  margin: 0px;
}

slot[name='heading']::slotted(*) {
  line-height: var(--heading-line-height);
  padding-bottom: var(--heading-bottom-padding);
  font-size: var(--heading-size);
  color: var(--heading-color);
  font-family: var(--heading-font);
  font-weight: 600;
  margin: 0px;
}

slot[name='description']::slotted(*) {
  font-size: var(--description-size);
  font-family: var(--description-font);
  color: var(--description-color);
}

slot[name='image']::slotted(img),
slot[name='image']::slotted(picture) {
  object-fit: contain;
  width: 100%;
  height: auto;
}

slot[name='cta']::slotted(a) {
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--description-color);
  font-size: var(--description-size);
  font-family: var(--description-font);
  text-decoration: none;
}

slot[name='cta']::slotted(a)::after {
  content: '';
  display: flex;
  height: 2px;
  width: 0px;
  transition: var(--duration-time);
  background-color: var(--action-color-primary);
}  

slot[name='cta']::slotted(a:hover)::after {
  transition: var(--duration-time);
  width: 100%;
}

slot[name='cta']::slotted(a)::before {
  display: flex;
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

slot[name='cta']::slotted(a:focus) {
  outline: none;
}

slot[name='cta']::slotted(a:focus)::before {
  outline: solid 2px var(--border-color);
  outline-offset: 4px;
}
`
