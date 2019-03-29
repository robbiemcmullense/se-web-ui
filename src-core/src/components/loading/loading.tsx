import { Component, Prop } from '@stencil/core';

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

  hostData() {
    return {
      class: this.loading && 'show'
    }
  }

  render() {
    return [
      <div class="loading-wrapper">
        <div class="se-loading">
          <div class="se-icon">spinner</div>
        </div>
      </div>,
      <div class="loading-background"></div>
    ];
  }
}
