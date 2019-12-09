import { Component, h, Prop } from '@stencil/core';

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
  @Prop() option: "nav" | "content"  = "nav";
  /**
   * Indicates the color of your tab bar.
   * Default setting is `primary`, rendering a green background for nav-bars and ultra-light-grey-1 for content.
   * The `alternative` setting renders a white background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';

  render() {
    return (
      <div class={[`tab-${this.color}`, `opt-${this.option}`].join(' ')}>
        <div class={["d-flex-main", `opt-${this.option}`].join(' ')}>
          <div class={["nav-left-wrapper", "centered"].join(' ')}>
            <slot name="start" />
          </div>
          <div class={["fill-space", "nav-center-wrapper", `opt-${this.option}`].join(' ')}>
            <slot />
          </div>
          <div class={["centered"].join(' ')}><slot name="end" /></div>
        </div>
      </div>
    );
  }
}