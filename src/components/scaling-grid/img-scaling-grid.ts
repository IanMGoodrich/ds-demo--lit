import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements, query } from "lit/decorators.js";
import { scalingGridStyles } from "./img-scaling-grid-styles";
import { globalShared } from "@styles/shared-shadow-dom";
import { styleMap } from 'lit/directives/style-map.js';
import { debounce } from '../../utilities/debounce';

export const oneColLayouts = ['centered', 'full-width'] as const;
type OneColLayout = (typeof oneColLayouts)[number];

export const gridItemAlignments = ['center', 'start', 'end'] as const;
type ScalingGridItemAlignment = (typeof gridItemAlignments)[number];


@customElement("img-scaling-grid")
export class ImgScalingGrid extends LitElement {
  static styles = [scalingGridStyles, globalShared];
  
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
    type: String, reflect: true, attribute: 'align-items'})
  alignItems: ScalingGridItemAlignment;

  /**
   * Row alignment. Use flex/grid values 'center', 'start', 'end' 
   */
  @property({type: String, reflect: true, attribute: 'justify-items'})
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

  /**
   * Ref to the grid container
   */
  @query(".img-grid") gridRef: HTMLElement;

  private resizeObserver?: ResizeObserver;
  private debouncedResize = debounce(() => this.handleOneCol(), 0);

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
    super.disconnectedCallback();
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

  private handleOneCol() {
    if (!this.gridRef) return;
    const containerWidth = this.gridRef.offsetWidth;
    const minItemWidth = this.convertValueToNum(this.itemMinWidth);
    const maxPossibleCols = Math.floor(containerWidth / minItemWidth);
    const isSingleCol = maxPossibleCols <= 1;

    if (this.oneCol !== isSingleCol) {
      this.oneCol = isSingleCol;
    }
  }

  protected firstUpdated() {
    this.resizeObserver = new ResizeObserver(() => {
      this.debouncedResize();
    });
    if (this.gridRef) {
      this.resizeObserver.observe(this.gridRef);
    }
    this.handleOneCol();
  }
  
  protected updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('columns')) {
      this.columns = this.parseClamp(this.columns, 4, 1).toString();
    }
  }

  private parseClamp(val: string, fallback: number, min: number): number {
    const parsed = parseInt(val);
    return isNaN(parsed) ? fallback : Math.max(min, Math.floor(parsed));
  }

  private convertValueToNum(value: string) {
    if (value.endsWith("rem")) {
      return parseFloat(value) * 16;
    }
    if (value.endsWith("px")) {
      return parseFloat(value);
    }
    return parseFloat(value) || 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "img-scaling-grid": ImgScalingGrid;
  }
}
