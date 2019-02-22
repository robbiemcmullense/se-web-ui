import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'se-link',
  styleUrl: 'link.scss',
  shadow: true
})
export class LabelComponent {
  /**
   * Defines the url the user should get redirected to when clicking on the link.
   */
  @Prop() url: string;
  /**
   * Defines the text to be displayed in your link.
   */
  @Prop() link: string;
  /**
   * Determines whether or not the link is disabled.
   */
  @Prop({mutable: true}) disabled: boolean;
  /**
   * Set to `internal` (default setting) if the url is within your application.
   * Set to `external` if the url is outside your application, adding an underline to the link.
   */
  @Prop() type: 'internal' | 'external' = 'internal';

  render() {
    return (
      <a href={this.url} data-disabled={this.disabled} class={this.type == 'external' ? 'external' : ''}>{this.link}</a>
    )
  }
}
