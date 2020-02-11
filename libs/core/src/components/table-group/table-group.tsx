import { Component, h, Element, Host, State } from "@stencil/core";

@Component({
  tag: "se-table-group",
  styleUrl: "table-group.scss",
  shadow: true
})
export class TableGroupComponent {
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
      <Host role="row">
        <div class="table-group-row"><slot/></div>
        <slot name="detail" />
      </Host>
    )
  }
}
