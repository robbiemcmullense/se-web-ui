import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-snackbar",
  styleUrl: "snackbar.scss",
  shadow: true
})
export class SnackbarComponent {

  @Prop() color: 'success' | 'error' | 'warning' | 'information' = 'information';
  @Prop() icon: string;
  @Prop() message: string;
  @Prop() canClose: boolean;
  
  render() {
    return [
      <div class="snackbar">
        <span class="se-icon">{this.icon}</span>
        <span class="message">{this.message}</span>
      </div>
    ];
  }

}