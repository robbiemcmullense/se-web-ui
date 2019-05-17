import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-link',
  styleUrl: 'link.scss',
  shadow: true
})
export class LinkComponent {
  /**
   * Defines the url the user should get redirected to when clicking on the link.
   */
  @Prop() url: string;
  /**
   * Determines whether or not the link is disabled.
   */
  @Prop() disabled: boolean;
  /**
   * Default setting is `internal`.
   * The `external` setting adds an underline to the link, and opens the link in a new web browser tab.
   */
  @Prop() type: 'internal' | 'external' = 'internal';

  render() {
    return (
      <a href={this.url}
        data-disabled={this.disabled}
        class={this.type == 'external' ? 'external' : ''}
        target={this.type == 'external' ? '_blank' : ''}><slot/></a>
    )
  }
}