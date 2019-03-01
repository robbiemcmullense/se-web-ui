import { Component, Prop } from "@stencil/core";
import { getFullTitle } from "../../utils/utils";
import { AppInfo } from "../appInfo";

@Component({
  tag: "se-about",
  styleUrl: "about.scss",
  shadow: true
})
export class AboutComponent {
  @Prop() appTitle: string;
  @Prop() version: string;
  @Prop() link: string = AppInfo.link;
  @Prop() domain: string = AppInfo.domain;
  @Prop() copyright: string = AppInfo.copyright;
  @Prop() imageUrl: string;

  render() {
    var title = getFullTitle(this.appTitle);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = <se-icon-ecostruxure size="medium" />;
    } else if (this.domain.toLowerCase() !== "none") {
      domain = <span class="header-title-type">{this.domain}</span>;
    }
    return (
      <se-widget mode="fill">
        <se-widget-container mode="fill">
          <div class="about-wrapper">
            <div class="image-container">
              <img class="image-background" style={{'backgroundImage': this.imageUrl}} />

            </div>
            <div class="about-section-wrapper">
              <div class="information">
                {domain}
                <h1 class="header-title">
                  <span>{title.first}</span>
                  <span class="light">&nbsp;{title.last}</span>
                </h1>
                <p class="version">version {this.version}</p>
              </div>
              <div class="more-information">
                <div class="background-light" />
                <div class="content-info">
                  <span>{this.copyright}</span>
                </div>
              </div>
            </div>
          </div>
        </se-widget-container>
      </se-widget>
    );
  }
}
