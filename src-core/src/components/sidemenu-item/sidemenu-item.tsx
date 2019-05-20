import { Component, h, Host, Prop } from '@stencil/core';

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

  render() {
    return (
      <Host
        role={'sidenavpanel'}
        aria-hidden={{'true': !this}}
        class={{'navitem-hidden': !this}}>
        <slot></slot>
      </Host>
    )
  }
}