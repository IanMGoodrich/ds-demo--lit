import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"
import { swatchStyles } from "./img-swatches-styles";
import { globalOverrides } from "@styles/overrides";
import tokens from '../../styles/token-library.css?raw';
import { Theme, CssVarVal } from "src/utilities/types";
import '../scaling-grid/img-scaling-grid';
@customElement("img-swatches")
export class ImgSwatches extends LitElement {
  static styles = [swatchStyles, globalOverrides];

  @property({type: Array})
  colorTokens: Array<CssVarVal>;
  
  @property({type: Array})
  themeTokens: Array<CssVarVal>;

  @property({type: Array})
  themeColorTokens: Array<CssVarVal>;

  @property({type: String, reflect: true})
  theme: Theme;

  firstUpdated() {
    const colorMatch =new RegExp('^ *(--[^:\\s]*(?:cl)[^:\\s]*):\\s*([^;]+);','gm');
    const themeColorMatch:RegExp = new RegExp(
      `(--[^:\\s]*${this.theme}[^:\\s]*color[^:\\s]*|--[^:\\s]*color[^:\\s]*${this.theme}[^:\\s]*):\\s*([^;]+);`,
      'gm'
    );
    const themeMatch = new RegExp(`(--[^:\s]*${this.theme}[^:\s]*):\s*([^;]+);`, 'gm');
    
    this.colorTokens = this.filterTheme(tokens, colorMatch);
    this.themeTokens  = this.filterTheme(tokens, themeMatch);
    this.themeColorTokens  = this.filterTheme(tokens, themeColorMatch);
  }

  render() {
    return html`
      <section class="img-swatch">
        <div class="img-swatch--main-wrapper">
          <div class="img-swatch--typography">
            <h3 class="img-swatch--heading">
              Heading Text
            </h3>
            <p class="img-swatch--body">Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum. Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit.</p>
            <div class="img-swatch--links-wrapper">
              <a class="img-swatch--link" href="#">Link example</a>
              <a class="img-swatch--link-hover" href="#">Link hover example</a>
              <a class="img-swatch--link-focus" href="#">Link focus example</a>
            </div>
          </div>
          <div class="img-swatch--colors-wrapper">
            <h4> Theme colors: </h4>
            <div class="img-swatch--colors">
              <img-scaling-grid columns="4" col-gap="1rem" row-gap="1rem" item-min-width="250px">
                ${this.themeColorTokens?.map(color => this.generateSwatches(color))}
              </img-scaling-grid>
            </div>
            <h4> Base colors: </h4>
            <div class="img-swatch--colors">
              <img-scaling-grid columns="4" col-gap="1rem" row-gap="1rem" item-min-width="250px">
                ${this.colorTokens?.map(color => this.generateSwatches(color))}
              </img-scaling-grid>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  
  generateSwatches(cssVar: CssVarVal) {
    return html `
      <div class="color-swatch-wrapper">
        <div class="color-info-wrapper">
          <div class="color-info">
            <span class="color-var-label">Variable name:</span>
            <span class="color-var-value">${cssVar.var}</span>
          </div>
          <div class="color-info">
            <span class="color-value-label">Variable value:</span>
            <span  class="color-value-value">${cssVar.val}</span>
          </div>
        </div>
        <span class="color-swatch" style='background: ${cssVar.val}'></span>
      </div>
    `
  }

  filterTheme(css: string, exp: RegExp) {
    const tokens: Array<CssVarVal> = [];
    
    let match;
    while ((match = exp.exec(css)) !== null) {
      tokens.push({ var: match[1], val: match[2] });
    }
    return tokens;
  };

}

declare global {
  interface HTMLElementTagNameMap {
    "img-swatches": ImgSwatches;
  }
}
