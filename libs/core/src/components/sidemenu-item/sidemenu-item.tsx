import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'se-sidemenu-item',
  styleUrl: 'sidemenu-item.scss',
  shadow: true,
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
  @Prop() active = false;
  @Watch('active') activeDidChange() {
    if (this.active) {
      this.didClick.emit();
    }
  }
  /**
   * Send an event when the sidemenu item changes
   */
  @Event() didClick: EventEmitter<any>;

  render() {
    return (
      <Host
        role={'sidenavpanel'}
        aria-hidden={{ true: !this.active }}
        class={[this.active ? 'active' : 'navitem-hidden'].join(' ')}
      >
        <slot></slot>
      </Host>
    );
  }
}
