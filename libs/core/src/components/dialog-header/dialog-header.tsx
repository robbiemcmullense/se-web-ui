import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter, Watch,
} from '@stencil/core';
import actionDeleteCross from '@se/icons/svg/action_delete_cross.svg';

@Component({
  tag: 'se-dialog-header',
  styleUrl: 'dialog-header.scss',
  shadow: true,
})
export class DialogHeaderComponent {
  @Element() el: HTMLElement;

  /**
   * Defaulted to a small padding.
   * When set to `indent`, the header will have an alternative margins and paddings.
   * @deprecated use padding instead
   */
  @Prop() option: 'indent';
  @Watch('option') optionDidChange() {
    this.updateItem();
  }

  /**
   * Defines the color of the dialog header.
   * `standard`: Standard color schema.
   * `alternative`: Alternative background with standard color for the text.
   * `primary`: Primary color schema.
   * `secondary`: Secondary color schema.
   * `information`: Information color schema.
   * By default, the primary color will be used.
   */
  @Prop() color: 'standard' | 'alternative' | 'primary' | 'secondary' | 'information' = 'primary';

  /**
   * optional property. define the padding around the button
   * `small` small padding: default
   * `large` large padding.
   */
  @Prop({ mutable: true }) padding: 'small' | 'large';
  @Watch('padding') paddingDidChange() {
    this.updateItem();
  }

  /**
   * Display the close icon to close the dialog.
   * Default setting is `false`.
   */
  @Prop() closeIcon = false;

  componentWillLoad() {
    this.updateItem();
  }

  updateItem() {
    if (this.option === 'indent' && this.padding === undefined) {
      this.padding = 'large';
    }
  }

  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
   * The modal can then be safely removed from the DOM.
   */
  @Event() didCloseDialog: EventEmitter<any>;

  closeDialogClicked() {
    this.didCloseDialog.emit();
  }

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render() {
    return (
      <div
        class={{
          'se-dialog-header': true,
          [this.color]: !!this.color,
          [`p-${this.padding}`]: this.padding !== undefined,
        }}
      >
        <div class="flex middle">
          <slot></slot>
        </div>
        <slot name="end"></slot>
        {this.closeIcon && (
          <se-icon
            class="icon-close"
            option="button"
            no-hover
            onClick={() => this.closeDialogClicked()}
          >
            <span innerHTML={actionDeleteCross}></span>
          </se-icon>
        )}
      </div>
    );
  }
}
