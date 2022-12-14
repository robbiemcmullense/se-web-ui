import { Component, h, Prop } from '@stencil/core';
import { getFullTitle } from '../../utils/utils';
import { AppInfo } from '../appInfo';

@Component({
  tag: 'se-authentication',
  styleUrl: 'authentication.scss',
  shadow: true,
})
export class AuthenticationComponent {
  /**
   * The title of your authentication screen.
   */
  @Prop() appTitle: string;
  /**
   * The version number you want to display.
   */
  @Prop() version: string;
  /**
   * The domain you want to display.  If set to `ecostruxure`, it renders an EcoStruxure icon.
   */
  @Prop() domain: string = AppInfo.domain;
  /**
   * The copyright you would like to display.
   */
  @Prop() copyright: string = AppInfo.copyright;
  /**
   * Sets the background image for your authentication screen.
   */
  @Prop() imageUrl: string;
  /**
   * If set to `true`, this will hide the authentication screen.
   */
  @Prop() hide = false;

  renderAuthentication() {
    const title = getFullTitle(this.appTitle);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = <se-icon-ecostruxure size="medium"></se-icon-ecostruxure>;
    } else if (this.domain.toLowerCase() !== 'none') {
      domain = <span>{this.domain}</span>;
    }
    return (
      <div class="content-wrapper">
        <div class="image-container">
          <img
            class="image-background"
            style={{ backgroundImage: this.imageUrl }}
          ></img>
        </div>
        <main>
          <div class="green-bars">
            <div class="dark-green-bar"></div>
            <div class="light-green-bar"></div>
          </div>
        </main>
        <div class="login-container">
          <div class="information">
            {domain}
            <h1 class="header-title">
              {title.first}
              <span class="light">&nbsp;{title.last}</span>
            </h1>
            <p>version {this.version}</p>
          </div>
          <div class="form">
            <slot></slot>
          </div>
        </div>
        <footer>
          <div class="copyright-note">
            <span>{this.copyright}</span>
          </div>
          <div class="footer-logo">
            <se-icon-lifeison></se-icon-lifeison>
          </div>
        </footer>
      </div>
    );
  }

  render() {
    return (
      <div class={['se-authentication', this.hide ? 'hide' : ''].join(' ')}>
        {!this.hide ? this.renderAuthentication() : ''}
      </div>
    );
  }
}
