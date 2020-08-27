import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'se-table-item',
  styleUrl: 'table-item.scss',
  shadow: true,
})
export class TableItemComponent {
  @Element() el: HTMLElement;

  @Prop() option: 'dropdown' | 'text' | 'custom' = 'text';

  /**
   * Defines the specific flex-basis of a block.
   */
  @Prop() flex: string;
  /**
   * Defines the specific width of a block, for items that should not be flexible.
   */
  @Prop() width: string;

  /**
   * Defines the  min-width of a block to insure that a scroll appear if too many column are in the table. Only necessary if using flex.
   */
  @Prop() minWidth: string;

  /**
   * Optional property defines the tag type within the `se-table-item`.
   * Default value `false` defines the tag type as `div`.
   * `true` defines the tag type as a `button`.
   */
  @Prop() clickable = false;

  render() {
    const displayStyle = {
      flex: this.flex || '',
      maxWidth: this.width || '',
      width: this.width || '',
      minWidth: this.minWidth || '',
    };

    return (
      <Host
        role="cell"
        class={['se-table-item', `opt-${this.option}`].join(' ')}
        style={displayStyle}
      >
        <div class="table-item-content">
          <div class="table-item-label">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
