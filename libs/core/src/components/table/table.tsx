import { Component, Host, h} from "@stencil/core";

@Component({
  tag: "se-table",
  styleUrl: "table.scss",
  shadow: true
})
export class TableComponent {

  render() {
    return <Host role="table">
      <slot name="start"></slot>
      <div class="table-rows-wrapper">
        <slot></slot>
      </div>
    </Host>;
  }
}
