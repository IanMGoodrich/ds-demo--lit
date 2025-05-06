import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { svgStyles } from "./img-svg-styles.ts";
import { globalShared } from "@styles/shared-shadow-dom";
import svgs from '../../assets/vectors.ts';

@customElement("img-svg")
export class ImgSvg extends LitElement {
  static styles = [svgStyles, globalShared];

  /** 
   * Svg name. 
   */
  @property({type: String})
  name: string;

  /** 
   * The size of the icon to draw.
   */
  @property({type: String})
  size: string = '20px';

  /**
   * Fill color;
   */
  @property({type: String})
  color: string;

  /**
   * Aria label text;
   */
  @property({type: String})
  label: string;

  /**
   * Fill color;
   */
  @property({type: Boolean, reflect: true})
  decorative: true;

  
  
  render() {
    const svgMarkup = svgs[this.name as keyof typeof svgs];
    this.style.setProperty('--svg-size', `${this.size}`)
    this.style.setProperty('--svg-fill', `${this.color}`)
    return html`
      <i class="img-svg" alt="${this.decorative ? '' : this.label}" aria-hidden=${this.decorative}>
        ${ (svgMarkup && svgMarkup !== 'undefined') 
          ? unsafeSVG(svgMarkup)
          : null
        }
      </i>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-svg": ImgSvg;
  }
}
