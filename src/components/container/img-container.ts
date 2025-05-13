import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { containerStyles } from "./img-container-styles";
import { globalShared } from "@styles/shared-shadow-dom";
import { styleIsValid } from "../../utilities/validateStyle";
export const containerWidths = ['default', 'narrow', 'full-bleed'] as const;
export type ContainerWidth = (typeof containerWidths)[number];

@customElement("img-container")
export class ImgContainer extends LitElement {
  static styles = [containerStyles, globalShared];

  @property({type: String, reflect: true})
  width: ContainerWidth = 'default';

  @property({type: String, attribute: 'col-gap'})
  colGap: string;

  @property({type: String, attribute: 'row-gap'})
  rowGap: string;

  @property({type: String, attribute: 'top-padding'})
  topPadding: string;

  @property({type: String, attribute: 'bottom-padding'})
  bottomPadding: string;

  @property({type: String, attribute: 'side-padding'})
  sidePadding: string;

  connectedCallback() {
    super.connectedCallback()
    this.setVars();
  }

  render() {
    return html`
    <div class="img-container">
      <div class="img-container--content-wrapper">
        <slot></slot>
      </div>
    </div>
    `;
  }
  
  
  setVars() {
    if (styleIsValid('padding-bottom', this.bottomPadding)) {
      this.style.setProperty('--container-bottom-padding', this.bottomPadding)
    }
    if (styleIsValid('padding-top', this.topPadding)) {
      this.style.setProperty('--container-top-padding', this.topPadding)
    }
    if (styleIsValid('padding', this.sidePadding)) {
      this.style.setProperty('--container-side-padding', this.sidePadding)
    }
    if (styleIsValid('row-gap', this.rowGap)) {
      this.style.setProperty('--container-row-gap', this.rowGap)
    }
    if (styleIsValid('column-gap', this.colGap)) {
      this.style.setProperty('--container-column-gap', this.colGap)
    }
    this.style.setProperty('--container-max-width', `var(--container-max-width-${this.width})`)

  }
}


declare global {
  interface HTMLElementTagNameMap {
    "img-container": ImgContainer;
  }
}
