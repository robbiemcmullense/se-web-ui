import { Component, Prop, Element, State } from "@stencil/core";

@Component({
  tag: "se-header",
  styleUrl: "header.scss"
})
export class HeaderComponent {
  /**
   * Title of the application
   */
  @Prop() appTitle: string;

  /**
   * domain define the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed
   */
  @Prop() domain: string = "ecostruxure";

  @Element() el: HTMLElement;
  @State() hasMenu: boolean;
  elLeftNav;

  async componentDidLoad() {
    this.elLeftNav = this.el.querySelector("se-sidenav");
    this.hasMenu = !!this.elLeftNav;
  }

  onClickMenu() {
    this.elLeftNav.toggle();
  }

  getFullTitle() {
    const titleArray = this.appTitle.split(" ");
    const last = titleArray.pop();
    const first = titleArray.join(" ");
    return {
      first,
      last
    };
  }

  render() {
    const { first, last } = this.getFullTitle();
    let domain;
    if ( this.domain.toLowerCase() === `ecostruxure`) {
      domain = <se-icon-ecostruxure class="header-title-type" />
    } else if (this.domain.toLowerCase() !== 'none') {
      domain = <span class="header-title-type">{this.domain}</span>
    }
    return (
      <header class="header-container">
        <div class="d-flex">
          {this.hasMenu && (
            <i class="se-icon menu-sidenav" onClick={() => this.onClickMenu()}>
              burger_menu
            </i>
          )}
          <div class="d-flex-column">
            {domain}
            <h1 class="header-title">
              <span class="font-regular">{first}</span>
              <span class="font-lighter">&nbsp;{last}</span>
            </h1>
          </div>{" "}
        </div>

        <div id="fill-space center-header-container">
          <slot />
        </div>
        <div class="padding-container user-icon-wrapper">
          <slot name="user" />
        </div>
        <div class="padding-container link-container">
          <slot name="end" />
          <se-icon-schneider class="header-title-type" />
        </div>
      </header>
    );
  }
}
