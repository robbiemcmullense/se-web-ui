import { Component, Element, h, State } from "@stencil/core";

@Component({
  tag: "se-breadcrumb",
  styleUrl: "breadcrumb.scss",
  shadow: true
})
export class BreadcrumbComponent {
  @Element() el: HTMLElement;
  @State() items: HTMLElement[] = [];
  observer: any;

  updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-breadcrumb-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
    });
  }

  watchItemList() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.updateLastItem();
        }
      });
    });
    this.observer.observe(this.el, {childList: true});
  }

  componentWillLoad() {
    this.updateLastItem();
    this.watchItemList();
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol>
          <slot></slot>
        </ol>
      </nav>
    )
  }
}
