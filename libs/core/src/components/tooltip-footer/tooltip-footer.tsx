import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'se-tooltip-footer',
  styleUrl: 'tooltip-footer.scss',
  shadow: true,
})
export class TooltipFooterComponent {
  render() {
    return (
      <Host>
        <div class="flex">
          <slot name="start" />
        </div>
        <slot />
      </Host>
    );
  }
}
