import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "se-block-content",
  styleUrl: "block-content.scss",
  shadow: true
})
export class BlockContent {
  @Element() el: HTMLElement;
  /**
   * The block-content component will add 8px padding on the top and bottom, and 16px padding on the left and right by default.
   * When the option is set to `fill`, the content will fill the whole space of the block-content with no padding.
   */
  @Prop() option: 'card' | 'widget' | 'basic' | 'fill';

  render() {
    return (
      <div class={['se-block-content', this.option ? `${this.option}-content` : ''].join(' ')}>
        <slot />
      </div>
    );
  }
}
