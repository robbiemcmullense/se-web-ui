import { Component, Prop } from "@stencil/core";
import { getFullTitle } from "../../utils/utils";
import { AppInfo } from "../appInfo";

@Component({
  tag: "se-brand",
  styleUrl: "brand.scss",
  shadow: true
})
export class BrandComponent {
  @Prop() appTitle: string;
  @Prop() version: string;
  @Prop() link: string = AppInfo.link;
  @Prop() logo: string;
  @Prop() domain: string = AppInfo.domain;
  @Prop() copyright: string = AppInfo.copyright;
  @Prop() imageUrl: string;
  @Prop() hide: boolean = false;

  hostData() {
    return {
      'class': {
        'hide': this.hide
      }
    };
  }

  //[style.backgroundImage]="imageUrl"
  renderBrand() {
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
            <img src={this.logo} alt="Schneider electric logo" />
          </div>
        </footer>
      </div>
    );
  }

  render(){
    return !this.hide && this.renderBrand()
  }
}
