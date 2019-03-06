import { Component, Element, Prop, Watch } from "@stencil/core";

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
  @Prop() open: boolean = false;
  @Watch('open') openDidChange() {
    if (this.open) {
      this.addAnimation();
    } else {
      this.removeAnimation();
    }
  }
  @Element() el: HTMLElement;

  private addAnimation() {
    this.el.classList.add(SHOW_SNACKBAR);
  }

  private removeAnimation() {
    this.el.classList.remove(SHOW_SNACKBAR);
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
        {this.canClose ? <span class="close">{this.closeText}</span> : ''}
      </div>
    ];
  }
}