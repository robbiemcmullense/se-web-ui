import { Component, h, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the visual appearance of a widget.
   * `fill` will remove any spacing.
   * `card` will create a card look and feel with shadow and rounded corner
   */
  @Prop() option: "fill" | "card";
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` helps in specific cases. Make sure you know what you are doing.
   */
  @Prop() display: "flex" | "block" | "grid" = "flex";
  /**
   * Optional property that defines the background color of the widget. Default setting is `alternative` (white).
   */
  @Prop() color: "standard" | "alternative" = "alternative";
  /**
   * Defines a specific width of a widget.  Useful to create easy layout under `se-container` which uses `flex` by default.
   */
  @Prop() width: string;
  @Watch("width") widthDidChange() {
    this.updateSize();
  }
  /**
   * Defines a specific height of a widget.  Useful to create easy layout under `se-container` which uses `flex` by default.
   */
  @Prop() height: string;
  @Watch("height") heightDidChange() {
    this.updateSize();
  }
  /**
   * When on Grid display, determines if the widget should be a 2/2 instead of a small 1/1 grid item.
   * Default setting is `false` (1/1).
   */
  @Prop({mutable: true}) enlarged: boolean = false;

  /**
   * Display the loading icon if set to `true`.  Default setting is `false`.
   */
  @Prop({ mutable: true }) loading: boolean = false;

  componentWillLoad() {
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