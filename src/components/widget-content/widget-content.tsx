import { Component } from "@stencil/core";

@Component({
  tag: "se-widget-content",
  styleUrl: "widget-content.scss",
  shadow: true
})
export class WidgetContent {
  render() {
    return (
      <slot />
    );
  }
}
