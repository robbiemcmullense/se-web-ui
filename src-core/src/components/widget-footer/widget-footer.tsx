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
  /**
   * Defines the direction of the flex element.
   * `row` is the default direction. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop() direction: "row" | "column" = "row";

  render() {
    return (
      <Host class={[this.option, this.direction].join(' ')}>
        <div class="flex"><slot name="start"></slot></div>
        <slot></slot>
      </Host>
    )
  }
}