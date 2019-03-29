import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {
  @Element() el: HTMLElement;

  /**
   * Define the visual appearance of a widget. The default widget gives a small padding of the widget.
   * `fill` will remove any spacing.
   * `card` will create a card look and fell with shadow and rounded corner
   */
  @Prop() option: "fill" | "card";

  /**
   * Defines how to display the element.
   * `flex` Default. Will make all element fitting in the .
   * `block` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() display: "flex" | "block" | "grid" = "flex";

  /**
   * Optional property that defines the background color of the widget. default is alternative (white)
   */
  @Prop() color: "standard" | "alternative" = "alternative";
  /**
   * Define a specific width of a widget. useful to create easy layout under `se-container` which use `flex` by default.
   */
  @Prop() width: string;
  @Watch("width") widthDidChange() {
    this.updateSize();
  }

  /**
   * Define a specific height of a widget. useful to create easy layout under `se-container` which use `flex` by default.
   */
  @Prop() height: string;
  @Watch("height") heightDidChange() {
    this.updateSize();
  }

  /**
   * When on Grid display, define if the widget should be a 2/2 instead of a small 1/1 grid item.
   */
  @Prop({mutable: true}) enlarged: boolean = false;

  /**
   * Display the loading icon if set to `true`.
   */
  @Prop({ mutable: true }) loading: boolean = false;

  componentDidLoad() {
    this.updateSize();
    this.updateItemMode();
  }

  private updateItemMode() {
    if (this.option === "card") {
      Array.from(
        this.el.querySelectorAll("se-widget-header, se-widget-footer")
      ).forEach((item: any) => {
        item.option = this.option;
      });
    }
  }

  private updateSize() {
    if (this.width) {
      this.el.style.width = this.width;
    }
    if (this.height) {
      this.el.style.height = this.height;
    }
  }

  hostData() {
    return {
      class: [
        this.option,
        this.color,
        this.display,
        this.enlarged && this.display === 'grid' ? 'grid-large' : ''
      ].join(" ")
    };
  }

  render() {
    return (
      <div class="widget-body">
        {this.loading ? <se-loading loading={this.loading} /> : ""}
        <slot />
      </div>
    );
  }
}
