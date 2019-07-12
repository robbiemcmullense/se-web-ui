import { Component, h, Host, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'se-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class AppComponent {

  @State() font: string = 'se-font-technical';

  /**
   * Define the type of application. updating the option will impact the font used.
   * - `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`.
   * - `marketing`: For `se.com` application, the font used will be `Arial Rounded`.
   */
  @Prop() option: 'technical' | 'marketing' = 'technical';
  @Watch('option') optionDidChange() {
    if(this.option === 'technical'){
      this.font = 'se-font-technical';
    } else {
      this.font = 'se-font-website';
    }
  }

  render() {
    return <Host class={['se-app-body', this.font].join(' ')}><slot></slot></Host>;
  }
}
