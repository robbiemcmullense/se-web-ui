import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "se-block-content",
  styleUrl: "block-content.scss",
  shadow: true
})
export class BlockContent {
  /**
   * The block-content component will add 8px padding on the top and bottom, and 16px padding on the left and right by default.
   * If you add`option="fill"` to the block-content component, the content will fill the whole space of the block-content with no padding.
   */
  @Prop() option: 'fill';

  render() {
    return (
      <Host class={{'fill-content': this.option === 'fill'}}>
        <slot />
      </Host>
    );
  }
}
