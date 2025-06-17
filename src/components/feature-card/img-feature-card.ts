import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"
import { featureCardStyles } from "./img-feature-card-styles";
import { globalShared } from "@styles/shared-shadow-dom";
import { Theme } from "src/utilities/types";

/**
 * img-feature-card component
 * @slot - heading:
 * @slot - image:
 * @slot - eyebrow:
 * @slot - description:
 * @slot - cta:
 */

@customElement("img-feature-card")
export class ImgFeatureCard extends LitElement {
  static styles = [featureCardStyles, globalShared];

  @property({type: String})
  theme: Theme;

  render() {
    return html`
      <section class="img-feature-card">
        <div class="img-feature-card--main-content">
          <div class="eyebrow-wrapper">
            <slot name="eyebrow"></slot>
          </div>
          <div class="heading-wrapper">
            <slot name="heading"></slot>
          </div>
          <div class="description-wrapper">
            <slot name="description"></slot>
          </div>
          <div class="cta-wrapper">
            <slot name="link-cta-primary"></slot>
            <slot name="button-cta-primary"></slot>
          </div>
        </div>
        <div class="image-wrapper">
          <slot name="image"></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-feature-card": ImgFeatureCard;
  }
}
