import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "se-widget-footer",
  styleUrl: "widget-footer.scss",
  shadow: true
})
export class WidgetFooter {
  /**
   * Defines the visual appearance of a footer. Updated automatically by the `se-widget` component when on card option.
   * `card` will update the design of the footer with respect to the card design.
   */
  @Prop() option: "card";

  render() {
    return (
      <Host class={this.option}>
        <div class="flex"><slot name="start"></slot></div>
        <slot></slot>
      </Host>
    )
  }
}