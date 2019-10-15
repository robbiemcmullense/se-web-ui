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
   * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
   * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
   */
  @Prop() divider: boolean;
  @Watch("divider") dividerDidChange() {
    this.updateItemMode();
  }
  /**
   * 
   */
  @Prop() outline: boolean;
  /**
   * 
   */
  @Prop() outlineColor: "standard" | "alternate";
  /**
   * 
   */
  @Prop() margin: "none" | "nano" | "small" | "medium" | "large";
  /**
   * 
   */
  @Prop() corner: "none" | 2 | 5;
  /**
   * 
   */
  @Prop() elevation: "none" | "small" | "medium";
  /**
   * 
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
    this.updateItemMode();
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
    this.updateItemMode();
    this.optionDidChange();
    this.dividerDidChange();
    // console.log("block loading", this.option, this.divider, this.el)
  }

  updateItemMode() {
    let childElms = "se-block-header, se-block-content, se-block-footer";

    if (this.divider === undefined) this.divider = this.option !== "card";

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
    return (
      <Host class={[this.display, this.enlarged && this.display === 'grid' ? 'grid-large' : ''].join(' ')} divider={this.divider}>
        <div class={['block-body', this.option, this.color].join(' ')}>
          {this.loading ? <se-loading loading={this.loading} /> : ''}
          <slot></slot>
        </div>
      </Host>
    )
  }
}
