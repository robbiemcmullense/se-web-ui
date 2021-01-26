import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import actionDeleteCross from '@se/icons/svg/action_delete_cross.svg';

@Component({
  tag: 'se-dialog-header',
  styleUrl: 'dialog-header.scss',
  shadow: true,
})
export class DialogHeaderComponent {
  /**
   * Defaulted to a small padding.
   * When set to `indent`, the header will have an alternative margins and paddings.
   */
  @Prop() option: 'indent';

  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text.
   * `primary`: Primary color schema.
   * By default is the parent's dialog color.
   */
  @Prop() color: 'primary' | 'alternative';

  /**
   * Display the close icon to close the dialog.
   * Default setting is `false`.
   */
  @Prop() closeIcon = false;

  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
   * The modal can then be safely removed from the DOM.
   */
  @Event() didCloseDialog: EventEmitter<any>;

  closeDialogClicked() {
    this.didCloseDialog.emit();
  }

  render() {
    return (
      <div
        class={[
          'se-dialog-header',
          this.color,
          this.option === 'indent' ? 'alternative-indents' : '',
        ].join(' ')}
      >
        <div class="flex middle">
          <slot></slot>
        </div>
        <slot name="end"></slot>
        {this.closeIcon && (
          <se-icon
            class="icon-close"
            option="button"
            onClick={() => this.closeDialogClicked()}
          >
            <span innerHTML={actionDeleteCross}></span>
          </se-icon>
        )}
      </div>
    );
  }
}
