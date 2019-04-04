import { Component, Prop } from "@stencil/core";
import { getFullTitle } from "../../utils/utils";
import { AppInfo } from "../appInfo";

@Component({
  tag: "se-authentication",
  styleUrl: "authentication.scss",
  shadow: true
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
   * An external link you would like to provide.
   */
  @Prop() link: string = AppInfo.link;
  /**
   * A logo that you wish to display.
   */
  @Prop() logo: string;
  /**
   * The domain you want to display.  If set to `ecostruxture`, it renders an EcoStruxure icon.
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
   * If set to `true`, hides the authentication screen.
   */
  @Prop() hide: boolean = false;

  hostData() {
    return {
      'class': {
        'hide': this.hide
      }
    };
  }

  renderAuthentication() {
    var title = getFullTitle(this.appTitle);
    let domain;
    if ( this.domain.toLowerCase() === `ecostruxure`) {
      domain = <se-icon-ecostruxure size="medium" />
    } else if (this.domain.toLowerCase() !== 'none') {
      domain = <span class="header-title-type">{this.domain}</span>
    }
    return (
      <div class="content-wrapper">
        <div class="image-container">
          <img class="image-background" style={{'backgroundImage': this.imageUrl}} />
        </div>

        <main>
          <div class="green-bars">
            <div class="dark-green-bar" />
            <div class="light-green-bar" />
          </div>
        </main>

        <div class="login-container">
          <div class="information">
            {domain}
            <h1 class="header-title">
              <span>{title.first}</span>
              <span class="light">&nbsp;{title.last}</span>
            </h1>
            <p class="version">version {this.version}</p>
          </div>
          <div class="form">
            <slot />
          </div>
        </div>

        <footer>
          <div class="copyright-note">
            <span>{this.copyright}</span>
          </div>

          <div class="footer-logo align-end">
            <se-icon-lifeison></se-icon-lifeison>
          </div>
        </footer>
      </div>
    );
  }

  render(){
    return !this.hide && this.renderAuthentication()
  }
}
