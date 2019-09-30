import { Component, Element, Event, EventEmitter, h, Prop, Watch } from "@stencil/core";

const SHOW_SNACKBAR = 'show-snackbar';

@Component({
  tag: "se-snackbar",
  styleUrl: "snackbar.scss",
  shadow: true
})

export class SnackbarComponent {
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
  @Prop() icon: string = 'information_circle';
  /**
   * The content of the message you want the snackbar to display.
   */
  @Prop() message: string;
  /**
   * Displays a "button" to close the snackbar.
   * The default setting is `false`.
   * This will be visible if set to `true`.
   */
  @Prop() canClose: boolean = false;
  /**
   * Defines the text you want your "close button" to read.  The default text is `dismiss`.
   */
  @Prop() closeText: string = 'dismiss';
  /**
   * Defines the text you want your custom action button to read.
   */
  @Prop() actionText: string;
  /**
   * Indicates if the snackbar is open.  Set to `false` (closed) by default.
   */
  @Prop({ mutable: true }) open: boolean = false;
  /**
   * Indicates the duration (in milliseconds) that the snackbar will display on screen before auto-closing, if `canClose` is set to false.
   * The default setting is 5000.
   */
  @Prop() duration: number = 5000;

  @Watch('open') openDidChange() {
    if (this.open) {
      this.el.classList.add(SHOW_SNACKBAR);
      setTimeout(() => {
        if (!this.canClose && !this.actionText) {
          this.closeSnackbar();
        }
      }, this.duration);
    }
  }
  @Element() el: HTMLElement;
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
    this.el.classList.remove(SHOW_SNACKBAR);
    this.didClose.emit();
  }

  submitData() {
    this.actionClicked.emit();
  }

  componentDidLoad() {
    this.openDidChange();
  }

  render() {
    return (
      <div class={this.type}>
        <div class="snackbar">
          {this.icon ? <span class="se-icon">{this.icon}</span> : ''}
          <span class="message">{this.message}</span>
          {this.actionText ? <span class="action" onClick={() => this.submitData()}>{this.actionText}</span> : ''}
          {this.canClose ? <span class="close" onClick={() => this.closeSnackbar()}>{this.closeText}</span> : ''}
        </div>
      </div>
    )
  }
}
