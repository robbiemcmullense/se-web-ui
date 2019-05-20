import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "se-widget-header",
  styleUrl: "widget-header.scss",
  shadow: true
})
export class WidgetHeader {
  /**
  * Defines the visual appearance of a header. Updated automatically by the `se-widget` component when on card option.
  * `card` will update the design of the header with respect to the card design.
  */
  @Prop() option: "card";

  render() {
    return (
      <Host class={this.option}>
        <h3 class="flex"><slot></slot></h3>
        <slot name="end"></slot>
      </Host>
    )
  }
}