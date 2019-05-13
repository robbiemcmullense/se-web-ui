import { Component,Prop } from "@stencil/core";

@Component({
  tag: "se-dialog-content",
  styleUrl: "dialog-content.scss",
  shadow: true
})
export class DialogContentComponent {
  /**
   * When set to `fill`, content will fill the whole space of the dialog.
   */
  @Prop() option: 'fill';
  /**
   * Indicates an icon you want to display in your dialog.
   */
  @Prop() icon: string;
  /**
   * Indicates what color schema you want to render in your dialog.
   */
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary';

  hostData() {
    return {
      'class': { 'full-content': this.option === 'fill' }
    };
  }
  render() {
    return [
      this.icon ? <se-icon size="large" color={this.iconColor}>{this.icon}</se-icon> : '',
      <div class="inner-content"><slot /></div>
    ];
  }
}
