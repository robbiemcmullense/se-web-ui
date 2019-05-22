import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "se-block-content",
  styleUrl: "block-content.scss",
  shadow: true
})
export class BlockContent {
  /**
   * When set to `basic`, content will fill the whole space of the block.
   */
  @Prop() option: 'basic' | 'card';

  hostData() {
    return {
      'class': { 'full-content': this.option === 'basic' }
    };
  }
  render() {
    return (
      <slot />
    );
  }
}
