import { Component, h, Element, Prop, Host, State } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';
import arrow from '@se/icons/svg/arrow5_step.svg';

@Component({
  tag: 'se-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class Carousel {
  @Element() el: HTMLElement;
  contentEl: HTMLElement;
  /**
   * minimum width of the carousel item. The number of item displayed will be based on it.
   */
  @Prop() itemMinWidth = 275;
  /**
   * boolean value to show left arrow
   */
  @State() showLeftArrow: boolean;
  /**
   * boolean value to show right arrow
   */
  @State() showRightArrow: boolean;

  /**
   * Show a hint of the next item if more item to be seen. if 0, then no hint will be displayed. default is 75.
   */
  hintWidth = 40;
  size: 'small' | 'nano' | 'medium' | 'large' = 'small';
  ro: ResizeObserver;
  itemWidth = 0;
  minOffset = 10;

  constructor() {
    this.onScroll = this.onScroll.bind(this);
  }

  private onScroll() {
    this.displayArrow();
  }

  componentDidLoad() {
    // Make a first render of the UI
    this.calculateWidth();
    this.displayArrow();

    this.ro = new ResizeObserver(_ => {
      // Observe any changes in the width container
      this.calculateWidth();
      this.displayArrow();
    });
    if (this.ro) {
      this.ro.observe(this.el);
    }

    this.contentEl.addEventListener('scroll', this.onScroll);

    this.size = window.matchMedia('(hover: none) and (pointer: coarse)').matches
      ? 'medium'
      : 'small';
  }

  calculateWidth() {
    const { offsetWidth } = this.el;

    if (!this.hintWidth) {
      // No need to know how many item there is
      this.setItemWidth(offsetWidth);
    } else {
      // We need to calculate it without the hint, we can fit enough items
      const nbItem = Array.from(this.el.querySelectorAll('se-carousel-item'))
        .length;
      if (offsetWidth / nbItem > this.itemMinWidth) {
        // All item can fit, we don't need the hint
        this.setItemWidth(offsetWidth);
      } else {
        // we calculate the item width based on the hint width
        this.setItemWidth(offsetWidth - this.hintWidth);
      }
    }
  }

  setItemWidth(widthContainer) {
    this.itemWidth =
      widthContainer /
      Math.max(1, Math.floor(widthContainer / this.itemMinWidth));

    this.el.style.setProperty(
      '--se-carousel-item-width',
      `${this.itemWidth}px`
    );
  }

  displayArrow() {
    const { offsetWidth, scrollWidth, scrollLeft } = this.contentEl;
    const showArrow = offsetWidth < scrollWidth;
    const errorMargin = 20; // Add 10px in case we only few px off and we don't want to show the arrow
    this.showLeftArrow = scrollLeft > errorMargin;
    this.showRightArrow =
      showArrow && offsetWidth + scrollLeft < scrollWidth - errorMargin;
  }

  scroll(delta: number) {
    this.contentEl.scrollBy({
      left: delta * this.itemWidth,
      behavior: 'smooth',
    });
  }

  disconnectedCallback() {
    if (this.ro) {
      this.ro.disconnect();
    }
    this.contentEl.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <Host>
        {this.showLeftArrow && (
          <se-icon
            class="arrow left"
            onClick={() => this.scroll(-1)}
            size={this.size}
            mirror="horizontal"
          >
            <span innerHTML={arrow}></span>
          </se-icon>
        )}

        <div class="content" ref={el => (this.contentEl = el)}>
          <slot></slot>
        </div>

        {this.showRightArrow && (
          <se-icon
            class="arrow right"
            option="button"
            onClick={() => this.scroll(1)}
            size={this.size}
          >
            <span innerHTML={arrow}></span>
          </se-icon>
        )}
      </Host>
    );
  }
}
