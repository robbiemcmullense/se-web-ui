import { Component, h } from '@stencil/core';
@Component({
  tag: 'se-tooltip-footer',
  styleUrl: 'tooltip-footer.scss',
  shadow:true
})
export class TooltipFooterComponent {
  render() {
    return [
      <div class="flex"><slot name="start"/></div>,
      <slot />
    ];
  }
}
