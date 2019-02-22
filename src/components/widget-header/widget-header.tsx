import { Component } from "@stencil/core";

@Component({
  tag: "se-widget-header",
  styleUrl: "widget-header.scss",
  shadow: true
})
export class WidgetHeader {
  render() {
    return [
      <div class="flex"><slot /></div>,
      <slot name="end"/>
    ];
  }
}
