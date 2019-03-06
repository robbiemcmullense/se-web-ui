import { Component, Element, Event, EventEmitter, Prop, Watch } from "@stencil/core";

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
   * `information`: dark grey
   */
  @Prop() type: 'success' | 'error' | 'warning' | 'information' = 'information';
  /**
   * The name of the icon you wish to display.  Optional.
   */
  @Prop() icon: string;
  /**
   * The content of the message you want the snackbar to display.
   */
  @Prop() message: string;
  /**
   * Display a close "button".
   */
  @Prop() canClose: boolean;
  /**
   * Defines the text you want your "close button" to read.
   */
  @Prop() closeText: string;
  /**
   * Indicates if the snackbar is open.
   */
  @Prop({mutable: true}) open: boolean = false;
  @Watch('open') openDidChange() {
    if (this.open) {
      this.el.classList.add(SHOW_SNACKBAR);
    } else {
      this.el.classList.remove(SHOW_SNACKBAR);
    }
  }
  @Element() el: HTMLElement;
  /**
   * Send information to the parent component when closing the snackbar.
   */
  @Event() close: EventEmitter;

  closeSnackbar() {
    this.open = false;
    this.close.emit();
  }

  hostData() {
    return {
      class: this.type
    }
  }
  
  render() {
    return [
      <div class="snackbar">
        {this.icon ? <span class="se-icon">{this.icon}</span> : ''}
        <span class="message">{this.message}</span>
        {this.canClose ? <span class="close" onClick={() => this.closeSnackbar()}>{this.closeText}</span> : ''}
      </div>
    ];
  }
}