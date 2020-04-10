import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'se-tabbar',
  styleUrl: 'tabbar.scss',
  shadow: false
})
export class TabbarComponent {
  /**
   * Defines the function of the tabbar.
   * Default `nav` creates a tab bar that functions as a nav-bar.
   * `content` creates a ta bbar that functions as a content section tab bar.
   */
  @Prop() option: "nav" | "content" = "nav";
  /**
   * Indicates the overflow behavior of your tab bar.
   * Default setting is `scroll`, keeping all tabs in one horizontal row.
   * The `stack` setting allows your tabbar content wrap to new lines.
   * The `compact` setting allows your tabbar content to scroll, but all stack the text together as much as possible.
   */
  @Prop() overflow: "compact" | "stack" | "scroll" = "scroll";
  /**
   * Indicates the color of your tab bar.
   * Default setting is `primary`, rendering a green background for nav-bars and ultra-light-grey-1 for content.
   * The `alternative` setting renders a white background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';

  render() {
    return (
      <Host class={['tabbar', `tab-${this.color}`, "tabbar-d-flex-main", `tabbar-opt-${this.option}`].join(' ')}>
        <div class="tabbar-nav-left-wrapper tabbar-centered">
          <slot name="start" />
        </div>
        <div class={["tabbar-fill-space", "tabbar-nav-center-wrapper", `tabbar-opt-${this.option}`, !!this.overflow ? this.overflow : ''].join(' ')}>
          <slot />
        </div>
        <div class={[`tabbar-tab-end-${this.color}`, `tabbar-opt-end-${this.option}`, "tabbar-centered"].join(' ')}><slot name="end" /></div>
      </Host>
    );
  }
}
