import { Component, Element, Event, EventEmitter, Prop, Watch } from "@stencil/core";

const SHOW_SNACKBAR = 'show';

@Component({
  tag: "se-snackbar",
  styleUrl: "snackbar.scss",
  shadow: true
})

export class SnackbarComponent {

  @Prop() type: 'success' | 'error' | 'warning' | 'information' = 'information';
  @Prop() icon: string;
  @Prop() message: string;
  @Prop() canClose: boolean;
  @Prop() closeText: string;
  @Prop({mutable: true}) open: boolean = false;
  @Watch('open') openDidChange() {
    if (this.open) {
      this.el.classList.add(SHOW_SNACKBAR);
    } else {
      this.el.classList.remove(SHOW_SNACKBAR);
    }
  }
  @Element() el: HTMLElement;
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