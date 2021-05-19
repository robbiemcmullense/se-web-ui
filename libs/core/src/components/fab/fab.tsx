import {
  Component,
  h,
  Prop,
  State,
  Method,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';
import notificationError from '@se/icons/svg/notification_error.svg';
import arrow4Top from '@se/icons/svg/arrow4_top.svg';
const SHOW_FAB = 'show';

@Component({
  tag: 'se-fab',
  styleUrl: 'fab.scss',
  shadow: true,
})
export class FabComponent {
  closeIcon = notificationError;
  arrowUp = arrow4Top;
  /**
   * Property that determines if an icon is included in the main action button.
   */
  @Prop() icon: string;
  /**
   * Property that determines the functionality of the FAB.
   * The default setting is `speeddial`, which will show/hide a dropdown menu when clicking on the FAB.
   * The `backtotop` setting returns you to the top of the page you are viewing when clicking on the FAB.
   */
  @Prop() option: 'speeddial' | 'backtotop' = 'speeddial';
  /**
   *  Property that determines the position of the component.
   *  The default setting is `bottom`, rendering a FAB at the bottom right corner.
   *  The `top` setting renders the FAB at the top right corner.
   */
  @Prop() position: 'bottom' | 'top' = 'bottom';
  /**
   * Indicates the color of your main action button .
   * The Default setting is `primary` color.
   * The `alternative` button can also be used.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';

  /**
   * Indicates if there is an overlay behind the FAB. Used only if in dial mode.
   */
  @Prop() overlay: boolean;

  @State() showDial = false;

  /**
   * Event emitted to close the tooltip (if there is one) when interacting with the fab button.
   */
  @Event() closeTooltips: EventEmitter;

  /**
   * Use this method to toggle (show/hide) the mini action buttons.
   */
  @Method()
  async toggleAction() {
    if (this.option === 'speeddial') {
      this.showDial = !this.showDial;
      this.closeTooltips.emit();
    }
  }

  getIcon() {
    let icon: any;
    switch (this.option) {
      case 'speeddial':
        icon = !this.showDial ? this.icon : this.closeIcon;
        break;
      case 'backtotop':
        icon = this.arrowUp;
        break;
      default:
        break;
    }
    return icon;
  }

  render() {
    return (
      <Host onClick={() => this.toggleAction()}>
        {this.showDial && (
          <div
            class={{
              'dialog-background': true,
              overlay: this.overlay,
            }}
          ></div>
        )}
        <div
          class={{ [`pos-${this.position}`]: !!this.position, 'se-fab': true }}
        >
          <se-button
            color={this.color}
            icon-only="true"
            option="fab"
            class={{
              backtotop: this.option === 'backtotop',
              'fab-button': true,
            }}
          >
            <se-icon slot="icon" size="medium">
              <span innerHTML={this.getIcon()}></span>
            </se-icon>
          </se-button>
          <div
            class={{
              'mini-action-button': true,
              [SHOW_FAB]: this.option === 'speeddial' && this.showDial,
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
