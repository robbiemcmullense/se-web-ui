import { Component, Element, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'se-block-content',
  styleUrl: 'block-content.scss',
  shadow: true,
})
export class BlockContent {
  @Element() el: HTMLElement;

  /**
   * The block-content component will add 8px padding on the top and bottom, and 16px padding on the left and right by default.
   * When the option is set to `fill`, the content will fill the whole space of the block-content with no padding.
   */
  @Prop() option: 'card' | 'widget' | 'basic' | 'fill';

  /**
   * Defines maximum height of the component.
   * If set, scroll will be applied to the block if its height exceeds `maxHeight`.
   * Also, its top and bottom parts will be covered by semi-transparent overlays.
   */
  @Prop() maxHeight: number;

  @State() hasOverlayTop = false;
  @State() hasOverlayBottom = false;

  scrollBody: HTMLDivElement;

  private setOverlays = (): void => {
    this.hasOverlayTop = this.scrollBody.scrollTop > 0;
    this.hasOverlayBottom =
      this.scrollBody.offsetHeight +
        this.scrollBody.scrollTop -
        this.scrollBody.scrollHeight <
      0;
  };

  componentDidLoad(): void {
    if (this.maxHeight) {
      this.setOverlays();
      this.scrollBody.addEventListener('scroll', this.setOverlays);
    }
  }

  render(): HTMLElement {
    return (
      <div
        class={{
          'se-block-content': true,
          [`${this.option}-content`]: !!this.option,
          scrollable: !!this.maxHeight,
          'has-overlay-top': this.hasOverlayTop,
          'has-overlay-bottom': this.hasOverlayBottom,
        }}
      >
        <div
          class="se-block-content-body"
          style={this.maxHeight && { maxHeight: `${this.maxHeight}px` }}
          ref={el => (this.scrollBody = el)}
        >
          <slot />
        </div>
      </div>
    );
  }
}
