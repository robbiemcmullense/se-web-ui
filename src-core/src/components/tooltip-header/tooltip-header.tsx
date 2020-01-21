import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'se-tooltip-header',
  styleUrl: 'tooltip-header.scss',
  shadow: true
})
export class TooltipHeaderComponent {
  /**
   * Indicates an icon you want to display in your tooltip.
   */
  @Prop() icon: string;

  render() {
    return [
      <div class="tooltip-header">{this.icon && <se-icon class="se-icon" size="small" >{this.icon}</se-icon>}<slot /></div>,
      <slot name="end" />
    ];
  }
}