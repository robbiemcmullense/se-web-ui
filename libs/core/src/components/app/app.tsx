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

const listDark = [
  { name: '--se-background-standard', value: '#505559' },
  { name: '--se-background-standard-contrast', value: '#ffffff' },
  { name: '--se-background-alternative', value: '#293133' },
  { name: '--se-background-alternative-contrast', value: '#ffffff' },
  { name: '--se-alternative', value: '#293133' },
  { name: '--se-alternative-contrast', value: '#ffffff' },
  { name: '--se-alternative-hover', value: '#434B4D' },
  { name: '--se-alternative-selected', value: '#5C6466' },
  { name: '--se-standard', value: '#CBCBCB' },
  { name: '--se-standard-contrast', value: '#333333' },
  { name: '--se-standard-hover', value: '#B2B2B2' },
  { name: '--se-standard-selected', value: '#989898' },
  { name: '--se-information', value: '#42B4E6' },
  { name: '--se-shadow', value: '#10181A' },
  { name: '--se-divider', value: '#494B50' },
  { name: '--se-border', value: '#626469' },
  { name: '--se-border-focus', value: '#626469' },
  { name: '--se-overlay', value: 'rgba(255,255,255,0.4)' },
  { name: '--se-overlay-loading', value: 'rgba(0,0,0,0.2)' },
];
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
   * Define the them of application. Update the `--se-` css variables of the application.
   * - `light`: light mode of the design.
   * - `dark`: dark mode of the application.
   * - `auto`: Will match the OS configuration
   */
  @Prop() theme: 'light' | 'dark' | 'auto' = 'light';
  @Watch('theme') themeDidChange() {
    switch (this.theme) {
      case 'auto':
        this.prefersDark && this.toggleDarkTheme(this.prefersDark.matches);
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
    const root = document.documentElement;
    listDark.forEach(item => {
      root.style.removeProperty(item.name);
    });
    this.themeChanged.emit('light');
    this.classTheme = 'isLight';
  }
  dark() {
    const root = document.documentElement;
    listDark.forEach(item => {
      root.style.setProperty(item.name, item.value);
    });
    this.themeChanged.emit('dark');
    this.classTheme = 'isDark';
  }

  @Event() themeChanged: EventEmitter;

  updateBodyClass(newClass) {
    // Update the body class to make sure all component affected by the framework are affected by the font family
    if (document && document.body) {
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
    this.prefersDark && this.prefersDark.removeListener();
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
      <Host class={['se-app-body', bodyClass, this.classTheme].join(' ')}>
        <slot></slot>
      </Host>
    );
  }
}
