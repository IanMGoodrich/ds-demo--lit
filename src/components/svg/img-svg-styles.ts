import { css } from "lit";
export const svgStyles = css`
  .img-svg {
    display: flex;
  }
  svg {
    color: var(--svg-fill);  
    fill: var(--svg-fill);
    width: 100%;
    max-width: var(--svg-size);  
  }
`