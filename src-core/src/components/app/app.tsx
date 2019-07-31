import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class AppComponent {

  /**
   * Define the type of application. updating the option will impact the font used.
   * - `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`.
   * - `website`: For `se.com` application, the font used will be `Arial Rounded`.
   */
  @Prop() option: 'technical' | 'website' = 'technical';

  render() {
    return <div class={['se-app-body', this.option === "website" ? 'se-font-website' : 'se-font-technical'].join(' ')}><slot></slot></div>;
  }
}
