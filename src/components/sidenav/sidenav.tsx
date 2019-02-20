import { Component, Element, Prop } from '@stencil/core';
import { } from 'events';


const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
// const MENU_CONTENT_OPEN = 'menu-content-open';

@Component({
  tag: 'se-sidenav',
  styleUrl: 'sidenav.scss',
  shadow: true
})
export class SidenavComponent {
  backdropEl?: HTMLElement;
  menuInnerEl?: HTMLElement;
  @Element() el: HTMLElement;

  @Prop({mutable: true}) open: boolean = false;

  // @Listen('click', { enabled: false, capture: true })
  // onBackdropClick(ev: any) {
  //   if (this.lastOnEnd < ev.timeStamp - 100) {
  //     const shouldClose = (ev.composedPath)
  //       ? !ev.composedPath().includes(this.menuInnerEl)
  //       : false;

  //     if (shouldClose) {
  //       ev.preventDefault();
  //       ev.stopPropagation();
  //       this.close();
  //     }
  //   }
  // }

  private beforeAnimation() {
    this.el.classList.add(SHOW_MENU);
    this.backdropEl.classList.add(SHOW_BACKDROP);
    if (this.open) {
      // add css class
      // if (this.contentEl) {
      //   this.contentEl.classList.add(MENU_CONTENT_OPEN);
      // }
    } else {
      // remove css classes
      this.el.classList.remove(SHOW_MENU);
      // if (this.contentEl) {
      //   this.contentEl.classList.remove(MENU_CONTENT_OPEN);
      // }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
    }
  }

  render() {
    this.beforeAnimation();
    return [
      <div class="sidenav-scrim"  ref={el => this.backdropEl = el}></div>,
      <div class="sidenav-content" ref={el => this.menuInnerEl = el}>
        <slot></slot>
      </div>
    ];
  }
}
