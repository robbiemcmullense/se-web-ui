import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'se-sidenav-item',
  styleUrl: 'sidenav-item.scss',
  shadow: true
})
export class SidenavItemComponent {
  /**
   * Define the text of the tab
   */
  @Prop() text: string;

  /**
   * Defines if the tab is active or not.
   */
  @Prop({ mutable: true }) active = false;

  hostData() {
    const { active } = this;
    return {
      'role': 'sidenavpanel',
      'aria-hidden': !active ? 'true' : null,
      'class': {
        'navitem-hidden': !active
      }
    };
  }
  render() {
    return (
      <slot></slot>
    );
  }
}
