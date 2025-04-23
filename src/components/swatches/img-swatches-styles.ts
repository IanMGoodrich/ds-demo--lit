import { css } from "lit";
export const swatchStyles = css`

.img-swatch {
  display: flex;
  padding: var(--spacing-1-175);
  background-color: var(--bg-color);
}

.img-swatch--typography {
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
}

.img-swatch--colors {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.color-swatch-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px var(--cl-charcoal-darkest);
  background-color: var(--cl-white);
  padding: 0.5rem;
  width: fit-content;
  

  .color-value-label,
  .color-var-label {
    font-size: var(--fs-eyebrow);
    color: var(--body-color);
    font-family: var(--ff-body);
  }
  .color-swatch{
    display: block;
    height: 25px;
    width: 25px;
  }
}

:host([theme='default']) {
  --bg-color: var(--background-color-primary-default);
  --ff-heading: var(--heading-font-default);
  --heading-font-weight: var(--heading-font-weight-default);
  --heading-color: var(--heading-color-default);
  --fs-body: var(--fs-body);
  --ff-body: var(--body-font-default);
  --body-color: var(--body-color-default);
}
:host([theme='sprawl']) {
  --bg-color: var(--background-color-primary-sprawl);
  --ff-heading: var(--heading-font-sprawl);
  --heading-font-weight: var(--heading-font-weight-sprawl);
  --heading-color: var(--heading-color-sprawl);
  --fs-body: var(--fs-body);
  --ff-body: var(--body-font-sprawl);
  --body-color: var(--body-color-sprawl);
}
:host([theme='floral']) {
  --bg-color: var(--background-color-primary-floral);
  --ff-heading: var(--heading-font-floral);
  --heading-font-weight: var(--heading-font-weight-floral);
  --heading-color: var(--heading-color-floral);
  --fs-body: var(--fs-body);
  --ff-body: var(--body-font-floral);
  --body-color: var(--body-color-floral);
}

`