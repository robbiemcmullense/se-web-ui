import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'se-sidenav-item',
  styleUrl: 'sidenav-item.scss',
  shadow: true
})
export class SidenavItemComponent {
  /**
   * Define the title of the tab
   */
  @Prop() navTitle: string;

  /**
   * Defines if the tab is active or not.
   */
  @Prop({ mutable: true }) active = false;

  @Method()
  async setActive(): Promise<void> {
    this.active = true;
  }

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
