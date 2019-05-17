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

  render() {
    return (
      <nav class={[this.color, "d-flex-main"].join(' ')}>
        <div class="nav-left-wrapper centered">
          <slot name="start" />
        </div>
        <div class="fill-space nav-center-wrapper">
          <slot />
        </div>
        <div class="centered">
          <slot name="end" />
        </div>
      </nav>
    );
  }
}