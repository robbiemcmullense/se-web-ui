import { Component, h, Element, Host, Listen } from '@stencil/core';
import { debounce } from '../../utils';
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
    this.el.parentElement
      .querySelectorAll<HTMLSeTableGroupElement>('se-table-group')
      .forEach((group) => {
        group.setAttribute('data-resized', 'true');
      });
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
    const columnMaxWidths = [];
    const columnFlex = [];

    this.el
      .querySelectorAll<HTMLSeTableItemHeaderElement>('se-table-item-header')
      .forEach((headerItem, index) => {
        columnWidths[index] = headerItem.width;
        columnMinWidths[index] = headerItem.minWidth;
        columnMaxWidths[index] = headerItem.maxWidth;
        columnFlex[index] = headerItem.flex;
      });
    columnProperties.set('minWidths', columnMinWidths);
    columnProperties.set('maxWidths', columnMaxWidths);
    columnProperties.set('flex', columnFlex);
    columnProperties.set('widths', columnWidths);
  }

  storeColumnProperties() {
    columnProperties.reset();
    this.setColumnProperties();
  }

  componentWillRender() {
    debounce(this.storeColumnProperties());
  }

  slotChangeHandler = () => {
    debounce(this.storeColumnProperties());
  };

  render() {
    return (
      <Host role="row" slot="start">
        <div class="sticky start">
          <slot onSlotchange={this.slotChangeHandler} name="start"></slot>
        </div>
        <slot onSlotchange={this.slotChangeHandler}/>
        <div class="sticky end">
          <slot onSlotchange={this.slotChangeHandler} name="end"></slot>
        </div>
      </Host>
    );
  }
}
