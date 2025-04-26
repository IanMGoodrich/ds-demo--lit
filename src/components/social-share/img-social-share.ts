import { LitElement, html } from "lit";
import { customElement, property, query} from "lit/decorators.js";
import { socialShareStyles } from "./img-social-share-styles";
import { globalOverrides } from "@styles/overrides";
import socials from './socialsData';
import { Theme } from "src/utilities/types";
import '../svg/img-svg';

@customElement("img-social-share")
export class ImgSocialShare extends LitElement {
  static styles = [socialShareStyles, globalOverrides];

  @property({type: String, reflect: true})
  theme: Theme;

  @query('.img-social-share--list')
  listRef: HTMLElement;

  /**
   * Facebook
   */
  @property({type: Boolean, reflect: true})
  fb:boolean;
  /**
   * Twitter
   */
  @property({type: Boolean, reflect: true})
  twx:boolean;
  /**
   * Instagram
   */
  @property({type: Boolean, reflect: true})
  insta:boolean;
  /**
   * LinkedIn
   */
  @property({type: Boolean, reflect: true})
  li:boolean;
  /**
   * Email
   */
  @property({type: Boolean, reflect: true})
  email:boolean;
  /**
   * Will share url of the current page
   */
  @property({type: Boolean})
  shareCurrent:boolean;
  /**
   * Alternate URL to share.
   */
  @property({type: String})
  shareURL:string;

  render() {
    
    return html`
      <nav class="img-social-share">
        <ul class="img-social-share--list">
          ${this.fb ? this.generateListItems('facebook') : null}
          ${this.twx ? this.generateListItems('twitter') : null}
          ${this.insta ? this.generateListItems('insta') : null}
          ${this.li ? this.generateListItems('linkedin') : null}
          ${this.email ? this.generateListItems('email') : null}
        </ul>
      </nav>
    `;
  }

  generateHref(social:string) {
    let href = socials[social as keyof typeof socials].share;
    if (this.shareURL && this.shareURL !== '') {
      href+=this.shareURL;
    }
    if (this.shareCurrent) {
      href+=window.location.href;
    }
    if (!this.shareURL && !this.shareCurrent) {
      href+= socials[social as keyof typeof socials].home;
    }
    return href;
  }

  getSVG(social: string) {
   return socials[social as keyof typeof socials].svg;
  }

  generateListItems(social:string) {
    return html`
    <li class="img-social-share--list-item">
      <a class="img-social-share--link" href=${this.generateHref(social)}>
        <img-svg name=${this.getSVG(social)} color="var(--svg-color)" size="20px"></img-svg>
      </a>
    </li>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-social-share": ImgSocialShare;
  }
}
