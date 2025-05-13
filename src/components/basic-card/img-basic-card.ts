import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js"
import { cardStyles } from "./img-basic-card-styles";
import { globalShared } from "@styles/shared-shadow-dom";
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
  static styles = [cardStyles, globalShared];

  /**
   * Ref to cta slot
   */
  ctaRef: NodeListOf<Element>;

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
            <slot name="link-cta-primary"></slot>
            <slot name="link-cta-secondary"></slot>
            <slot name="button-cta-primary"></slot>
            <slot name="button-cta-secondary"></slot>
          </div>
        </div>
      </section>
    `;
  }

  handleSilentCTA() {        
    const ctaSlot= this.querySelectorAll('[slot^=link-cta]');
    if (ctaSlot.length <= 0) {
      return;
    }
    if (ctaSlot.length > 0) {
      console.log(ctaSlot[0]);
      
      const linkText = ctaSlot[0].innerHTML;
      if (linkText === '') {
        this.silentLink = true;
        const titleText = this.headingRef[0].innerHTML;
        ctaSlot[0].setAttribute('aria-label', titleText);
      }      
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-basic-card": ImgBasicCard;
  }
}
