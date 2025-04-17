import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js"
import { cardStyles } from "./basic-card-styles";
import { Theme } from "src/utilities/types";

/**
 * basic-card component
 * @slot - heading:
 * @slot - image:
 * @slot - eyebrow:
 * @slot - description:
 * @slot - cta:
 */

@customElement("basic-card")
export class BasicCard extends LitElement {
  static styles = cardStyles;

  /**
   * Ref to cta slot
   */
  @queryAssignedElements({slot: 'cta', flatten: true})
  ctaRef: Array<HTMLElement>;

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
        <div class="basic-card--top-content">
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
        <div class="basic-card--main-content">
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
      }      
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "basic-card": BasicCard;
  }
}
