import { Component, Element, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'se-block-footer',
  styleUrl: 'block-footer.scss',
  shadow: true,
})
export class BlockFooter {
  @Element() el: HTMLElement;
  /**
   * Defines whether or not a divider will be applied to the se-block-footer.
   * The se-block component's divider property will be applied to the se-block-footer component.
   */
  @Prop() divider: boolean;
  /**
   * Defines the visual appearance of a footer.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the footer with respect to the card design.
   */
  @Prop({ mutable: true }) option: 'card' | 'widget' | 'basic' | 'fill' =
    'basic';
  /**
   * Defines the direction of the flex element.
   * Default setting is `row`. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop({ mutable: true }) direction: 'row' | 'column' = 'row';

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render() {
    return (
      <Host>
        {this.divider && <se-divider></se-divider>}
        <div
          class={{
            'se-block-footer': true,
            [`option-${this.option}`]: true,
            [`direction-${this.direction}`]: true,
          }}
        >
          <div class="middle">
            <slot name="start"></slot>
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
