import { Component,Prop } from "@stencil/core";

@Component({
  tag: "se-widget-content",
  styleUrl: "widget-content.scss",
  shadow: true
})
export class WidgetContent {
  @Prop() mode: 'fill';

  hostData() {
    return {
      'class': { 'full-content': this.mode === 'fill' }
    };
  }
  render() {
    return (
      <slot />
    );
  }
}
