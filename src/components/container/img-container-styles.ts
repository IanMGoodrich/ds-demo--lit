import { css } from "lit";
export const containerStyles = css`
  .img-container {
    display: flex;
    flex-direction: column;
    padding-top: var(--container-top-padding);
    padding-left: var(--container-side-padding);
    padding-right: var(--container-side-padding);
    padding-bottom: var(--container-bottom-padding);
  }

  .img-container--content-wrapper {
    display: grid;
    row-gap: var(--container-row-gap);
    column-gap: var(--container-column-gap);
    max-width: var(--container-max-width);
    margin: 0 auto;
    width: 100%;
  }
`