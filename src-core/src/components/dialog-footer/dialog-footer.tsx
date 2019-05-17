import { Component, h } from "@stencil/core";

@Component({
  tag: "se-dialog-footer",
  styleUrl: "dialog-footer.scss",
  shadow: true
})
export class DialogFooterComponent {

  render() {
    return [
      <div class="flex"><slot name="start"/></div>,
      <slot />
    ];
  }
}