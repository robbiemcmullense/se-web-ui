import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
  Host,
  Watch,
} from '@stencil/core';
import information_circle from '@se/icons/svg/information_circle.svg';
import action_delete_cross from '@se/icons/svg/action_delete_cross.svg';

@Component({
  tag: 'se-snackbar',
  styleUrl: 'snackbar.scss',
  shadow: true,
})
export class SnackbarComponent {
  @Element() el: HTMLElement;
  /**
   * Indicates the background color of your snackbar.
   * `success`: green
   * `warning`: orange
   * `error`: red
   * `information`: dark grey, default setting
   */
  @Prop() type: 'success' | 'error' | 'warning' | 'information' = 'information';
  /**
   * The name of the icon you wish to display.  The default icon is an information circle.
   */
  @Prop({ mutable: true }) icon: string | 'none' = 'information_circle';
  /**
   * The content of the message you want the snackbar to display.
   */
  @Prop() message: string;
  /**
   * Displays a "button" to close the snackbar.
   * The default setting is `false`.
   * This will be visible if set to `true`.
   */
  @Prop() canClose = false;
  /**
   * Defines the text you want your custom action button to read.
   */
  @Prop() actionText: string;
  /**
   * Indicates if the snackbar is open.  Set to `false` (closed) by default.
   */
  private timeout: any;

  @Prop({ mutable: true }) open = false;
  @Watch('open') openDidChange() {
    if (this.open) {
      this.timeout = setTimeout(() => {
        if (!this.canClose) {
          this.closeSnackbar();
        }
      }, this.duration);
    }
  }
  /**
   * Indicates the duration (in milliseconds) that the snackbar will display on screen before auto-closing, if `canClose` is set to false.
   * The default setting is 5000.
   */
  @Prop() duration = 5000;
  /**
   * Sends information to the parent component when closing the snackbar.
   */
  @Event() didClose: EventEmitter;
  /**
   * Sends information to the parent component when clicking a custom action button.
   */
  @Event() actionClicked: EventEmitter;

  closeSnackbar() {
    this.open = false;
    setTimeout(() => {
      this.didClose.emit();
    }, 500);
  }

  submitData() {
    this.actionClicked.emit();
  }

  componentDidLoad() {
    this.openDidChange();
  }

  disconnectedCallback() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    let renderIcon: string | boolean =
      this.icon === 'information_circle' ? information_circle : this.icon;
    if (this.icon === 'none') {
      renderIcon = false;
    }
    return (
      <Host class={{ 'show-snackbar': this.open }}>
        <div class={{ snackbar: true, [this.type]: true }} role="alert">
          <span class="snackbar-icon">
            {renderIcon && (
              <se-icon>
                <span innerHTML={renderIcon as string}></span>
              </se-icon>
            )}
            <slot name="icon"></slot>
          </span>
          <span class="message">
            {this.message}
            <slot></slot>
          </span>
          {this.actionText ? (
            <se-button
              color="alternative"
              option="outline"
              onClick={() => this.submitData()}
            >
              {this.actionText}
            </se-button>
          ) : (
            ''
          )}
          {this.canClose ? (
            <se-icon
              option="button"
              class="close"
              onClick={() => this.closeSnackbar()}
            >
              <span innerHTML={action_delete_cross}></span>
            </se-icon>
          ) : (
            ''
          )}
        </div>
      </Host>
    );
  }
}
