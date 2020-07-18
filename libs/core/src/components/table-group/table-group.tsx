import { Component, h, Prop, Element, Host, State } from '@stencil/core';

@Component({
  tag: 'se-table-group',
  styleUrl: 'table-group.scss',
  shadow: true
})
export class TableGroupComponent {
  @Element() el: HTMLElement;
  /**
   * Indicates whether or not the `se-table-group` is selectable.  Set to `false` by default.
   */
  @Prop() selectable = false;
  /**
   * Indicates whether or not the `se-table-group` is selected.  Set to `false` by default.
   */
  @Prop() selected = false;

  @State() innerId;

  setButtonId() {
    const id = this.el.getAttribute('id');
    if (id) {
      this.innerId = `wc-${id}`;
    }
  }

  componentWillLoad() {
    this.setButtonId();
  }

  render() {
    return (
      <Host
        role="row"
        class={{ selectable: this.selectable, selected: this.selected }}
      >
        <div class="table-group-row" id={this.innerId}>
          <slot />
        </div>
        <slot name="detail" />
      </Host>
    );
  }
}
