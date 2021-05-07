import { Component, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'se-table-group-header',
  styleUrl: 'table-group-header.scss',
  shadow: true,
})
export class TableGroupHeaderComponent {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host role="row" slot="start">
        <div class="sticky start">
          <slot name="start"></slot>
        </div>
        <slot />
        <div class="sticky end">
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
