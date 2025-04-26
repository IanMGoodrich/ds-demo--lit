import { css } from "lit";
export const globalOverrides = css`
h1, h2, h3, h4, h5, h6 {
  all: unset;
}

p {
  all: unset;
  display: block;
  margin-bottom: 1rem;
}

p:first-of-type {
  margin-top: 1rem;
}

a {
  all: unset;
  cursor: pointer;
}
`