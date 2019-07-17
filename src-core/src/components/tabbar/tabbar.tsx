import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-tabbar',
  styleUrl: 'tabbar.scss',
  shadow: false
})
export class TabbarComponent {
  /**
   * Indicates the color of your tab bar.
   * Default setting is `primary`, rendering a green background.
   * The `alternative` setting renders a white background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
  /**
   * Defines the inner appearance of a tabbar.
   * `fill` is the default option, taking the full space of the tabbar.
   * `centered` centers the tabbar so the content does not exceed a maximum width (1070px by default).
   */
  @Prop() option: "fill" | "centered"  = "fill";

  render() {
    return (
      <div class={`tab-${this.color}`}>
        <div class={["d-flex-main", `opt-${this.option}`].join(' ')}>
          <div class="nav-left-wrapper centered shadowed">
            <slot name="start" />
          </div>
          <div class="fill-space nav-center-wrapper shadowed">
            <slot />
          </div>
          <div class="centered shadowed">
            <slot name="end" />
          </div>
        </div>
      </div>
    );
  }
}