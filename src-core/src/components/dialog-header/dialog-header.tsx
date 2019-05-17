import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "se-dialog-header",
  styleUrl: "dialog-header.scss",
  shadow: true
})
export class DialogHeaderComponent {
    /**
   * Define the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text
   * `primary`: Primary color schema.
   */
  @Prop() color: 'alternative' | 'primary' = 'primary'

  hostData() {
    return {
      'class': this.color
    };
  }
  render() {
    return [
      <h3 class="flex"><slot /></h3>,
      <slot name="end"/>
    ];
  }
}
