import { Component, h, Host, Prop } from '@stencil/core';
import spinner from '@se/icons/svg/spinner.svg';

@Component({
  tag: 'se-loading',
  styleUrl: 'loading.scss',
  shadow: true,
})
export class LoadingComponent {
  /**
   * Displays the loading icon on screen when set to `true`.
   */
  @Prop() loading: boolean;
  /**
   * Defines the visual display of the loader.
   * `standard` is the default option, and displays a spinning green circle.
   * `dialog` gives the loading icon a look-and-feel that it is within a popup dialog box.
   */
  @Prop() option: 'standard' | 'dialog' = 'standard';
  /**
   * Defines the color of the loading spinner.
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';

  /**
   * Defines ig there is a dimming overlay effect on behind the loading spinner.
   */
  @Prop() overlay: boolean;

  /**
   * Defines if we want the loading to take the full page of the browser. default the browser will stay in the container.
   */
  @Prop() fullPage: boolean;

  render() {
    return (
      <Host class={{ show: this.loading }}>
        <div
          class={{
            'loading-wrapper': true,
            isFixed: this.fullPage,
            overlay: this.overlay,
          }}
        >
          <div
            class={{
              'se-loading': true,
              [`${this.option}`]: true,
              [`color-${this.color}`]: !!this.color,
            }}
          >
            <div class="loading-icon" innerHTML={spinner}></div>
            <div class="message">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="loading-background"></div>
      </Host>
    );
  }
}
