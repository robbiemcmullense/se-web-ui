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
   * Defines se-block items' dividers.
   * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
   * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
   */
  @Prop() divider: boolean;
  @Watch("divider") dividerDidChange() {
    this.updateItem();
  }
  /**
   * Defines se-block item's outline.
   * `true` will add a 1px border.
   * Default is `false`.
   */
  @Prop() outline: boolean;
  /**
   * Defines se-block item's outline color.
   * Default is `standard` which is `$se-super-light-grey`.
   * `primary` defines the outline color as `$se-life-green`, for Technical applications when the block is selected.
   * `secondary` defines the outline color as `se-sky-blue`.
   */
  @Prop() outlineColor: "standard" | "secondary" | "primary";
  /**
   * Defines se-block item's corner radius.
   * `none` is for a sharp, 90 degree corner.
   * `nano` is for a slightly rounded, 2px rounded corner.
   * `small` is for a rounded, 4px rounded corner.
   */
  @Prop() corner: "none" | "nano" | "small";
  /**
   * Defines se-block item's ability to appear clickable / selectable.
   * Default is `false`, no hover effects on the block level.
   * `true` adds a hover effect on the se-block. The cursor will change to `pointer`, a box-shadow will appear, and a `$se-life-green` bar will appear at the top of the block. 
   */
  @Prop() clickable: boolean;
  /**
   * Defines clickable se-block item's bar on hover.
   * Default is `true`, `$se-life-green` bar appears on hover.
   * `false` removes the bar from the hover effect.
   */
  @Prop() clickableBar: boolean;
  /**
   * Defines the spacing around the outside edge of a block.
   * Default `none` is 0px.
   * `small` is 4px.
   * `medium` is 8px.
   * `large` is 16px.
   * `xlarge` is 32px.
   */
  @Prop() margin: "none" | "small" | "medium" | "large" | "xlarge";
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` helps in specific cases. Make sure you know what you are doing.
   */
  @Prop() display: "flex" | "block" | "grid" = "flex";
  /**
   * Optional property that defines the background color of the block.
   * `none` has no background.
   * `standard` is `$se-background`.
   * Default `alternative` is `$se-alternative`.
   */
  @Prop() color: "none" | "standard" | "alternative" = "alternative";
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
   * `true` spans 2 rows and 2 columns (2/2).
   * `vertical` spans 2 rows (2/1).
   * `horizontal` spans 2 columns (1/2).
   */
  @Prop({ mutable: true }) enlarged: "vertical" | "horizontal" | boolean = false;
  /**
   * Displays the loading icon if set to `true`.  Default setting is `false`.
   */
  @Prop({ mutable: true }) loading: boolean = false;
  /**
   * Defines the visual appearance of a block.
   * Default `basic` will remove any spacing.
   * `widget` will create a flat widget look and feel with a `medium` margin around it.
   * `card` will create a card look and feel with rounded corners, and with a `large` margin around it.
   * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
   */
  @Prop() option: "basic" | "card" | "card-old" | "widget" = "basic";
  @Watch("option") optionDidChange() {
    this.updateItem();
  }

  componentWillLoad() {
    this.updateSize();
    this.updateItem();
    this.optionDidChange();
    this.dividerDidChange();
  }

  updateItem() {
    if (this.option !== undefined && this.divider === undefined) {
      if (this.option === "card" || this.option === "card-old") {
        this.divider = false;
      } else this.divider = true;
    }

    let childElms = "se-block-header, se-block-content, se-block-footer";
    Array.from(this.el.querySelectorAll(childElms)).forEach((item:any) => {
      if(item.parentNode === this.el) { // have to do this because otherwise blocks inside other blocks get settings overridden by higher ancestors
        item.divider = this.divider;
        !item.option ? item.option = this.option : '';
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
    
    const outlineColor = this.outlineColor ? `-${this.outlineColor}` : '';
    const outline =  this.outline === true ? `outline${outlineColor}` : 'outline-false';

    let enlargedClass = "";

    if (this.display === "grid") {
      switch (this.enlarged) {
        case false:
          break;
        case "vertical":
          enlargedClass = "grid-vertical";
          break;
        case "horizontal":
          enlargedClass = "grid-horizontal";
          break;
      
        default:
          enlargedClass = "grid-large";
          break;
      }
    }

    return (
      <Host class={[
        this.display ? `block-${this.display}` : '', 
        enlargedClass,
        `block-bg-${this.color}`].join(' ')}>
        <div class={[
          'block-body',
          this.clickable === true ? `${this.clickableBar !== false ? "clickable" : "clickable-nobar"}` : '',
          this.option,
          this.outline !== undefined ? outline : '',
          this.corner !== undefined ? `corner-${this.corner}` : '',
          this.margin !== undefined ? `margin-${this.margin}` : '', 
          this.color !== undefined ? `block-bg-${this.color}` : 'block-bg-alternative'].join(' ')}>
          {this.loading ? <se-loading loading={this.loading} /> : ''}
          <slot></slot>
        </div>
      </Host>
    )
  }
}
