import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"
import { swatchStyles } from "./img-swatches-styles";
import tokens from '../../styles/token-library.css?raw';
import { Theme, CssVarVal } from "src/utilities/types";




@customElement("img-swatches")
export class ImgSwatches extends LitElement {
  static styles = swatchStyles;

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
            <a class="img-swatch--link" href="#">Link example</a>
          </div>
          <div class="img-swatch--colors-wrapper">
            <h4> Theme colors: </h4>
            <div class="img-swatch--colors">
              ${this.themeColorTokens?.map(color => this.generateSwatches(color))}
            </div>
            <h4> Base colors: </h4>
            <div class="img-swatch--colors">
              ${this.colorTokens?.map(color => this.generateSwatches(color))}
            </div>
          </div>
        </div>
      </section>
    `;
  }
  
  generateSwatches(cssVar: CssVarVal) {
    return html `
      <div class="color-swatch-wrapper">
        <span class="color-swatch" style='background: ${cssVar.val}'></span>
        <span class="color-var-label">Variable name: ${cssVar.var}</span>
        <span class="color-value-label">Variable value: ${cssVar.val}</span>
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
