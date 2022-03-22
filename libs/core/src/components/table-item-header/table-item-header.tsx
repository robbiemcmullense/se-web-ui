import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
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
  @Prop({ mutable: true }) width: string;
  @Watch('width') widthDidChange() {
    this.didWidthChange.emit();
  }

  /**
   * Defines the  min-width of a block to insure that a scroll appear if too many column are in the table. Only necessary if using flex.
   */
  @Prop() minWidth: string;

  /**
   * Defines the  max-width of a column.
   */
  @Prop() maxWidth: string;

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

  /**
   * Optional property defines whether the column is resizable or not.
   * Default value `false` defines column as not resizable
   * `true` defines column is resizable
   */
  @Prop() resizable: boolean;

  /**
   * Event emitted to notify the table-group-header component that the width has changed.
   */
  @Event() didWidthChange: EventEmitter<void>;

  render() {
    let ariaLabelSort;
    let disabled = false;
    const isSortable = !!this.sort as boolean;
    let mouseStartPosition;
    let headerWidth;

    const resizeMouseDownHandler = ev => {
      mouseStartPosition = ev.clientX;
      headerWidth = this.el.shadowRoot
        .querySelector('.table-item-content')
        .getBoundingClientRect().width;
      document.addEventListener('mousemove', resizeMouseMoveHandler);
      document.addEventListener('mouseup', resizeMouseUpHandler);
    };

    const resizeMouseMoveHandler = ev => {
      this.width = headerWidth + (ev.clientX - mouseStartPosition) + 'px';
    };

    const resizeMouseUpHandler = () => {
      document.removeEventListener('mousemove', resizeMouseMoveHandler);
      document.removeEventListener('mouseup', resizeMouseUpHandler);
    };

    const dragStartHandler = ev => {
      ev.preventDefault();
    };

    const id = this.el.getAttribute('id');
    const displayStyle = {
      flex: this.flex || '',
      maxWidth: this.maxWidth || this.width || '',
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
              onDragStart={dragStartHandler}
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
        {this.resizable && (
          <div
            class="resize-border"
            onMouseDown={resizeMouseDownHandler}
            onDragStart={dragStartHandler}
          ></div>
        )}
      </Host>
    );
  }
}
