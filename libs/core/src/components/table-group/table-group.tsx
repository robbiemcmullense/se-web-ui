import { Component, h, Prop, Element, Host, State } from "@stencil/core";

@Component({
  tag: "se-table-group",
  styleUrl: "table-group.scss",
  shadow: true
})
export class TableGroupComponent {
  @Element() el: HTMLElement;
  /**
  * Indicates whether or not the `se-table-group` is selectable.  Set to `false` by default.
  */
 @Prop() selectable: boolean = false;
 /**
   * Indicates whether or not the `se-table-group` is selected.  Set to `false` by default.
   */
  @Prop() selected: boolean = false;

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
      <Host 
        role="row"
        class={{ "selectable": this.selectable, "selected": this.selected}}>
        <div class="table-group-row"><slot/></div>
        <slot name="detail" />
      </Host>
    )
  }
}
