import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "se-dialog-header",
  styleUrl: "dialog-header.scss",
  shadow: true
})
export class DialogHeaderComponent {
  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text.
   * `primary`: Primary color schema.
   */
  @Prop() color:  'primary' | 'alternative' = 'primary'

  render() {
    return (
      <div class={['se-dialog-header', this.color].join(' ')}>
        <h4 class="flex"><slot></slot></h4>
        <slot name="end"></slot>
      </div>
    )
  }
}
