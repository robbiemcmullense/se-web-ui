import { Component, h, Host, Prop } from '@stencil/core';
@Component({
  tag: 'se-tooltip-header',
  styleUrl: 'tooltip-header.scss',
  shadow: true,
})
export class TooltipHeaderComponent {
  /**
   * Indicates an icon you want to display in your tooltip.
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <div class="start">
          {this.icon && (
            <se-icon class="se-icon" size="small">
              {this.icon}
            </se-icon>
          )}
          <slot name="icon"></slot>
          <slot />
        </div>
        <slot name="end" />
      </Host>
    );
  }
}
