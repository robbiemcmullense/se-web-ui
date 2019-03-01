import { Component } from "@stencil/core";

@Component({
  tag: "se-widget-header",
  styleUrl: "widget-header.scss",
  shadow: true
})
export class WidgetHeader {
  render() {
    return [
      <h3 class="flex"><slot /></h3>,
      <slot name="end"/>
    ];
  }
}
