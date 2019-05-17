import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-sidemenu-item',
  styleUrl: 'sidemenu-item.scss',
  shadow: true
})
export class SidemenuItemComponent {
  /**
   * Defines the title of the menu item.
   */
  @Prop() item: string;

  /**
   * Defines if the menu item is active or not.
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