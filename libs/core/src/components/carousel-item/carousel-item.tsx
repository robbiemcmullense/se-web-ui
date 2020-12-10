import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'se-carousel-item',
  styleUrl: 'carousel-item.scss',
  shadow: true,
})
export class CarouselItem {
  render() {
    return (
      <Host>
        <se-block color="none">
          <slot></slot>
        </se-block>
      </Host>
    );
  }
}
