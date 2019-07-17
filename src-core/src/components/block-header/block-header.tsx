import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "se-block-header",
  styleUrl: "block-header.scss",
  shadow: true
})
export class BlockHeader {
  /**
   * Defines the visual appearance of a header.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the header with respect to the card design.
   */
  @Prop() option: 'card' | 'widget' | 'basic';

  render() {
    return (
      <div class={['se-block-header', this.option].join(' ')}>
        <slot name="start"></slot>
        <h4 class="flex"><slot></slot></h4>
        <slot name="end"></slot>
      </div>
    )
  }
}