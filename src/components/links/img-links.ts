import { css } from "lit";
export const linkStyles = css`
a.default-link,
slot[name='link-cta-default']::slotted(a) {
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--link-color);
  font-size: var(--fs-body);
  font-family: var(--ff-body);
  text-decoration: none;
  font-weight: var(--link-weight);
}

a.default-link::after,
slot[name='link-cta-default']::slotted(a)::after {
  content: '';
  display: flex;
  height: 2px;
  width: 0px;
  transition: var(--duration-time);
  background-color: var(--action-color-primary);
}  

a.default-link:hover,
slot[name='link-cta-default']::slotted(a:hover) {
  color: var(--link-color-hover);
}

a.default-link:hover::after,
slot[name='link-cta-default']::slotted(a:hover)::after {
  transition: var(--duration-time);
  width: 100%;
}

a.default-link:focus,
slot[name='link-cta-default']::slotted(a:focus) {
  color: var(--link-color-focus);
  outline: solid var(--outline-color) var(--outline-width);
  outline-offset: var(--outline-offset);
}
`