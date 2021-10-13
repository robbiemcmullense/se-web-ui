import { Component, Host, h, Prop } from '@stencil/core';
import columnProperties from './store';

@Component({
  tag: 'se-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableComponent {
  /**
   * Define if we should show a compact view of the table, vs a version with larger spacing and font
   */
  @Prop() compact: boolean;

  componentWillLoad() {
    columnProperties.reset();
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
