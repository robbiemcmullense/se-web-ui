import { Component, Host, h, Prop, Element } from '@stencil/core';
import arrow4Top from '@se/icons/svg/arrow4_top.svg';
import arrowDefault from '@se/icons/svg/arrow2_default.svg';

@Component({
  tag: 'se-table-item-header',
  styleUrl: 'table-item-header.scss',
  shadow: true,
})
export class TableItemHeaderComponent {
  @Element() el: HTMLElement;
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
  @Prop({ mutable: true }) clickable: boolean;
  /**
   * Optional property that provides the arrow icon based on which string is provided, and also causes the `clickable` property to `true`.
   * `asc` defines the icon as an upwards arrow in black.
   * `desc` defines the icon as a downwards arrow in black.
   * `none` defines the icon as an upwards arrow in grey.
   */
  @Prop() sort: 'asc' | 'desc' | 'none';

  render() {
    let ariaLabelSort;
    let disabled = false;
    const isSortable = !!this.sort as boolean;

    const id = this.el.getAttribute('id');
    const displayStyle = {
      flex: this.flex || '',
      maxWidth: this.width || '',
      width: this.width || '',
      minWidth: this.minWidth || '',
    };

    if (isSortable) {
      this.clickable = true;
      if (this.sort === 'asc') {
        ariaLabelSort = 'sort asc';
      } else if (this.sort === 'desc') {
        ariaLabelSort = 'sort desc';
      } else {
        disabled = true;
      }
    } else {
      ariaLabelSort = null;
    }
    const TagType = this.clickable || isSortable ? 'button' : ('div' as any);
    return (
      <Host
        role="cell"
        class={['se-table-item', isSortable ? `sort-${this.sort}` : ''].join(
          ' '
        )}
        id={id ? `wc-${id}` : ''}
        style={displayStyle}
      >
        <TagType class={'table-item-content'} aria-label={ariaLabelSort}>
          <div class="table-item-label">
            <slot></slot>
          </div>
          {isSortable ? (
            <se-icon
              class={['sortable', isSortable ? `sort-${this.sort}` : ''].join(
                ' '
              )}
              aria-hidden="true"
              size="nano"
            >
              {disabled ? (
                <span innerHTML={arrowDefault}></span>
              ) : (
                <span innerHTML={arrow4Top}></span>
              )}
            </se-icon>
          ) : (
            ''
          )}
        </TagType>
      </Host>
    );
  }
}
