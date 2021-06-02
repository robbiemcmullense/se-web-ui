import { Component, h, Prop, Element, State } from '@stencil/core';
import { getFullTitle } from '../../utils/utils';
import { AppInfo } from '../appInfo';
import burgerMenu from '@se/icons/svg/burger_menu.svg';

@Component({
  tag: 'se-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class HeaderComponent {
  @Element() el: HTMLElement;
  /**
   * Sets the title of your application.
   */
  @Prop() appTitle = '';
  /**
   * Defines the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed.
   */
  @Prop() domain: string = AppInfo.domain;
  /**
   * Defines the project name (useful for small projects) that can be used for versioning as well. It will be placed at the right side of the title.
   */
  @Prop() project: string;

  /**
   * to remove the "Schneider electric" logo at the end of the header.
   */
  @Prop() hideSeLogo: boolean;

  @State() hasMenu: boolean;
  elLeftNav;

  onClickMenu() {
    this.elLeftNav.toggle();
  }

  async componentWillLoad() {
    this.elLeftNav = this.el.querySelector('se-sidemenu');
    this.hasMenu = !!this.elLeftNav;
  }

  render() {
    const title = getFullTitle(this.appTitle);
    let domain;
    if (this.domain.toLowerCase() === `ecostruxure`) {
      domain = <se-icon-ecostruxure class="header-title-type" />;
    } else if (this.domain.toLowerCase() !== 'none') {
      domain = <span class="header-title-type">{this.domain}</span>;
    }
    const hasCustomTitle = !!this.el.querySelector('[slot="title"]');

    return [
      <div class="d-flex">
        {this.hasMenu ? (
          <span class="menu-sidenav" onClick={() => this.onClickMenu()}>
            <se-icon size="medium" color="primary">
              <span innerHTML={burgerMenu}></span>
            </se-icon>
          </span>
        ) : (
          ''
        )}
        {hasCustomTitle ? (
          <div class="d-flex-column header-title-wrapper">
            <slot name="title" />
          </div>
        ) : (
          <div class="d-flex-column header-title-wrapper">
            {domain}
            <h1 class="header-title no-margin">
              <span>{title.first}</span>
              <span class="light">&nbsp;{title.last}</span>
            </h1>
          </div>
        )}
        {this.project ? (
          <span class="project-section">{this.project}</span>
        ) : (
          ''
        )}
      </div>,
      <div class="padding-container d-flex">
        <slot name="start" />
      </div>,
      <div class="fill-space center-header-container">
        <slot />
      </div>,
      <div class="padding-container d-flex">
        <slot name="end" />
        {!this.hideSeLogo && <se-icon-schneider class="header-title-type" />}
      </div>,
    ];
  }
}
