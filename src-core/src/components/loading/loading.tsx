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
  /**
   * Define the visual display of the loader.
   * `standard` is the default option, and displays a spinning green circle.
   * `dialog` gives the loading icon a look-and-feel that it's within a popup dialog box.
   */
  @Prop() option: 'standard' | 'dialog' = 'standard';

  render() {
    return (
      <Host class={{'show': this.loading}}>
        <div class="loading-wrapper">
          <div class={["se-loading", this.option].join(' ')}>
            <div class="se-icon">spinner</div>
          </div>
        </div>
        <div class="loading-background"></div>
      </Host>
    )
  }
}