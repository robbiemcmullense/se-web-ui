import { Component, h, Element, Host, Listen } from '@stencil/core';
import columnProperties from '../table/store';

@Component({
  tag: 'se-table-group-header',
  styleUrl: 'table-group-header.scss',
  shadow: true,
})
export class TableGroupHeaderComponent {
  @Element() el: HTMLElement;

  @Listen('didWidthChange') widthChangeHandler(ev) {
    const columnWidths = [];
    const columnFlex = [];
    ev.stopPropagation();
    this.el
      .querySelectorAll<HTMLSeTableItemHeaderElement>('se-table-item-header')
      .forEach((headerItem, index) => {
        columnWidths[index] = headerItem.width || `${headerItem.clientWidth}px`;
        columnFlex[index] = 'initial';
        headerItem.width = columnWidths[index];
        headerItem.flex = columnFlex[index];
      });
    columnProperties.set('flex', columnFlex);
    columnProperties.set('widths', columnWidths);
  }

  setColumnProperties() {
    const columnWidths = [];
    const columnMinWidths = [];
    const columnFlex = [];

    this.el
      .querySelectorAll<HTMLSeTableItemHeaderElement>('se-table-item-header')
      .forEach((headerItem, index) => {
        columnWidths[index] = headerItem.width;
        columnMinWidths[index] = headerItem.minWidth;
        columnFlex[index] = headerItem.flex;
      });
    columnProperties.set('minWidths', columnMinWidths);
    columnProperties.set('flex', columnFlex);
    columnProperties.set('widths', columnWidths);
  }

  componentWillLoad() {
    this.setColumnProperties();
  }

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
