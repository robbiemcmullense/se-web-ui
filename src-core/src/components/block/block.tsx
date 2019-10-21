import { Component, h, Host, Prop, Watch, Element } from "@stencil/core";
// import { isTemplateElement } from "@babel/types";

@Component({
  tag: "se-block",
  styleUrl: "block.scss",
  shadow: true
})
export class BlockComponent {
  @Element() el: HTMLElement;
  /**
   * Defines se-block items' dividers. This will be overridden by direct ancestor se-container level divider selections.
   * Default for `card` option is `true`, default for `widget` and `basic` options is `false`.
   * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
   * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
   */
  @Prop() divider: boolean;
  @Watch("divider") dividerDidChange() {
    this.updateItem();
  }
  /**
   * Defines `card` se-block item's outline. This will be overridden by direct ancestor se-container level outline selections.
   * `true` will add a 1px border.
   * Default is `false`.
   */
  @Prop() outline: boolean;
  /**
   * Defines `card` se-block item's outline color. This will be overridden by direct ancestor se-container level outline color selections.
   * Default is `standard` which is `$se-ultra-light-grey-2`.
   * `alternative` defines the outline color as `$se-life-green`.
   */
  @Prop() outlinecolor: "standard" | "alternative";
  /**
   * Defines `card` se-block item's corner radius. This will be overridden by direct ancestor se-container level corner radius selections.
   * `0` pixels is for a sharp, 90 degree corner.
   * `2` pixels is for a slightly rounded corner.
   * Default is `4` pixels.
   */
  @Prop() corner: 0 | 2 | 4;
  /**
   * Defines `card` se-block item's elevation. This will be overridden by direct ancestor se-container level elevation selections.
   * Default is `true` which adds a box-shadow to the se-block.
   * `false` removes the box-shadow.
   * `large` adds a stronger box-shadow.
   */
  @Prop() elevation: boolean | "large";
  /**
   * 
   */
  // @Prop() margin: "none" | "nano" | "small" | "medium" | "large";
  /**
   * Defines se-block item's ability to be clickable / selectable. This will be overridden by direct ancestor se-container level clickable selections.
   * Default is `false`.
   * `true` adds a hover effect on the se-block. The cursor will change to `pointer` and a `$se-life-green` bar will appear at the top of the block. If the se-block is a `card` a `large` box-shadow will appear.
   */
  @Prop() clickable: boolean;
  /**
   * Defines the visual appearance of a block.
   * `basic` will remove any spacing.
   * `widget` will create a flat widget look and feel with a small margin around it.
   * `card` will create a card look and feel with a shadow and rounded corners.
   */
  @Prop() option: "basic" | "card" | "widget" = "basic";
  @Watch("option") optionDidChange() {
    this.updateItem();
  }
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` helps in specific cases. Make sure you know what you are doing.
   */
  @Prop() display: "flex" | "block" | "grid" = "flex";
  /**
   * Optional property that defines the background color of the block. Default setting is `alternative` (white).
   */
  @Prop() color: "standard" | "alternative" = "alternative";
  /**
   * Defines the specific width of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  @Prop() width: string;
  @Watch("width") widthDidChange() {
    this.updateSize();
  }
  /**
   * Defines the specific height of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  @Prop() height: string;
  @Watch("height") heightDidChange() {
    this.updateSize();
  }
  /**
   * When the display is set to `grid`, this property determines if the block should have double the width and height of a standard grid item.
   * Default setting is `false` (1/1).
   */
  @Prop({ mutable: true }) enlarged: boolean = false;

  /**
   * Displays the loading icon if set to `true`.  Default setting is `false`.
   */
  @Prop({ mutable: true }) loading: boolean = false;

  componentWillLoad() {
    this.updateSize();
    this.updateItem();
    this.optionDidChange();
    this.dividerDidChange();
  }

  updateItem() {

    if (this.divider === undefined) this.divider = this.option !== "card"; // if the container divider is not defined set based

    let childElms = "se-block-header, se-block-content, se-block-footer";
    Array.from(this.el.querySelectorAll(childElms)).forEach((item:any) => {
      if(item.parentNode === this.el) { // have to do this because otherwise blocks inside other blocks get settings overridden by higher ancestors
        item.divider = this.divider;
        item.option = this.option;
      }
    })
  }

  private updateSize() {
    // reset all sizes first
    this.el.style.width = '';
    this.el.style.minWidth = '';
    this.el.style.height = '';
    this.el.style.minHeight = '';
    if (this.width) {
      this.el.style.width = this.width;
      this.el.style.minWidth = this.width;
    }
    if (this.height) {
      this.el.style.height = this.height;
      this.el.style.minHeight = this.width;
    }
  }

  render() {
    
    const outlineClass = this.outline === true && this.option !== "basic" ? 'outline' : '';
    const outlineColor = this.outlinecolor === "alternative" ? 'alternative' : '';
    const outline = `${outlineClass}${outlineColor === "alternative" ? '-alternative' : ''}`; // add the suffix after a - only if the color is alternative, default outline will be standard ultra-light-grey-2

    return (
      <Host 
        class={[
          this.display,
          this.option !== "basic" ? outline : '',
          this.corner !== undefined ? `corner-${this.corner}` : '',
          this.option === "card" && this.elevation !== undefined ? `elevated-${this.elevation}` : '',
          this.enlarged && this.display === 'grid' ? 'grid-large' : ''].join(' ')}
        divider={this.divider}
        clickable={this.clickable === true ? "true" : "false"}>
        <div class={['block-body', this.option, this.color].join(' ')}>
          {this.loading ? <se-loading loading={this.loading} /> : ''}
          <slot></slot>
        </div>
      </Host>
    )
  }
}
