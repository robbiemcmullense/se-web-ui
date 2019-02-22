import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {

  @Prop() mode: 'fill';

  hostData() {
    return {
      'class': this.mode
    };
  }
  render() {
    return (
      <slot />
    );
  }
}
