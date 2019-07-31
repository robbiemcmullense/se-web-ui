import { Component, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';

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
   * The default setting is `false`.
   */
  @Prop({ mutable: true }) active = false;
  @Watch('active')
  activeDidChange() {
    if (this.active) {
      this.didClick.emit();
    }
  }

  @Event() didClick: EventEmitter<any>;

  render() {
    return (
      <Host
        role={'sidenavpanel'}
        aria-hidden={{'true': !this.active}}
        class={{'navitem-hidden': !this.active}}>
        <slot></slot>
      </Host>
    )
  }
}
