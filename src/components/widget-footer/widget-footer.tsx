import { Component } from "@stencil/core";

@Component({
  tag: "se-widget-footer",
  styleUrl: "widget-footer.scss",
  shadow: true
})
export class WidgetFooter {
  render() {
    return (
      <slot />
    );
  }
}
