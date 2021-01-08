import { Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
  tag: 'se-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class LinkComponent {
  @Element() el: HTMLElement;

  /**
   * Defines the url the user should get redirected to when clicking on the link.
   */
  @Prop() url: string;
  /**
   * Determines whether or not the link is disabled.
   */
  @Prop() disabled: boolean;

  /**
   * Determines whether it's a download link or a url.
   */
  @Prop() download: boolean;

  /**
   * Adds visual and function properties to your link component.
   * The default setting is `internal`, which redirects you to the specified URL in the same page.
   * The `external` setting adds an underline and ">" icon to the link, and opens the link in a new web browser tab.
   */
  @Prop() option: 'internal' | 'external' = 'internal';

  render() {
    return (
      <Host onClick={() => this.el.blur()}>
        <a
          href={this.url}
          data-disabled={this.disabled}
          class={this.option === 'external' ? 'external' : ''}
          target={this.option === 'external' ? '_blank' : ''}
          download={this.download}
        >
          <slot />
        </a>
      </Host>
    );
  }
}
