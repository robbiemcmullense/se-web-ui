import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-container",
  styleUrl: "container.scss",
  shadow: true
})
export class ContainerComponent {
  @Element() el: HTMLElement;

  /**
   * Defines the inner appearance of a container.
   * `widget` Add a small spacing all around the container so all widgets are spaced with the same distance. Widget automatically set color property to `standard` (gray)
   * `fill` Default. Take the full space of the container.
   * `centered` center the container so the content does no exceed a max width.
   *  `card` Add a larger spacing and use alternative (white) background.
   */
  @Prop() mode: "fill" | "widget" | "card" | "centered"  = "fill";
  @Watch("mode") modeDidChange() {
    if (this.mode === "widget") {
      this.color = "standard";
    }
    if(this.mode === "card"){
      Array.from(this.el.querySelectorAll(":scope > se-widget")).forEach(
        (item: any) => {
          item.mode = this.mode;
        }
      );
    }
  }

  /**
   * In specific case, it can be necessary to define the container with an absolute position (inside an angular router-container ). Most of the time, the default position will work perfectly with flex box.
   * `relative` Default. Perfect to use with flex content.
   * `absolute` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() position: "relative" | "absolute" = "relative";

  /**
   * Defines the direction of the flex element
   * `column` Default. Perfect to use with flex content.
   * `row` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() direction: "column" | "row" = "row";

  /**
   * Defines how to display the element.
   * `flex` Default. Will make all element fitting in the .
   * `block` Each widget will be has large and high as it's content. Selecting block, will automatically configure each child widget in mode block as well.
   */
  @Prop() display: "flex" | "block" | "grid" = "flex";
  @Watch("display") displayDidChange() {
    // Only direct child will be impacted by the display property
    Array.from(this.el.querySelectorAll(":scope > se-widget")).forEach(
      (item: any) => {
        item.display = this.display;
      }
    );
  }

  /**
   * When in `display="grid"`, defines the min width of a column. It automatically figures out the appropriate number of columns from there.
   * Default is `350px`
   */
  @Prop() columnSize: string = '350px';
  @Watch("columnSize") columnSizeDidChange() {
    if(this.display === 'grid'){
      this.el.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.columnSize}, 1fr))`;
    }
  }

  /**
   * When in `display="grid"`, defines the height of each widgets.
   */
  @Prop() rowSize: string = '300px';
  @Watch("rowSize") rowSizeDidChange() {
    if(this.display === 'grid'){
      this.el.style.gridAutoRows = this.rowSize;
    }
  }


  /**
   * Define the color of the background of the container. The default is light gray.
   * `standard` Default. Light grey.
   * `alternative` white background.
   */
  @Prop({ mutable: true }) color: "standard" | "alternative" = "alternative";

  componentWillLoad() {
    this.modeDidChange();
    this.displayDidChange();
    this.columnSizeDidChange();
    this.rowSizeDidChange();
  }

  hostData() {
    return {
      class: [
        `${this.mode}-content`,
        this.position,
        this.color,
        this.direction,
        this.display
      ].join(" ")
    };
  }

  render() {
    return this.mode === "centered" ? (
      <div class="wrapper-center">
        <slot />
      </div>
    ) : (
      <slot />
    );
  }
}
