import { Component, h, Host, Prop } from "@stencil/core";

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
  @Prop() option: 'card' | 'widget' | 'basic';

  render() {
    return (
      <Host class={this.option}>
        <slot name="start"></slot>
        <h4 class="flex"><slot></slot></h4>
        <slot name="end"></slot>
      </Host>
    )
  }
}
