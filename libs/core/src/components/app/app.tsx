import {
  Component,
  h,
  Prop,
  Host,
  Watch,
  Event,
  EventEmitter,
  State,
} from '@stencil/core';
@Component({
  tag: 'se-app',
  styleUrl: 'app.scss',
  shadow: false,
})
export class AppComponent {
  prefersDark;

  /**
   * Define the type of application. updating the option will impact the font used.
   * - `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`.
   * - `website` or `dcx`: For `se.com` application, the font used will be `Arial Rounded`.
   */
  @Prop() option: 'technical' | 'website' | 'dcx' = 'technical';

  /**
   * Define if the content of the page should scroll with the header (useful on website context).
   * The header can then have the style sticky to stay in the top of the page if needed.
   */
  @Prop() pageScroll: boolean;

  /**
   * Define the them of application. Update the `--se-` css variables of the application.
   * - `light`: light mode of the design.
   * - `dark`: dark mode of the application.
   * - `auto`: Will match the OS configuration
   */
  @Prop() theme: 'light' | 'dark' | 'auto' = 'light';
  @Watch('theme') themeDidChange() {
    switch (this.theme) {
      case 'auto':
        if (this.prefersDark) {
          this.toggleDarkTheme(this.prefersDark.matches);
        }
        break;
      case 'dark':
        this.dark();
        break;
      default:
        this.light();
    }
  }

  @State() classTheme: string;

  light() {
    this.themeChanged.emit('light');
    this.classTheme = 'isLight';
    document.body.classList.remove('se-theme-dark');
  }
  dark() {
    this.themeChanged.emit('dark');
    this.classTheme = 'isDark';
    document.body.classList.add('se-theme-dark');
  }

  @Event() themeChanged: EventEmitter;

  updateBodyClass(newClass) {
    // Update the body class to make sure all component affected by the framework are affected by the font family
    if (document?.body) {
      // Remove the class if already there
      ['se-font-technical', 'se-font-website'].forEach(classItem => {
        document.body.classList.remove(classItem);
      });
      // Add the new class
      document.body.classList.add(newClass);
    }
  }

  componentWillLoad() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Add listener for future change
    this.prefersDark.addListener(mediaQuery =>
      this.toggleDarkTheme(mediaQuery.matches)
    );

    // toggle theme the first time
    this.themeDidChange();
  }

  componentWillUnload() {
    if (this.prefersDark) {
      this.prefersDark.removeListener();
    }
  }

  toggleDarkTheme(shouldAdd) {
    if (this.theme === 'auto') {
      shouldAdd ? this.dark() : this.light();
    }
  }

  render() {
    const bodyClass =
      this.option === 'technical' ? 'se-font-technical' : 'se-font-website';
    this.updateBodyClass(bodyClass);
    return (
      <Host
        class={{
          'se-app-body': !this.pageScroll,
          [bodyClass]: true,
          [this.classTheme]: true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
