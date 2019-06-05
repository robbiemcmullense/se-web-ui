import { Component, h, Host, Prop } from "@stencil/core";

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
  @Prop() color:  'primary' | 'alternative' = 'primary'

  render() {
    return (
      <Host class={this.color}>
        <h4 class="flex"><slot></slot></h4>
        <slot name="end"></slot>
      </Host>
    )
  }
}
