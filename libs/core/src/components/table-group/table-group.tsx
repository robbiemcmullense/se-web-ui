import { Component, h, Prop, Element, Host } from '@stencil/core';
import columnProperties from '../table/store';

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

  setColumnProperties() {
    const columnWidths = columnProperties.get('widths');
    const columnMinWidths = columnProperties.get('minWidths');
    const columnFlex = columnProperties.get('flex');
    this.el
      .querySelectorAll<HTMLSeTableItemElement>('se-table-item')
      .forEach((item, index) => {
        if (columnWidths.length) {
          item.width = columnWidths[index];
        }
        if (columnMinWidths.length) {
          item.minWidth = columnMinWidths[index];
        }
        if (columnFlex.length) {
          item.flex = columnFlex[index];
        }
      });
  }

  componentWillLoad() {
    this.setColumnProperties();
  }

  render() {
    const id = this.el.getAttribute('id');

    columnProperties.onChange('widths', () => {
      this.setColumnProperties();
    });

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
