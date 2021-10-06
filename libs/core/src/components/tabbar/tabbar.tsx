import { Component, h, Prop, State, Build } from '@stencil/core';
// import ResizeObserver from 'resize-observer-polyfill';

import arrow3Up from '@se/icons/svg/arrow3_up.svg';
import arrow5Step from '@se/icons/svg/arrow5_step.svg';

export type TColor = 'primary' | 'alternative';

// @deprecated
@Component({
  tag: 'se-tabbar',
  styleUrl: 'tabbar.scss',
  shadow: false,
})
export class TabbarComponent {
  private navbar?: HTMLElement;
  private minOffset = 20;

  /**
   * Defines the function of the tabbar.
   * Default `nav` creates a tab bar that functions as a nav-bar.
   * `content` creates a ta bbar that functions as a content section tab bar.
   */
  @Prop() option: 'nav' | 'content' = 'nav';
  /**
   * Indicates the overflow behavior of your tab bar.
   * Default setting is `scroll`, keeping all tabs in one horizontal row.
   * The `stack` setting allows your tabbar content wrap to new lines.
   * The `compact` setting allows your tabbar content to scroll, but all stack the text together as much as possible.
   */
  @Prop() overflow: 'compact' | 'stack' | 'scroll' = 'scroll';
  /**
   * Indicates the color of your tab bar.
   * Default setting is `primary`, rendering a green background for nav-bars and ultra-light-grey-1 for content.
   * The `alternative` setting renders a white background.
   */
  @Prop() color: TColor = 'primary';

  @State() showLeftArrow: boolean;
  @State() showRightArrow: boolean;

  ro: ResizeObserver;
  componentDidLoad() {
    if (Build.isBrowser){ // For SSR rendering
      this.ro = new ResizeObserver(_ => {
        this.displayArrow();
      });
    }
    if (this.ro) {
      this.ro.observe(this.navbar);
    }

    this.navbar.addEventListener('scroll', this.displayArrow);
  }

  disconnectedCallback() {
    if (this.ro) {
      this.ro.disconnect();
    }

    this.navbar.removeEventListener('scroll', this.displayArrow);
  }

  displayArrow = (): void => {
    if (this.navbar) {
      const { offsetWidth, scrollWidth, scrollLeft } = this.navbar;
      const showArrow = offsetWidth < scrollWidth;
      this.showLeftArrow = showArrow && scrollLeft > 0;
      this.showRightArrow =
        showArrow && offsetWidth + scrollLeft < scrollWidth - this.minOffset;
    }

    // this.navbar.scrollLeft > 0
    //  // extrem left -> don't display left arrow
  }

  scroll(direction: number) {
    this.navbar.scrollBy({
      left: direction * 200,
      behavior: 'smooth',
    });
  }


  getIconStart = (color: TColor) => {
    return color === 'alternative' 
      ? <se-icon size='nano' rotate={90} mirror="horizontal">
          <span innerHTML={arrow3Up}></span>
        </se-icon>
      : <se-icon size='medium' mirror="horizontal">
        <span innerHTML={arrow5Step}></span>
      </se-icon>
  };

  getIconEnd = (color: TColor) => {
    return color === 'alternative' 
      ? <se-icon size='nano' rotate={90}>
          <span innerHTML={arrow3Up}></span>
        </se-icon>
      : <se-icon size='medium'>
        <span innerHTML={arrow5Step}></span>
      </se-icon>
  };

  render() {

    return (
      <div
        dir="ltr" // This component does not support RTL for now.
        class={{
          'd-flex-main': true,
          [`tab-${this.color}`]: !!this.color,
          [`wrapper-${this.option}`]: !!this.option,
        }}
      >
        <div class="nav-left-wrapper centered">
          <slot name="start" />
        </div>
        <div class="nav-center-arrows-wrapper">
          <span
            class={{ arrow: true, arrowLeft: true, hidden: !this.showLeftArrow }}
            onClick={() => this.scroll(-1)}
          >
            {this.getIconStart(this.color)}
          </span>
          <div
            ref={el => (this.navbar = el)}
            class={{
              'fill-space': true,
              'nav-center-wrapper': true,
              [`opt-${this.option}`]: !!this.option,
              [this.overflow]: !!this.overflow,
            }}
          >
            <slot />
          </div>
          <span
            class={{ arrow: true, arrowRight: true, hidden: !this.showRightArrow }}
            onClick={() => this.scroll(1)}
          >
            {this.getIconEnd(this.color)}
          </span>
        </div>
        <div
          class={{
            [`tab-end-${this.color}`]: !!this.color,
            [`opt-end-${this.option}`]: !!this.option,
            centered: true,
          }}
        >
          <slot name="end" />
        </div>
        <div
          class={{
            [`tab-end-${this.color}`]: !!this.color,
            [`opt-end-${this.option}`]: !!this.option,
            centered: true,
            edge: true,
          }}
        >
          <slot name="edge" />
        </div>
      </div>
    );
  }
}
