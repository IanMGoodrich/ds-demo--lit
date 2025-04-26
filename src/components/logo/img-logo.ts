import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"
import  {logoStyles} from './img-logo-styles';
import { globalOverrides } from "@styles/overrides";
import { Theme } from "src/utilities/types";
import '../svg/img-svg';

export const logoVariants = ['sprawl','floral','default'] as const;
export type Logo = (typeof logoVariants)[number];

@customElement("img-logo")
export class ImgLogo extends LitElement {
  static styles = [logoStyles, globalOverrides];

  @property({type: String, reflect: true})
  logo: Logo;

  @property({type: String, reflect: true})
  theme: Theme;
  
  @property({type: Boolean})
  decorative: boolean;

  @property({type: String})
  logoSize: string = '120px';

  @property({type: String})
  logoColor: string = 'var(--logo-color)';

  @property({type: String})
  logoBG: string = 'var(--logo-bg-color)';

  firstUpdated() {
  }

  render() {
    return html`
    <section class="img-logo">
      ${this.decorative ? html`<a href="/" aria-label="return to homepage">`: null}
        ${this.svgTemplate()} 
      ${this.decorative ? html`</a>`: null}
    </section>
      `;
  }

  svgTemplate() {
    return html`
      <img-svg name='${this.logo}_logo' size=${this.logoSize} color="${this.logoColor}"></img-svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-logo": ImgLogo;
  }
}
