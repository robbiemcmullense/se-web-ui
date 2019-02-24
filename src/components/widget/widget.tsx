import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {
  @Element() el: HTMLElement;

  /**
   * Define the mode of a widget. The default widget gives a small padding of the widget. `fill` will remove any spacing.
   */
  @Prop() mode: "fill";

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
  @Watch("height") heighDidChange() {
    this.updateSize();
  }

  componentDidLoad() {
    this.updateSize();
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
      class: [this.mode, (!this.width && !this.height) ? 'flex' : ''].join(' ')
    };
  }
  render() {
    return (
      <div class="widget-body">
        <slot />
      </div>
    );
  }
}
