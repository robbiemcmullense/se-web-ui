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
  @Prop() icon: string = 'information_circle';
  /**
   * The content of the message you want the snackbar to display.
   */
  @Prop() message: string;
  /**
   * Display a close "button".
   */
  @Prop() canClose: boolean = true;
  /**
   * Defines the text you want your "close button" to read.
   */
  @Prop() closeText: string = 'dismiss';
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
  @Event() didClose: EventEmitter;

  closeSnackbar() {
    this.open = false;
    this.didClose.emit();
  }

  hostData() {
    return {
      class: this.type
    }
  }
  
  componentDidLoad() {
    this.openDidChange();
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