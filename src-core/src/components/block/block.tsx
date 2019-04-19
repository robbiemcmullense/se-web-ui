import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-block",
  styleUrl: "block.scss",
  shadow: true
})
export class BlockComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the visual appearance of a block.
   * `basic` will remove any spacing.
   * `widget` will create a flat widget look and feel with a small margin around it.
   * `card` will create a card look and feel with shadow and rounded corners.
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
   * Defines a specific width of a block.  Useful to create easy layout under `se-container` which uses `flex` by default.
   */
  @Prop() width: string;
  @Watch("width") widthDidChange() {
    this.updateSize();
  }
  /**
   * Defines a specific height of a block.  Useful to create easy layout under `se-container` which uses `flex` by default.
   */
  @Prop() height: string;
  @Watch("height") heightDidChange() {
    this.updateSize();
  }
  /**
   * When on Grid display, determines if the block should be a 2/2 instead of a small 1/1 grid item.
   * Default setting is `false` (1/1).
   */
  @Prop({ mutable: true }) enlarged: boolean = false;

  /**
   * Display the loading icon if set to `true`.  Default setting is `false`.
   */
  @Prop({ mutable: true }) loading: boolean = false;

  componentWillLoad() {
    this.updateSize();
    this.updateItemMode();
  }

  private updateItemMode() {
    let childElms =
      this.option === "card"
        ? "se-block-header, se-block-content, se-block-footer"
        : "se-block-content";
    this.setChildOption(childElms);
  }

  private updateSize() {
    if (this.width) {
      this.el.style.width = this.width;
    }
    if (this.height) {
      this.el.style.height = this.height;
    }
  }

  private setChildOption(childElms: string) {
    Array.from(this.el.querySelectorAll(childElms)).forEach((item: any) => {
      item.option = this.option;
    });
  }

  hostData() {
    return {
      class: [
        this.option,
        this.color,
        this.display,
        this.enlarged && this.display === "grid" ? "grid-large" : ""
      ].join(" ")
    };
  }

  render() {
    return (
      <div class="block-body">
        {this.loading ? <se-loading loading={this.loading} /> : ""}
        <slot />
      </div>
    );
  }
}
