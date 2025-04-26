import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js"
import { cardStyles } from "./img-basic-card-styles";
import { globalOverrides } from "@styles/overrides";
import { Theme } from "src/utilities/types";

/**
 * img-basic-card component
 * @slot - heading:
 * @slot - image:
 * @slot - eyebrow:
 * @slot - description:
 * @slot - cta:
 */

@customElement("img-basic-card")
export class ImgBasicCard extends LitElement {
  static styles = [cardStyles, globalOverrides];

  /**
   * Ref to cta slot
   */
  @queryAssignedElements({slot: 'cta', flatten: true})
  ctaRef: Array<HTMLElement>;

  /**
   * Ref to heading slot
   */
  @queryAssignedElements({slot: 'heading', flatten: true})
  headingRef: Array<HTMLElement>;

  @property({type: String})
  theme: Theme = 'default';

  /**
   * If no text is added to slotted link will set to true and prevent cta slot from taking up space.
   */
  @property({type: Boolean, reflect: true, attribute: 'silent-link'})
  silentLink: boolean;

  firstUpdated() {
    this.handleSilentCTA()
  }

  render() {
    return html`
      <section class="img-basic-card">
        <div class="img-basic-card--top-content">
          <div class="eyebrow-wrapper">
            <slot name="eyebrow"></slot>
          </div>
          <div class="heading-wrapper">
              <slot name="heading"></slot>
          </div>
          <div class="image-wrapper">
            <slot name="image"></slot>
          </div>
        </div>
        <div class="img-basic-card--main-content">
          <div class="description-wrapper">
            <slot name="description"></slot>
          </div>
          <div class="cta-wrapper">
            <slot name="cta"></slot>
          </div>
        </div>
      </section>
    `;
  }

  handleSilentCTA() {    
    if (this.ctaRef.length <= 0) {
      return;
    }
    if (this.ctaRef.length > 0) {
      const linkText = this.ctaRef[0].innerHTML;
      if (linkText === '') {
        this.silentLink = true;
        const titleText = this.headingRef[0].innerHTML;
        this.ctaRef[0].setAttribute('aria-label', titleText);
      }      
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-basic-card": ImgBasicCard;
  }
}
