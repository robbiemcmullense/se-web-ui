import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'se-sidemenu-item',
  styleUrl: 'sidemenu-item.scss',
  shadow: true
})
export class SidemenuItemComponent {
  /**
   * Define the title of the tab
   */
  @Prop() item: string;

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
