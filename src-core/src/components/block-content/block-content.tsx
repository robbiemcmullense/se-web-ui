import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "se-block-content",
  styleUrl: "block-content.scss",
  shadow: true
})
export class BlockContent {
  /**
   * The block-content component will add 8px padding on the top and bottom, and 16px padding on the left and right by default.
   * When the option is set to `fill`, the content will fill the whole space of the block-content with no padding.
   */
  @Prop() option: 'card' | 'widget' | 'basic' | 'fill';

  render() {
    return (
      <Host class={`${this.option}-content`}>
        <slot />
      </Host>
    );
  }
}
