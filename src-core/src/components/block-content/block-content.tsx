import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "se-block-content",
  styleUrl: "block-content.scss",
  shadow: true
})
export class BlockContent {
  /**
   * When set to `basic`, content will fill the whole space of the block.
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
