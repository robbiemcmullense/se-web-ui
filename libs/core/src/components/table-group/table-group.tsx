import { Component, h, Prop, Element, Host } from '@stencil/core';

@Component({
  tag: 'se-table-group',
  styleUrl: 'table-group.scss',
  shadow: true,
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

  render() {
    const id = this.el.getAttribute('id');
    return (
      <Host
        role="row"
        class={{ selectable: this.selectable, selected: this.selected }}
      >
        <div class="table-group-row" id={id ? `wc-${id}` : ''}>
          <div class="sticky start">
            <slot name="start"></slot>
          </div>
          <slot />
          <div class="sticky end">
            <slot name="end"></slot>
          </div>
        </div>
        <slot name="detail" />
      </Host>
    );
  }
}
