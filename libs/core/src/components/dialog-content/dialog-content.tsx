import { Component, Element, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'se-dialog-content',
  styleUrl: 'dialog-content.scss',
  shadow: true,
})
export class DialogContentComponent {
  @Element() el: HTMLElement;

  /**
   * Defaulted to a small padding.
   * When set to `fill`, the content will fill the whole space of the dialog.
   * When set to `indent`, the content will alternative margins and paddings.
   * @deprecated use padding instead
   */
  @Prop() option: 'fill' | 'indent';
  @Watch('option') optionDidChange(): void {
    this.updateItem();
  }

  /**
   * optional property. define the padding around the button
   * `none` no padding.
   * `small` small padding: default
   * `large` large padding.
   */
  @Prop({ mutable: true }) padding: 'none' | 'small' | 'large';
  @Watch('padding') paddingDidChange(): void {
    this.updateItem();
  }

  /**
   * Indicates an icon you want to display in your dialog.
   */
  @Prop() icon: string;

  /**
   * Indicates what icon color schema you want to render in your dialog.
   */
  @Prop() iconColor:
    | 'standard'
    | 'alternative'
    | 'primary'
    | 'secondary'
    | 'information';

  /**
   * Indicates if se-dialog-content is the last child of the dialog component.
   */
  @Prop() isLastChild = true;

  componentWillLoad() {
    this.updateItem();
  }

  updateItem() {
    if (this.padding === undefined) {
      if (this.option === 'fill') {
        this.padding = 'none';
      } else if (this.option === 'indent') {
        this.padding = 'large';
      } else {
        this.padding = 'small';
      }
    }
  }

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render() {
    return (
      <div
        class={{
          'se-dialog-content': true,
          [`p-${this.padding}`]: !!this.padding,
          'last-child': this.isLastChild,
        }}
      >
        <span class="se-icon-wrapper">
          {this.icon ? (
            <se-icon size="large" color={this.iconColor}>
              <span innerHTML={this.icon}></span>
            </se-icon>
          ) : (
            ''
          )}
          <slot name="icon"></slot>
        </span>
        <div class="inner-content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
