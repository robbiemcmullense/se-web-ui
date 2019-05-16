import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-block-header",
  styleUrl: "block-header.scss",
  shadow: true
})
export class BlockHeader {
   /**
   * Defines the visual appearance of a header. Updated automatically by the `se-block` component when on card option.
   * `card` will update the design of the header with respect to the card design.
   */
  @Prop() option: "card";

  hostData() {
    return {
      class: this.option
    };
  }

  render() {
    return [
      <h3 class="flex"><slot /></h3>,
      <slot name="end"/>
    ];
  }
}