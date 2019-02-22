import { Component, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'se-header',
  styleUrl: 'header.scss'
})
export class HeaderComponent {
  /**
   * Title of the application
   */
  @Prop() appTitle: string;
  @Element() el: HTMLElement;
  @State() hasMenu: boolean
  elLeftNav;

  async componentDidLoad() {
    this.elLeftNav = this.el.querySelector('se-sidenav');
    this.hasMenu = !!this.elLeftNav;
  }

  onClickMenu() {
    this.elLeftNav.toggle();
  }

  getFullTitle() {
    const titleArray = this.appTitle.split(' ');
    const last = titleArray.pop();
    const first = titleArray.join(' ');
    return {
      first,
      last
    }
  }

  render() {
    const { first, last} = this.getFullTitle();
    return (
      <header class="header-container">
        <div class="d-flex">
          { this.hasMenu? <i class="se-icon menu-sidenav" onClick={() => this.onClickMenu()} >burger_menu</i> : ''}
          <div class="d-flex-column">
            <i class="header-title-type se-icon">logo_Ecostruxure</i>
            <h1 class="header-title">
              <span class="font-regular">{first}</span>
              <span class="font-lighter">&nbsp;{last}</span>
            </h1>
          </div>
        </div>
        <div id="fill-space center-header-container">
          <slot></slot>
        </div>
        <div class="padding-container user-icon-wrapper">
          <slot name="user"></slot>
        </div>
        <div class="padding-container link-container">
          <slot name="end"></slot>
          <se-icon-schneider class="header-title-type"></se-icon-schneider>
        </div>
      </header>
    );
  }
}
