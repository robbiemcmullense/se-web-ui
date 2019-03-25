import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-widget-header",
  styleUrl: "widget-header.scss",
  shadow: true
})
export class WidgetHeader {
   /**
   * Define the visual appearance of a header. Updated automatically by the `se-widget` component when on card option.
   * `card` will update the design of the header regarding to the card design
   */
  @Prop() option: "card";

  hostData() {
    return {
      class: this.option
    };
  }

  render() {
    return [
      <h3 class="flex"><slot /></h3>,
      <slot name="end"/>
    ];
  }
}
