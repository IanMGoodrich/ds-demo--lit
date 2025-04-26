import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"
import { footerStyles } from "./img-footer-styles.ts";
import { globalOverrides } from "@styles/overrides.ts";
import { Theme } from "src/utilities/types";

@customElement("img-footer")
export class ImgFooter extends LitElement {
  static styles = [footerStyles, globalOverrides];

  @property({type: String, reflect: true})
  theme: Theme;

  render() {
    return html`
      <section class="img-footer">
        <div class="img-footer-wrapper">
          <div class="img-footer--top-content">
            <div class="img-footer--logo-wrapper">
              <slot name="logo"></slot>
            </div>
            <div class="img-footer--top-nav-wrapper">
              <slot name="top-nav"></slot>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-footer": ImgFooter;
  }
}
