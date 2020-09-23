import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-dialog-content',
  styleUrl: 'dialog-content.scss',
  shadow: true,
})
export class DialogContentComponent {
  /**
   * When set to `fill`, the content will fill the whole space of the dialog.
   */
  @Prop() option: 'fill';
  /**
   * Indicates an icon you want to display in your dialog.
   */
  @Prop() icon: string;
  /**
   * Indicates what color schema you want to render in your dialog.
   */
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary';
  /**
   * Defines the indents (margins and paddings) of the dialog content.
   * `alternative-indents`: Alternative margins and paddings.
   * `primary-indents`: Primary indents schema.
   */
  @Prop() indents: 'primary-indents' | 'alternative-indents';

  render() {
    return (
      <div
        class={[
          'se-dialog-content',
          this.option === 'fill' ? 'full-content' : '',
          this.indents === 'alternative-indents' ? 'alternative-indents' : '',
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
