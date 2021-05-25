import { Component, h, Element, Prop, Host, State } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
import arrow from '@se/icons/svg/arrow5_step.svg';
import { classNames } from '../../utils';
import { isTouchDevice } from '../../utils';

smoothscroll.polyfill();
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
   * configures position of arrows. When `arrowsOverlay` is `false` arrows are positioned outside of component bounds
   */
  @Prop() arrowsOverlay = true;

  /**
   * Show a hint of the next item if more item to be seen. if 0, then no hint will be displayed.
   */
  @Prop() hintWidth = 40;

  /**
   * Configures if pagination dots are shown (https://zeroheight.com/6dbc9efe1/p/045938-pagination/b/934eef)
   */
  @Prop() pagination = false;

  /**
   * boolean value to show left arrow
   */
  @State() showLeftArrow: boolean;
  /**
   * boolean value to show right arrow
   */
  @State() showRightArrow: boolean;

  /**
   * Index of leftmost visible carousel item (set when `pagination` property is true)
   */
  @State() activeIndex = 0;

  /**
   * Number of pagination bullets (set when `pagination` property is true)
   */
  @State() paginationSize = 0;

  @State() isMobile: boolean;

  size: 'small' | 'nano' | 'medium' | 'large' = 'small';
  ro: ResizeObserver;
  itemWidth = 0;
  minOffset = 10;
  carouselItems = [];
  contentWidth;

  constructor() {
    this.onScroll = this.onScroll.bind(this);
  }

  private onScroll() {
    this.displayArrow();
    if (this.pagination) {
      this.updateActiveIndex();
    }
  }

  componentDidLoad() {
    // Make a first render of the UI
    this.calculateWidth();
    this.displayArrow();
    this.calculatePaginationSize();

    this.ro = new ResizeObserver(_ => {
      // Observe any changes in the width container
      this.calculateWidth();
      this.displayArrow();
      this.calculatePaginationSize();
    });
    if (this.ro) {
      this.ro.observe(this.el);
    }

    this.contentEl.addEventListener('scroll', this.onScroll);

    this.size = window.matchMedia('(hover: none) and (pointer: coarse)').matches
      ? 'medium'
      : 'small';

    this.contentEl.scrollBy({
      left: 0,
      behavior: 'auto',
    });
  }

  calculateWidth() {
    const { offsetWidth } = this.el;
    this.carouselItems = Array.from(
      this.el.querySelectorAll('se-carousel-item')
    );

    if (!this.hintWidth) {
      // No need to know how many item there is
      this.setItemWidth(offsetWidth);
    } else {
      // We need to calculate it without the hint, we can fit enough items
      const nbItem = this.carouselItems.length;
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
    if (this.itemMinWidth) {
      this.itemWidth =
        widthContainer /
        Math.max(1, Math.floor(widthContainer / this.itemMinWidth));

      this.el.style.setProperty(
        '--se-carousel-item-width',
        `${this.itemWidth}px`
      );

      if (!CSS?.supports('min-width', 'var(--se-carousel-item-width)')) {
        this.carouselItems.forEach(item => {
          item.style.minWidth = `${this.itemWidth}px`;
        });
      }
    } else {
      const [carouselItem] = this.carouselItems;
      if (carouselItem) {
        const { marginLeft, marginRight } = getComputedStyle(carouselItem);
        this.itemWidth =
          carouselItem.offsetWidth +
          parseFloat(marginLeft) +
          parseFloat(marginRight);
      }
    }
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

  calculatePaginationSize() {
    if (!this.pagination) {
      return;
    }

    // if slider's width has changed, reset scroll position to beginning
    if (this.contentEl.offsetWidth !== this.contentWidth) {
      this.contentWidth = this.contentEl.offsetWidth;
      this.contentEl.scrollLeft = 0;
    }

    let visibleSize = 0;
    for (let i = 0; i < this.carouselItems.length; i++) {
      const slide = this.carouselItems[i];
      // is slide visible initially, without scrolling
      if (this.contentWidth < slide.offsetLeft + slide.offsetWidth) {
        break;
      } else {
        visibleSize++;
      }
    }

    this.paginationSize = Math.max(
      0,
      this.carouselItems.length - visibleSize + 1
    );
  }

  updateActiveIndex() {
    const scrollLeft = Math.ceil(this.contentEl.scrollLeft);
    const errorMargin = 20;

    for (let i = 0; i < this.carouselItems.length; i++) {
      const slide = this.carouselItems[i];
      const slideStart = Math.ceil(slide.offsetLeft - errorMargin);
      const slideEnd = Math.ceil(slide.offsetLeft + slide.offsetWidth);

      if (scrollLeft >= slideStart && scrollLeft < slideEnd) {
        this.activeIndex = i;

        if (!this.showRightArrow) {
          this.activeIndex = this.paginationSize - 1;
        }

        break;
      }
    }
  }

  disconnectedCallback() {
    if (this.ro) {
      this.ro.disconnect();
    }
    this.contentEl.removeEventListener('scroll', this.onScroll);
  }

  componentWillLoad() {
    this.isMobile = isTouchDevice();
  }

  render() {
    return (
      <Host
        class={classNames({
          'arrows-overlay': this.arrowsOverlay,
          'left-hidden': this.showLeftArrow,
          'right-hidden': this.showRightArrow,
          'has-pagination': this.pagination,
        })}
      >
        {this.showLeftArrow && !this.isMobile && (
          <se-icon
            class="arrow left"
            option="button"
            no-hover
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

        {this.showRightArrow && !this.isMobile && (
          <se-icon
            class="arrow right"
            option="button"
            no-hover
            onClick={() => this.scroll(1)}
            size={this.size}
          >
            <span innerHTML={arrow}></span>
          </se-icon>
        )}
        {this.pagination && (
          <se-carousel-pagination
            activeIndex={this.activeIndex}
            size={this.paginationSize}
          ></se-carousel-pagination>
        )}
      </Host>
    );
  }
}
