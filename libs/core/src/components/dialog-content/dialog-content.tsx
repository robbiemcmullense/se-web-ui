import { Component, Element, h, Prop } from '@stencil/core';

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
   */
  @Prop() option: 'fill' | 'indent';
  /**
   * Indicates an icon you want to display in your dialog.
   */
  @Prop() icon: string;
  /**
   * Indicates what icon color schema you want to render in your dialog.
   */
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary';
  /**
   * Indicates if se-dialog-content is the last child of the dialog component.
   */
  @Prop() isLastChild = true;

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render() {
    return (
      <div
        class={[
          'se-dialog-content',
          this.option === 'fill' ? 'full-content' : '',
          this.option === 'indent' ? 'alternative-indents' : '',
          this.isLastChild ? 'last-child' : '',
        ].join(' ')}
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
