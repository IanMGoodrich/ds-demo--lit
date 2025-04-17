import { css } from "lit";
export const cardStyles = css`
:host {
  display: flex;
  width: fit-content;
  --heading-line-height: 1;
  --heading-bottom-padding: 0.5rem;
}

:host([theme='floral']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-color: var(--cl-orange-hot);
  --heading-color: var(--cl-orange-hot);
  --heading-font: var(--ff-melodrama);
  --heading-size: var(--fs-heading-3);
  --description-font: var(--ff-manrope);
  --description-size: var(--fs-body); 
  --description-color: var(--cl-text-default-dark);
  --background-color: var(--cl-chartreuse-lightest);
  --border-radius: 8px;
  --border-width: 2px;
  --border-color: var(--cl-orange-hot);
}

:host([theme='sprawl']) {
  --eyebrow-size: var(--fs-eyebrow);
  --eyebrow-color: var(--cl-text-default-light);
  --heading-color: var(--cl-text-default-light);
  --heading-font: var(--ff-nippo);
  --heading-size: var(--fs-heading-3);
  --description-font: var(--ff-teko);
  --description-size: var(--fs-body);
  --description-color: var(--cl-text-default-light);
  --background-color: var(--cl-charcoal-darkest);
  --border-width: 1px;
  --border-radius: 0px;
}

:host([theme='default']) {
  --eyebrow-size: var(--fs-eyebrow);
  --heading-color: var(--cl-text-default-dark);
  --heading-size: var(--fs-heading-3);
  --heading-font: var(--ff-melodrama);
  --description-font: var(--ff-manrope); 
  --description-size: var(--fs-body);
  --description-color: var(--cl-text-default-dark);
  --background-color: #ffff;
  --border-radius: 4px;
  --border-width: 2px;
  --border-color: var(--cl-charcoal-darkest);
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

 slot[name='cta']::slotted(a)::after {
  display: flex;
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
 }

 slot[name='cta']::slotted(a:focus) {
  outline: none;
 }

 slot[name='cta']::slotted(a:focus)::after {
   outline: solid 2px red;
   outline-offset: 4px;
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


`