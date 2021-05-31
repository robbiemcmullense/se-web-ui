import { Component, Element, h, Prop, State } from '@stencil/core';
import { isNumber } from '../../utils';

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
  @Prop({ mutable: true }) option: 'card' | 'widget' | 'basic' | 'fill' =
    'basic';

  /**
   * Defines maximum height of the component.
   * If set, scroll will be applied to the block if its height exceeds `maxHeight`.
   * Also, its top and bottom parts will be covered by semi-transparent overlays.
   */
  @Prop() maxHeight: number | string;

  @State() hasOverlayTop = false;
  @State() hasOverlayBottom = false;

  scrollBody: HTMLDivElement;

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  private setOverlays = (): void => {
    this.hasOverlayTop = this.scrollBody.scrollTop > 0;
    this.hasOverlayBottom =
      this.scrollBody.offsetHeight +
        this.scrollBody.scrollTop -
        this.scrollBody.scrollHeight <
      0;
  };

  private addScrollBehavior = (): void => {
    setTimeout(this.setOverlays, 50); // haven't found a way to trigger recalculations in the right time - just after scrollBody height changed
    this.scrollBody.addEventListener('scroll', this.setOverlays);
  };

  private removeScrollBehavior = (): void => {
    this.hasOverlayTop = false;
    this.hasOverlayBottom = false;
    this.scrollBody.removeEventListener('scroll', this.setOverlays);
  };

  componentDidLoad(): void {
    if (this.maxHeight) {
      this.addScrollBehavior();
    }
  }

  disconnectedCallback(): void {
    this.removeScrollBehavior();
  }

  componentDidUpdate(): void {
    if (this.maxHeight) {
      this.addScrollBehavior();
    } else {
      this.removeScrollBehavior();
    }
  }

  render(): HTMLElement {
    return (
      <div
        class={{
          'se-block-content': true,
          [`option-${this.option}`]: true,
          scrollable: !!this.maxHeight,
          'has-overlay-top': this.hasOverlayTop,
          'has-overlay-bottom': this.hasOverlayBottom,
        }}
      >
        <div
          class="se-block-content-body"
          style={
            this.maxHeight && {
              maxHeight: isNumber(this.maxHeight)
                ? `${this.maxHeight}px`
                : (this.maxHeight as string),
            }
          }
          ref={el => (this.scrollBody = el)}
        >
          <slot />
        </div>
      </div>
    );
  }
}
