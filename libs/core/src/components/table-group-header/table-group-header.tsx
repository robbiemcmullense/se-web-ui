import { Component, h, Element, Host } from "@stencil/core";

@Component({
  tag: "se-table-group-header",
  styleUrl: "table-group-header.scss",
  shadow: true
})
export class TableGroupHeaderComponent {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host role="row" slot="start">
        <slot/>
      </Host>
    )
  }
}
