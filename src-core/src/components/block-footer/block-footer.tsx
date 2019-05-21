import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-block-footer",
  styleUrl: "block-footer.scss",
  shadow: true
})
export class BlockFooter {
  /**
   * Defines the visual appearance of a footer. Updated automatically by the `se-block` component when on card option.
   * `card` will update the design of the footer with respect to the card design.
   */
  @Prop() option: "card";

  @Prop() direction: "row" | "column" = "row";

  hostData() {
    return {
      class: [this.option, this.direction].join(' ')
    };
  }

  render() {
    return [
      <div class="flex"><slot name="start"/></div>,
      <slot />
    ];
  }
}