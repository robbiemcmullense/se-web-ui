import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'se-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableComponent {
  @Element() el: HTMLElement;
  
  /**
   * Define if we should show a compact view of the table, vs a version with larger spacing and font
   */
  @Prop() compact: boolean;

  /**
   * Defines the vertical alignment of table items.
   */
  @Prop() alignItems: string = 'center';
  @Watch('alignItems') alignItemsDidChange() {
    this.el
      ?.querySelectorAll<HTMLSeTableItemElement>('se-table-item')
      .forEach((item) => {
        item.alignItems = this.alignItems;
      });
  }

  componentWillLoad() {
    this.alignItemsDidChange();
  }

  render() {
    return (
      <Host role="table" class={{ compact: this.compact }}>
        <div class={{ 'table-rows-wrapper': true }}>
          <slot name="start"></slot>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
