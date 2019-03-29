import { Component,Prop } from "@stencil/core";

@Component({
  tag: "se-widget-content",
  styleUrl: "widget-content.scss",
  shadow: true
})
export class WidgetContent {
  @Prop() option: 'fill';

  hostData() {
    return {
      'class': { 'full-content': this.option === 'fill' }
    };
  }
  render() {
    return (
      <slot />
    );
  }
}
