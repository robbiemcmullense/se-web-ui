import { Component, Element, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'se-block-header',
  styleUrl: 'block-header.scss',
  shadow: true,
})
export class BlockHeader {
  @Element() el: HTMLElement;
  /**
   * Defines whether or not a divider will be applied to the se-block-header.
   * The se-block component's divider property will be applied to the se-block-header component.
   */
  @Prop() divider: boolean;
  /**
   * Defines the visual appearance of a header.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the header with respect to the card design.
   * `fill` removes all spacing, for example with use of the `se-tabbar` option `content`.
   */
  @Prop({ mutable: true }) option: 'card' | 'widget' | 'basic' | 'fill' =
    'basic';

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'se-block-header': true,
            [`option-${this.option}`]: true,
          }}
        >
          <slot name="start"></slot>
          <div class="middle">
            <slot></slot>
          </div>
          <slot name="end"></slot>
        </div>
        {this.divider && <se-divider></se-divider>}
      </Host>
    );
  }
}
