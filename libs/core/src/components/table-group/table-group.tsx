import { Component, h, Prop, Element, Host } from '@stencil/core';
import columnProperties from '../table/store';
import { debounce } from '../../utils';

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

  getColumnProperties() {
    const columnWidths = [];
    const columnMinWidths = [];
    const columnMaxWidths = [];
    const columnFlex = [];

    this.el.parentElement
      ?.querySelectorAll<HTMLSeTableItemHeaderElement>('se-table-item-header')
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

  setColumnProperties() {
    const columnWidths = columnProperties.get('widths');
    const columnMinWidths = columnProperties.get('minWidths');
    const columnMaxWidths = columnProperties.get('maxWidths');
    const columnFlex = columnProperties.get('flex');
    this.el
      ?.querySelectorAll<HTMLSeTableItemElement>('se-table-item')
      .forEach((item, index) => {
        if (columnWidths.length) {
          item.width = columnWidths[index];
        }
        if (columnMinWidths.length) {
          item.minWidth = columnMinWidths[index];
        }
        if (columnMaxWidths.length) {
          item.maxWidth = columnMaxWidths[index];
        }
        if (columnFlex.length) {
          item.flex = columnFlex[index];
        }
      });
  }

  assignColumnProperties() {
    this.getColumnProperties();
    this.setColumnProperties();
  }

  componentWillLoad() {
    debounce(this.assignColumnProperties());
  }

  slotChangeHandler = () => {
    debounce(this.assignColumnProperties());
  };

  render() {
    const id = this.el.getAttribute('id');

    columnProperties.onChange('widths', () => {
      if(this.el.getAttribute('data-resized')) {
          this.el.removeAttribute('data-resized');
          this.setColumnProperties();
        }
    });

    return (
      <Host
        role="row"
        class={{ selectable: this.selectable, selected: this.selected }}
      >
        <div class="table-group-row" id={id ? `wc-${id}` : ''}>
          <div class="sticky start">
            <slot onSlotchange={this.slotChangeHandler} name="start"></slot>
          </div>
          <slot onSlotchange={this.slotChangeHandler}/>
          <div class="sticky end">
            <slot onSlotchange={this.slotChangeHandler} name="end"></slot>
          </div>
        </div>
        <slot name="detail" />
      </Host>
    );
  }
}
