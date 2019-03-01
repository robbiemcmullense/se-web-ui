import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'se-navbar',
  styleUrl: 'navbar.scss',
  shadow: false
})
export class NavbarComponent {
  @Prop() color: 'primary' | 'alternative' = 'primary';

  render() {
    return (
      <nav class={[this.color, "d-flex-main"].join(' ')}>
        <div class="nav-left-wrapper">
          <slot name="start" />
        </div>
        <div class="fill-space nav-center-wrapper">
          <slot />
        </div>
        <div class="nav-right-wrapper">
          <slot name="end" />
        </div>
      </nav>
    );
  }
}
