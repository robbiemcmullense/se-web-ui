import { Component, h, Prop } from "@stencil/core";
import { getFullTitle, getFullCopyright } from "../../utils/utils";
import { AppInfo } from "../appInfo";

@Component({
  tag: "se-about",
  styleUrl: "about.scss",
  shadow: true
})
export class AboutComponent {
  /**
   * The title of your about screen.
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
   * The domain you want to display.  If set to `ecostruxure`, it renders an EcoStruxure icon.
   */
  @Prop() domain: string = AppInfo.domain;
  /**
   * The copyright you would like to display.
   */
  @Prop() copyright: string = AppInfo.copyright;
  /**
   * Sets the background image for your about page.
   */
  @Prop() imageUrl: string;

  render() {
    var title = getFullTitle(this.appTitle);
    var fullCopyright = getFullCopyright(this.copyright);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = <se-icon-ecostruxure size="medium" color="inherited"></se-icon-ecostruxure>;
    } else if (this.domain.toLowerCase() !== "none") {
      domain = <span class="header-title-type">{this.domain}</span>;
    }
    return [
      <div class="image-container">
        <div class="image-background" style={{ backgroundImage: this.imageUrl }}/>
      </div>,
      <div class="about-section-wrapper">
        <div class="information">
          {domain}
          <h1 class="header-title">
            <span>{title.first}</span>
            <span class="light">&nbsp;{title.last}</span>
          </h1>
          <p class="version">Version {this.version}</p>
          <slot name="custom-info"></slot>
          <div class="copyright-info-first">{fullCopyright.first}</div>
          <div class="copyright-info-last">{fullCopyright.last}</div>
        </div>
      </div>
    ];
  }
}