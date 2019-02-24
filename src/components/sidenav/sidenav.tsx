import { Component, Method, Element, State } from '@stencil/core';


const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';

@Component({
  tag: 'se-sidenav',
  styleUrl: 'sidenav.scss',
  shadow: true
})
export class SidenavComponent {
  backdropEl?: HTMLElement;
  menuInnerEl?: HTMLElement;
  @Element() el: HTMLElement;

  @State() open: boolean = false;
  @State() items: HTMLElement[] = [];
  @State() selectedItem?: HTMLElement;

  @Method()
  toggle(): void {
    this.open = !this.open;
    if (this.open) {
      // Add css classes
      this.el.classList.add(SHOW_MENU);
      this.addAnimation(null);
    } else {
      // Remove css classes
      this.removeAnimation(() => {
        this.el.classList.remove(SHOW_MENU);
      });

    }
  }

  async componentWillLoad() {
    this.items = Array.from(this.el.querySelectorAll('se-sidenav-item'));
  }

  componentDidLoad() {
    this.initSelect();
  }

  componentDidUnload() {
    this.items.length = 0;
    this.selectedItem = undefined;
  }

  private async initSelect(): Promise<void> {
    if(!this.selectedItem) {
      this.setActive(this.items[0]);
    }
  }

  private setActive(item: any): void {
    this.items.forEach((item: any) => {
      item.active = false;
    })
    item.active = true;
    this.selectedItem = item;
  }

  private addAnimation(callback) {
    this.menuInnerEl.classList.add(SHOW_MENU);
    this.backdropEl.classList.add(SHOW_MENU);
    setTimeout(() => {
      this.menuInnerEl.classList.remove(SHOW_MENU);
      this.backdropEl.classList.remove(SHOW_MENU);
      callback && callback();
    }, 500);
  }

  private removeAnimation(callback) {
    this.menuInnerEl.classList.add(HIDE_MENU);
    this.backdropEl.classList.add(HIDE_MENU);
    setTimeout(() => {
      this.menuInnerEl.classList.remove(HIDE_MENU);
      this.backdropEl.classList.remove(HIDE_MENU);
      callback && callback();
    }, 500);
  }

  renderList() {
    return this.items.map((item: any) => {
      return [
        <se-list-item onClick={() => this.setActive(item)} selected={item.active} item-title={item.itemTitle}></se-list-item>,
      ]
    })
  }

  render() {
    return [
      <div class="menu-background animated" onClick={() => this.toggle()}  ref={el => this.backdropEl = el}></div>,
      <div class="actual-menu animated full-content d-flex-column flex" ref={el => this.menuInnerEl = el}>
          <div class="d-flex-center">
            <div class="d-flex-center flex">
              <span class="menu-sidenav" onClick={() => this.toggle()}>
                <se-icon size="large" color="primary">test_results_nok</se-icon>
              </span>
              <h3 class="header-title">Menu</h3>
            </div>
            <se-chip color="primary" can-close="false" value="https://schneider-electric.com"></se-chip>
          </div>
          <se-divider></se-divider>
          <div class="d-flex flex">
            <div class="listNavItems">
              <se-list mode="nav">
                {this.renderList()}
              </se-list>
              <img class="image-logo" alt="Schneider electric logo"/>
            </div>
            <se-divider mode="vertical"></se-divider>
            <div class="flex">
                <slot />
            </div>
          </div>
      </div>
    ]
  }
}
