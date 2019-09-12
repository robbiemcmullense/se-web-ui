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
   * - `website` or `dcx`: For `se.com` application, the font used will be `Arial Rounded`.
   */
  @Prop() option: 'technical' | 'website' | 'dcx' = 'technical';


  updateBodyClass(newClass){
    // Update the body class to make sure all component affected by the framework are affected by the font family
    if(document && document.body){
      // Remove the class if already there
      ['se-font-technical', 'se-font-website'].forEach(classItem => {
        document.body.classList.remove(classItem)
      })
      // Add the new class
      document.body.classList.add(newClass);
    }
  }

  render() {
    const bodyClass = this.option === "technical" ? 'se-font-technical' : 'se-font-website';

    this.updateBodyClass(bodyClass);

    return <div class={'se-app-body'}><slot></slot></div>;
  }
}
