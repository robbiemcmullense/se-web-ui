import { Component } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {
  render() {
    return (
      <div class="widget-body">
          <slot />
      </div>
    );
  }
}
