import { Component, Element, h, State, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'se-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class BreadcrumbComponent {
  observer: any;
  @Element() el: HTMLElement;
  @State() items: HTMLElement[] = [];

  /**
   * Indicates whether or not the last breadcrumb item should be selectable. The default setting is `false`.
   */
  @Prop() canSelectLast = false;
  @Watch('canSelectLast') canSelectLastChanged() {
    this.updateLastItem();
  }

  updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-breadcrumb-item'));
    this.items.forEach((item: any) => {
      item.isLast = item === this.items[this.items.length - 1];
      item.canSelect = item.isLast ? this.canSelectLast : true;
    });
  }

  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.updateLastItem();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }

  componentWillLoad() {
    this.updateLastItem();
    this.watchItemList();
  }

  componentWillUnload() {
    this.observer.disconnect();
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol>
          <slot></slot>
        </ol>
      </nav>
    );
  }
}
