import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-tabbar',
  styleUrl: 'tabbar.scss',
  shadow: false
})
export class TabbarComponent {
  /**
   * Defines the function of the tabbar.
   * Default `nav` creates a tabbar that functions as a nav-bar.
   * `content` creates a tabbar that functions as a content section tabbar.
   */
  @Prop() option: "nav" | "content"  = "nav";
  /**
   * Indicates the color of your tabbar.
   * Default setting is `primary`, rendering a green background.
   * The `alternative` setting renders a white background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
  /**
   * Defines the inner appearance of a tabbar.
   * `fill` is the default display, taking the full space of the tabbar.
   * `centered` centers the tabbar so the content does not exceed a maximum width (1070px by default).
   */
  @Prop() display: "fill" | "centered"  = "fill";

  render() {
    return (
      <div class={[`tab-${this.color}`, `opt-${this.option}`].join(' ')}>
        <div class={["d-flex-main", `dis-${this.display}`, `opt-${this.option}`].join(' ')}>
          <div class={["nav-left-wrapper", "centered", `${this.option === "nav" ? "shadowed" : ''}`].join(' ')}>
            <slot name="start" />
          </div>
          <div class={["fill-space", "nav-center-wrapper", `${this.option === "nav" ? "shadowed" : ''}`].join(' ')}>
            <slot />
          </div>
          {this.option === "nav" ? <div class="centered shadowed"><slot name="end" /></div> : ''}
        </div>
      </div>
    );
  }
}