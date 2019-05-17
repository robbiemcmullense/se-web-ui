import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "se-widget-content",
  styleUrl: "widget-content.scss",
  shadow: true
})
export class WidgetContent {
  /**
   * When set to `fill`, content will fill the whole space of the widget.
   */
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
