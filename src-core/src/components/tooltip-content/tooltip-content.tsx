import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'se-tooltip-content',
  styleUrl: 'tooltip-content.scss',
  shadow: true
})
export class TooltipContentComponent {
  /**
   * Indicates an icon you want to display in your tooltip.
   */
  @Prop() icon: string;
  render() {
    return (
      <div class="tooltip-content">
        {this.icon && <se-icon class="se-icon" size="small">{this.icon}</se-icon>}
        <slot />
      </div>
    )
  }
}