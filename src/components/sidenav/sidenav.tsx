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

  @Method()
  toggle(): void {
    console.log('toggle')
    this.open = !this.open;
  }

  async componentDidUpdate() {
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

  render() {
    return [
      <div class="menu-background animated" onClick={() => this.toggle()}  ref={el => this.backdropEl = el}></div>,
      <div class="actual-menu animated" ref={el => this.menuInnerEl = el}>
        <slot />
      </div>
    ]
  }
}
