import { css } from "lit";
export const scalingGridStyles = css`
  .img-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--min-col-width, 200px), 1fr)
    );
    row-gap: var(--row-gap, 1.5rem);
    column-gap: var(--col-gap, 2rem);
    justify-content: center;
  }

  :host:not([one-col]){
    ::slotted(*) {
      display: flex;
      align-self: var(--align-items);
      justify-self: var(--justify-items);
      height: fit-content;
    }
  }

  :host([equal-height]:not([one-col])) {
    ::slotted(*) {
      height: 100%;
    }
  }

  :host([one-col][one-col-layout="centered"]) {
    ::slotted(*) {
      margin: 0 auto;
    }

    .img-grid {
      display: flex;
      flex-direction: column;
    }
  }

  :host([one-col][one-col-layout="full-width"]){
    ::slotted(*) {
      width: 100%;
    }

    .img-grid{
      display: flex;
      flex-direction: column;
    }
  }
`;