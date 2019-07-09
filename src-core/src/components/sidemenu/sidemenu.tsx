import {Component, h, Method, Element, State, Prop} from '@stencil/core';

const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';

@Component({
  tag: 'se-sidemenu',
  styleUrl: 'sidemenu.scss',
  shadow: true
})
export class SidemenuComponent {
  backdropEl?: HTMLElement;
  menuInnerEl?: HTMLElement;
  @Element() el: HTMLElement;

  @State() open: boolean = false;
  @State() items: HTMLElement[] = [];
  @State() selectedItem?: HTMLElement;

  /**
   * Defines the text displayed in the header of the Sidemenu.
   * The default value is `Menu`.
   */
  @Prop() label: string = 'Menu';

  @Method()
  async toggle() {
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
      if (this.selectedItem && !this.selectedItem.childElementCount) {
        this.selectedItem = undefined;
        this.items.forEach((item: any) => {
          item.active = false;
        });
      }
    }
  }

  async componentWillLoad() {
    this.items = Array.from(this.el.querySelectorAll('se-sidemenu-item'));
  }

  async componentWillUpdate() {
    this.items = Array.from(this.el.querySelectorAll('se-sidemenu-item'));
  }

  componentDidUnload() {
    this.items.length = 0;
    this.selectedItem = undefined;
  }

  noSelectedItem(){
    return !this.items.find( x => x === this.selectedItem)
  }

  private setActive(item: any): void {
    if (this.menuInnerEl) {
      this.menuInnerEl.style.width = !item.childElementCount ? '250px' : '80%';
    }
    if (this.items.length) {
      this.items.forEach((item: any) => {
        item.active = false;
      });
      setTimeout(() => {
        item.active = true;
        this.selectedItem = item;
      }, 100)
    }
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
        <se-list-item class={{'hide-nav-icon': !item.childElementCount}} option="nav" onClick={() => this.setActive(item)} selected={item.active} item={item.item}/>,
      ]
    })
  }

  render() {
    return [
      <div class="menu-background animated" onClick={() => this.toggle()} ref={el => this.backdropEl = el}/>,
      <div class="actual-menu animated full-content d-flex-column flex" ref={el => this.menuInnerEl = el}>
        <div class="d-flex-center">
          <div class="d-flex-center flex">
            <span class="menu-sidenav" onClick={() => this.toggle()}>
              <se-icon size="large">test_results_nok</se-icon>
            </span>
            <h3 class="header-title">{this.label}</h3>
          </div>
        </div>
        <se-divider/>
        <div class="d-flex flex">
          <div class="listNavItems">
            <se-list option="nav">
              {this.renderList()}
            </se-list>
            <se-icon-lifeison color="standard"/>
          </div>
          <se-divider option="vertical"></se-divider>
          <se-block>
            <slot />
          </se-block>
        </div>
      </div>
    ]
  }
}
