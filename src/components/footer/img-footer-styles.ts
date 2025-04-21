import { css } from "lit";
export const footerStyles = css`

slot[name='top-nav']::slotted(*) {
  all: unset;
  border: solid red 2px;
  display: block;
}
slot[name='top-nav']::slotted(* > ul > li) {
  all: unset;
  border: solid green 2px;
  display: block;
}
slot[name='top-nav']::slotted(nav >ul > li > a) {
  all: unset;
  border: solid blue 2px;
  display: block;
}
  
`