import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'se-loading',
  styleUrl: 'loading.scss',
  shadow: true
})
export class LoadingComponent {
  /**
   * Displays the loading icon on screen when set to `true`.
   */
  @Prop() loading: boolean;

  render() {
    return [
      <Host class={{'show': this.loading}}/>,
      <div class="loading-wrapper">
        <div class="se-loading">
          <div class="se-icon">spinner</div>
        </div>
      </div>,
      <div class="loading-background"></div>
    ];
  }
}