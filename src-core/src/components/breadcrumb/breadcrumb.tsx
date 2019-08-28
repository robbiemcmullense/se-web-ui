import { Component, Element, h, State } from "@stencil/core";

@Component({
  tag: "se-breadcrumb",
  styleUrl: "breadcrumb.scss",
  shadow: true
})
export class BreadcrumbComponent {
  @Element() el: HTMLElement;
  listEl?: HTMLElement;
  @State() items: HTMLElement[] = [];
  observer: any;

  private updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-breadcrumb-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
    });
  }

  private watchItemList() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.updateLastItem();
        }
      });
    });
    // assign mutation observer for all browsers that use Shadow DOM
    if (navigator.userAgent.indexOf('Edge') === -1) {
      this.observer.observe(this.el, {childList: true});
    }
  }

  componentWillLoad() {
    this.updateLastItem();
    this.watchItemList();
  }

  componentDidLoad() {
    // assign mutation observer for MS Edge, as it uses polyfills instead of Shadow DOM
    if (navigator.userAgent.indexOf('Edge') > -1) {
      this.observer.observe(this.listEl, {childList: true});
    }
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol ref={el => this.listEl = el}>
          <slot></slot>
        </ol>
      </nav>
    )
  }
}