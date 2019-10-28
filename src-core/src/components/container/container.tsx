import { Component, h, Host, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-container",
  styleUrl: "container.scss",
  shadow: true
})
export class ContainerComponent {
  @Element() el: HTMLElement;
  /**
   * Defines direct decendant se-block items' dividers. This will set se-block level divider selections when no block level is set.
   * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
   * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
   */
  @Prop() divider: boolean;
  @Watch("divider") dividerDidChange() {
    this.setProps();
  }
  /**
   * Defines direct decendant `card` se-block item's outline. This will set se-block level outline selections when no block level is set.
   * `true` will add a 1px border.
   * Default is `false`.
   */
  @Prop() outline: boolean;
  @Watch("outline") outlineDidChange() {
    this.setProps();
  }
  /**
   * Defines direct decendant `card` se-block item's outline color. This will set se-block level outline color selections when no block level is set.
   * Default is `standard` which is `$se-ultra-light-grey-2`.
   * `alternative` defines the outline color as `$se-life-green`, for Technical applications when the block is selected.
   */
  @Prop() outlinecolor: "standard" | "alternative";
  @Watch("outlinecolor") outlineColorDidChange() {
    this.setProps();
  }
  /**
   * Defines direct decendant `card` se-block item's corner radius. This will set se-block level corner radius selections when no block level is set.
   * `0` pixels is for a sharp, 90 degree corner for DCX and Technical applications.
   * `2` pixels is for a slightly rounded corner for Technical applications.
   * Default is `4` pixels for Technical applications.
   */
  @Prop() corner: "none" | 2 | 5;
  /**
   * Defines `card` se-block item's elevation. This will set se-block level elevation selections when no block level is set.
   * Default is `true` which adds a box-shadow to the se-block.
   * `false` removes the box-shadow.
   * `nano` adds a small, crisp box-shadow.
   * `large` adds a stronger box-shadow.
   */
  @Prop() elevation: boolean | "nano" | "large";
  /**
   * Defines direct decendant se-block item's ability to appear clickable / selectable. This will set se-block level clickable selections when no block level is set.
   * Default is `false`.
   * `true` adds a hover effect on the se-block. The cursor will change to `pointer` and a `$se-life-green` bar will appear at the top of the block.
   * If a `card` block elevation is `none` a standard box-shadow will also appear.
   */
  @Prop() clickable: boolean;
  /**
   * Defines the spacing around a block. This will set se-block level margin selections when no block level is set.
   * `none` is 0px, default of `basic` blocks.
   * `small` is 8px, default of `widget` blocks.
   * `medium` is 16px, default of `card` blocks.
   * `large` is 32px.
   */
  @Prop() margin: "none" | "small" | "medium" | "large";
  /**
   * Defines the inner appearance of a container.
   * `fill` is the default option, taking the full space of the container.
   * `widget` adds a small spacing around the container to equally space all child elements. This option automatically sets the color property to `standard` (gray).
   * `centered` centers the container so the content does not exceed a maximum width.
   * `card` adds a larger spacing around each child element.  This option automatically sets the color property to `alternative` (white).
   * `inherited` will insure that no specific style is applied to the container.
   */
  @Prop() option: "fill" | "widget" | "card" | "centered" | "inherited" = "fill";
  @Watch("option") optionDidChange() {
    if (this.option === "widget" || this.option === "fill") {
      this.color = "standard";
      this.setProps();
    } else if (this.option === "card") {
      this.color = "alternative";
      this.setProps();
    }
  }

  /**
   * In specific cases, it may be necessary to define the container with an absolute position (such as inside an angular router-container). Most of the time, the default position will work perfectly with CSS flex box.
   * `relative` is the default position. This is perfect to use with flex content.
   * `absolute` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop() position: "relative" | "absolute" = "relative";
  /**
   * Defines the direction of the flex element.
   * `row` is the default direction. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop() direction: "column" | "row" = "row";
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` will set each container to be as large and high as it's content. Selecting this display will automatically configure each child element to have "display: block".
   */
  @Prop() display: "flex" | "block" | "grid" = "flex";
  @Watch("display") displayDidChange() {
    // Only direct children will be impacted by the display property
    Array.from(this.el.querySelectorAll("se-container > se-block")).forEach(
      (item: any) => {
        item.display = this.display;
      }
    );
  }

  /**
   * When in `display="grid"`, defines the mininimum width of a column. It automatically figures out the appropriate number of columns from there.
   * Default is `350px`.
   */
  @Prop() columnSize: string = '350px';
  @Watch("columnSize") columnSizeDidChange() {
    if(this.display === 'grid'){
      this.el.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.columnSize}, 1fr))`;
    }
  }

  /**
   * When in `display="grid"`, defines the height of each container.  Default is `300px`.
   */
  @Prop() rowSize: string = '300px';
  @Watch("rowSize") rowSizeDidChange() {
    if(this.display === 'grid'){
      this.el.style.gridAutoRows = this.rowSize;
    }
  }

  /**
   * Defines the background color of the container.
   * `standard` is a light gray.
   * `alternative` is a white background.
   */
  @Prop({ mutable: true }) color: "standard" | "alternative";

  componentWillLoad() {
    this.setProps(); // not having this called here makes the original/new function not actually work as expected. the original function would return this.option as undefined.
    this.optionDidChange();
    this.displayDidChange();
    this.columnSizeDidChange();
    this.rowSizeDidChange();
  }

  setProps() {
    Array.from(this.el.querySelectorAll("se-container > se-block")).forEach(
      (item: any) => {
        if (this.option === "widget" || this.option === "card") item.option = this.option;

        if (this.outline !== undefined && item.outline === undefined) item.outline = this.outline;
        if (this.outlinecolor !== undefined && item.outlinecolor === undefined) item.outlinecolor = this.outlinecolor;
        if (this.corner !== undefined && item.corner === undefined) item.corner = this.corner;
        if (this.elevation !== undefined && item.elevation === undefined) item.elevation = this.elevation;
        if (this.clickable !== undefined && item.clickable === undefined) item.clickable = this.clickable;
        if (this.margin !== undefined && item.margin === undefined) item.margin = this.margin;

        if (this.divider !== undefined && item.divider === undefined) { // e.g. if we set the divider on the container level...
          item.divider = this.divider; // ...we want to set the item dividers to all match the container divider
        } else if (item.divider === undefined) { // but if we don't set the container divider...
          if (this.option === "card" || this.option === "widget") { // ...and if the container is set to option card or widget...
            if (this.divider === undefined) this.divider = this.option !== "card"; // ...if the container divider is not set, set it based on the container option...
            item.divider = this.divider; // ...and set the item divider to match the container divider
          } // else {} // otherwise, if the container is fill, centered, or inherited we don't do anything so dividers are based on item level selections 
        }
      }
    );
  }

  render() {
    return (
      <Host class={[`${this.option}-content`, this.position, this.color, `${this.direction}-dir`, `${this.display}-display`].join(' ')}>
        {this.option === "centered" ? <div class="wrapper-center"><slot></slot></div> : <slot></slot>}
      </Host>
    )
  }
}