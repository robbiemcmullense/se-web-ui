import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'se-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableComponent {
  render() {
    return (
      <Host role="table">
        <div class="table-rows-wrapper">
          <slot name="start"></slot>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
