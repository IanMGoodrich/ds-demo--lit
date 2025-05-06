import { css } from "lit";
export const swatchStyles = css`

.img-swatch {
  display: flex;
  padding: var(--spacing-100-175);
  background-color: var(--bg-color);
}

.img-swatch--typography {
  display: flex;
  flex-direction: column;

}

.img-swatch--heading {
  font-size: var(--fs-heading-3);
  font-family: var(--ff-heading);
  color: var(--heading-color);
  font-weight: var(--heading-font-weight);
}

.img-swatch--body {
  font-size: var(--fs-body);
  font-family: var(--ff-body);
  color: var(--body-color);
  font-weight: var(--body-font-weight);
}

.img-swatch--links-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: .75rem;

  [class*='img-swatch--link'] {
    font-size: var(--fs-body);
    font-family: var(--ff-body);
    font-weight: var(--link-weight);
    width: fit-content;
    text-decoration: none;
  }
  .img-swatch--link {
    color: var(--link-color);
  }
  .img-swatch--link-hover {
    color: var(--link-color-hover);

    &::after {
      content: '';
      display: flex;
      height: 2px;
      width: 100%;
      background-color: var(--link-color-outline);
    }
  }

  .img-swatch--link-focus {
    color: var(--link-color-focus);
    outline: solid var(--outline-width) var(--outline-color);
    outline-offset: var(--outline-offset);
  }
}

.img-swatch--colors-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1rem;

  h4 {
    font-size: var(--fs-heading-6);
    font-weight: 600;
    color: var(--heading-color);
  }
}

.color-swatch-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px var(--cl-charcoal-lighter);
  background-color: var(--cl-white);
  padding: 1.25rem;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

.color-info-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.color-info {
  display: flex;
  flex-direction: column;
}

.color-value-label,
.color-var-label {
  font-size: var(--fs-static-14);
  color: var(--cl-charcoal-darkest);
  font-family: var(--ff-satoshi);
}

.color-value-value,
.color-var-value {
  font-size: var(--fs-static-14);
  color: var(--cl-charcoal-darkest);
  font-family: var(--ff-satoshi-it);
  font-weight: 600;
}

.color-swatch{
  display: block;
  height: 45px;
  width: 45px;
  border: solid 1px var(--cl-charcoal-lighter);
}

:host([theme='default']) {
  --bg-color: var(--background-color-primary-default);
  --ff-heading: var(--heading-font-default);
  --heading-font-weight: var(--heading-font-weight-default);
  --heading-color: var(--heading-color-default);
  --fs-body: var(--fs-body);
  --ff-body: var(--body-font-default);
  --body-color: var(--body-color-default);
  --link-size: var(--fs-body);
  --link-color: var(--body-color-default);
  --link-weight: var(--link-font-weight-default);
  --link-color-hover: var(--action-color-primary-default);
  --link-color-focus: var(--action-color-primary-default);
  --outline-color: var(--action-color-primary-default);
  --outline-width: var(--outline-width-default);
  --outline-offset: var(--outline-offset-default);
}

:host([theme='sprawl']) {
  --bg-color: var(--background-color-primary-sprawl);
  --ff-heading: var(--heading-font-sprawl);
  --heading-font-weight: var(--heading-font-weight-sprawl);
  --heading-color: var(--heading-color-sprawl);
  --fs-body: var(--fs-body);
  --ff-body: var(--body-font-sprawl);
  --body-color: var(--body-color-sprawl);
  --link-size: var(--fs-body);
  --link-weight: var(--link-font-weight-sprawl);
  --link-color: var(--link-color-static-sprawl);
  --link-color-hover: var(--action-color-primary-sprawl);
  --link-color-focus: var(--action-color-primary-sprawl);
  --outline-color: var(--action-color-primary-sprawl);
  --outline-width: var(--outline-width-sprawl);
  --outline-offset: var(--outline-offset-sprawl);
}

:host([theme='floral']) {
  --bg-color: var(--background-color-primary-floral);
  --ff-heading: var(--heading-font-floral);
  --heading-font-weight: var(--heading-font-weight-floral);
  --heading-color: var(--heading-color-floral);
  --fs-body: var(--fs-body);
  --ff-body: var(--body-font-floral);
  --body-color: var(--body-color-floral);
  --link-size: var(--fs-body);
  --link-weight: var(--link-font-weight-floral);
  --link-color: var(--link-color-static-floral);
  --link-color-hover: var(--action-color-primary-floral);
  --link-color-focus: var(--action-color-primary-floral);
  --outline-color: var(--action-color-primary-floral);
  --outline-width: var(--outline-width-floral);
  --outline-offset: var(--outline-offset-floral);
}
`