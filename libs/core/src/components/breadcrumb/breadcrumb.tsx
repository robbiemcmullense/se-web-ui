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

  /**
   * Provides a label that describes the type of navigation for assistive technologies.
   * The default value is `breadcrumb`.
   */
  @Prop() ariaLabel = 'breadcrumb';

  /**
   * Setting allowing to transform breadcrumb into a backlink on screen sizes smaller than specified.
   */
  @Prop() breakpoint: 'tablet' | 'desktop' | 'wide-desktop';

  updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-breadcrumb-item'));
    this.items.forEach((item: any) => {
      item.isLast = item === this.items[this.items.length - 1];
      item.canSelect = item.isLast ? this.canSelectLast : true;
    });
  }

  updateChildMicrodataAttributes() {
    this.items.forEach((item, index) => {
      item.setAttribute('position', (index + 1).toString());
    });
  }

  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.updateLastItem();
          this.updateChildMicrodataAttributes();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }

  componentWillLoad() {
    this.updateLastItem();
    this.watchItemList();
    this.updateChildMicrodataAttributes();
  }

  componentWillUnload() {
    this.observer.disconnect();
  }

  render() {
    return (
      <nav
        aria-label={this.ariaLabel}
        class={this.breakpoint && `backlink--${this.breakpoint}`}
      >
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
          <slot></slot>
        </ol>
      </nav>
    );
  }
}
