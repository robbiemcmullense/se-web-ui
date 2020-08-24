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
  @Prop() color:  'primary' | 'alternative';

  render() {
    return (
      <div class={['se-dialog-header', this.color].join(' ')}>
        <div class="flex middle"><slot></slot></div>
        <slot name="end"></slot>
      </div>
    )
  }
}
