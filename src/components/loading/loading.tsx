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
    return (
      <span class="se-loading se-icon">spinner</span>
    );
  }
}
