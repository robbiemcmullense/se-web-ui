import { Component, h, Host, Prop, State, Build } from '@stencil/core';
// import ResizeObserver from 'resize-observer-polyfill';

import arrow3Up from '@se/icons/svg/arrow3_up.svg';
import arrow5Step from '@se/icons/svg/arrow5_step.svg';
import { resizeObserver } from '../../utils';

export type TColor = 'primary' | 'alternative';

@Component({
  tag: 'se-tab',
  styleUrl: 'tab.scss',
  shadow: true,
})
export class TabComponent {
  private navbar?: HTMLElement;
  private minOffset = 20;

  /**
   * Defines the function of the tabbar.
   * Default `nav` creates a tab bar that functions as a nav-bar.
   * `content` creates a ta bbar that functions as a content section tab bar.
   */
  @Prop({ reflect: true }) option: 'anchor' | 'content' | 'navigation' =
    'navigation';
  /**
   * Indicates the overflow behavior of your tab bar.
   * Default setting is `scroll`, keeping all tabs in one horizontal row.
   * The `stack` setting allows your tabbar content wrap to new lines.
   * The `compact` setting allows your tabbar content to scroll, but all stack the text together as much as possible.
   */
  @Prop() overflow: 'compact' | 'stack' | 'scroll' = 'scroll';

  @State() showLeftArrow: boolean;
  @State() showRightArrow: boolean;

  ro: ResizeObserver;
  componentDidLoad() {
    if (Build.isBrowser) {
      // For SSR rendering
      this.ro = resizeObserver(_ => {
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

    this.navbar?.removeEventListener('scroll', this.displayArrow);
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
  };

  scroll(direction: number) {
    this.navbar.scrollBy({
      left: direction * 200,
      behavior: 'smooth',
    });
  }

  getIcon = position => {
    return this.option === 'anchor' ? (
      <se-icon
        size="nano"
        rotate={90}
        mirror={position === 'start' ? 'horizontal' : null}
      >
        <span innerHTML={arrow3Up}></span>
      </se-icon>
    ) : (
      <se-icon
        size="medium"
        mirror={position === 'start' ? 'horizontal' : null}
      >
        <span innerHTML={arrow5Step}></span>
      </se-icon>
    );
  };

  render() {
    return (
      <Host>
        <div class="nav-left-wrapper centered">
          <slot name="start" />
        </div>
        <nav
          class={{ 'nav-center-arrows-wrapper': true, [this.overflow]: true }}
        >
          {this.option === 'content' && <se-divider></se-divider>}

          <span
            class={{
              arrow: true,
              arrowLeft: true,
              hidden: !this.showLeftArrow,
            }}
            onClick={() => this.scroll(-1)}
          >
            {this.getIcon('start')}
          </span>
          <div
            ref={el => (this.navbar = el)}
            class={{
              'fill-space': true,
              'nav-center-wrapper': true,
              [this.overflow]: !!this.overflow,
            }}
          >
            <slot />
          </div>
          <span
            class={{
              arrow: true,
              arrowRight: true,
              hidden: !this.showRightArrow,
            }}
            onClick={() => this.scroll(1)}
          >
            {this.getIcon('end')}
          </span>
        </nav>
        <div class="centered">
          <slot name="end" />
        </div>
      </Host>
    );
  }
}
