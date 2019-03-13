import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-widget-header",
  styleUrl: "widget-header.scss",
  shadow: true
})
export class WidgetHeader {
   /**
   * Define the mode of a header. Updated automatically by the `se-widget` component when on card mode.
   * `card` will update the design of the header regarding to the card design
   */
  @Prop() mode: "card";

  hostData() {
    return {
      class: this.mode
    };
  }

  render() {
    return [
      <h3 class="flex"><slot /></h3>,
      <slot name="end"/>
    ];
  }
}
