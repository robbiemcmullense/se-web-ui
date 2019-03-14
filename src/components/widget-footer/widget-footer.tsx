import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-widget-footer",
  styleUrl: "widget-footer.scss",
  shadow: true
})
export class WidgetFooter {
  /**
   * Define the mode of a footer. Updated automatically by the `se-widget` component when on card mode.
   * `card` will update the design of the footer regarding to the card design
   */
  @Prop() mode: "card";

  hostData() {
    return {
      class: this.mode
    };
  }

  render() {
    return [
      <div class="flex"><slot name="start"/></div>,
      <slot />
    ];
  }
}
