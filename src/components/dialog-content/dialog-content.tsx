import { Component,Prop } from "@stencil/core";

@Component({
  tag: "se-dialog-content",
  styleUrl: "dialog-content.scss",
  shadow: true
})
export class DialogContentComponent {
  @Prop() option: 'fill';
  @Prop() icon: string;
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary';

  hostData() {
    return {
      'class': { 'full-content': this.option === 'fill' }
    };
  }
  render() {
    return [
      this.icon && <se-icon size="large" color={this.iconColor}>{this.icon}</se-icon>,
      <div class="inner-content"><slot /></div>
    ];
  }
}
