import { Component, h, Host, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-container",
  styleUrl: "container.scss",
  shadow: true
})
export class ContainerComponent {
  @Element() el: HTMLElement;

  /**
   * Defines the inner appearance of a container.
   * `fill` is the default option, taking the full space of the container.
   * `widget` adds a small spacing around the container to equally space all child elements. This option automatically sets the color property to `standard` (gray).
   * `centered` centers the container so the content does not exceed a maximum width.
   * `card` adds a larger spacing around each child element.  This option automatically sets the color property to `alternative` (white).
   * `inherited` will insure that no specific style is applied to the container.
   */
  @Prop() option: "fill" | "widget" | "card" | "centered" | "inherited"  = "fill";
  @Watch("option") optionDidChange() {
    if (this.option === "widget") {
      this.color = "standard";
      this.assignBlockClasses();
    }
    if (this.option === "card") {
      this.color = "alternative";
      this.assignBlockClasses();
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
    this.optionDidChange();
    this.displayDidChange();
    this.columnSizeDidChange();
    this.rowSizeDidChange();
  }

  assignBlockClasses() {
    Array.from(this.el.querySelectorAll("se-container > se-block")).forEach(
      (item: any) => {
        item.option = this.option;
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