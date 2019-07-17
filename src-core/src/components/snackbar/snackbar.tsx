import { Component, Element, Event, EventEmitter, h, Prop, Watch } from "@stencil/core";

const SHOW_SNACKBAR = 'show';

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
   * Indicates if the snackbar is open.  Set to `false` (closed) by default.
   */
  @Prop({ mutable: true }) open: boolean = false;
  @Watch('open') openDidChange() {
    if (this.open) {
      this.el.classList.add(SHOW_SNACKBAR);
    } else {
      this.el.classList.remove(SHOW_SNACKBAR);
    }
  }
  @Element() el: HTMLElement;
  /**
   * Sends information to the parent component when closing the snackbar.
   */
  @Event() didClose: EventEmitter;

  closeSnackbar() {
    this.open = false;
    this.didClose.emit();
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
          {this.canClose ? <span class="close" onClick={() => this.closeSnackbar()}>{this.closeText}</span> : ''}
        </div>
      </div>
    )
  }
}