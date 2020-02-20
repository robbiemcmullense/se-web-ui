import { Component, h, Element, Host, State } from "@stencil/core";

@Component({
  tag: "se-table-group-header",
  styleUrl: "table-group-header.scss",
  shadow: true
})
export class TableGroupHeaderComponent {
  @Element() el: HTMLElement;

  @State() innerId;

  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      this.innerId = `wc-${id}`;
    }
  }

  componentDidLoad() {
    this.setButtonId();
  }

  render() {
    return (
      <Host role="row" slot="start">
        <slot/>
      </Host>
    )
  }
}
