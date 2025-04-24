import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { scalingGridStyles } from "./img-scaling-grid-styles";
import { styleMap } from 'lit/directives/style-map.js';
import { debounce } from '../../utilities/debounce';

export const oneColLayouts = ['centered', 'full-width'] as const;
type OneColLayout = (typeof oneColLayouts)[number];

export const gridItemAlignments = ['center', 'start', 'end'] as const;
type ScalingGridItemAlignment = (typeof gridItemAlignments)[number];


@customElement("img-scaling-grid")
export class ImgScalingGrid extends LitElement {
  static styles = scalingGridStyles;
  
  /**
   * Maximum column count.
   */
  @property({type: String, reflect: true})
  columns = '4';

  /**
   * Gap between rows.
   */
  @property({type: String, reflect: true, attribute: 'row-gap'})
  rowGap = '1.5rem';

  /**
   * Gap between columns.
   */
  @property({type: String, reflect: true, attribute: 'col-gap'})
  colGap = '1.5rem';

  /**
   * Min-width of each grid-item.
   */
  @property({type: String, reflect: true, attribute: 'item-min-width'})
  itemMinWidth = '350px';

  /**
   * Column alignment. Use flex/grid values 'center', 'start', 'end'
   */
  @property({
    type: String, reflect: false, attribute: 'align-items'})
  alignItems: ScalingGridItemAlignment;

  /**
   * Row alignment. Use flex/grid values 'center', 'start', 'end' 
   */
  @property({type: String, reflect: false, attribute: 'justify-items'})
  justifyItems: ScalingGridItemAlignment = 'center';

  /**
   * Sets all items in row to equal height.
   */
  @property({type: Boolean, reflect: true, attribute: 'equal-height'})
  equalHeight = false;

  /**
   * If slotted content is one column width
   */
  @property({type: Boolean, reflect: true, attribute: 'one-col'})
  oneCol: boolean;

  /**
   * Preferred behavior when grid is down to one column. 
   * Either 'centered' or 'full-width';
   */
  @property({type: String, reflect: true, attribute: 'one-col-layout'})
  oneColLayout: OneColLayout = "centered";

  /**
   * Ref to slotted content
   */
  @queryAssignedElements({flatten: true})
  slottedContent: Array<HTMLElement>

  private debouncedResize = debounce(() => this.handleOneCol(), 0);

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.debouncedResize)
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this.debouncedResize)
    super.disconnectedCallback()
  }

  handleOneCol() {        
    const docWidth = document.documentElement.clientWidth;
    const rowCount = new Set<number>();
    this.slottedContent.forEach((el) => {
      rowCount.add((el as HTMLElement).offsetTop);
    });

    if (this.oneCol) {
      return this.oneCol = (this.convertRemToPx(this.itemMinWidth) * 2.25) > docWidth;
    } else {
      return this.oneCol = rowCount.size === this.slottedContent.length;
    }
  }

  /**
   * Timeout set to allow slotted content to paint.
   */
  firstUpdated() {    
    setTimeout(() => this.handleOneCol(),0)
  }
  
  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('columns')) {
      this.columns = this.parseClampedInt(this.columns, 4, 1).toString();
    }
  }
  
  render() {
    const styleVars = {
      '--max-cols': this.columns,
      '--min-col-width': this.itemMinWidth,
      '--row-gap': this.rowGap,
      '--col-gap': this.colGap,
      '--justify-items': this.justifyItems,
      '--align-items': this.alignItems,
    };


    return html`
    <section class="img-grid" style=${styleMap(styleVars)}>
      <slot></slot>
    </section>`;
  }

  parseClampedInt(val: string, fallback: number, min: number): number {
    const parsed = parseInt(val);
    return isNaN(parsed) ? fallback : Math.max(min, Math.floor(parsed));
  }

  convertRemToPx(item: string) {
    if (item.endsWith('rem')) {
      return parseFloat(item) * 16;
    } else {
      return parseInt(item, 10);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-scaling-grid": ImgScalingGrid;
  }
}
