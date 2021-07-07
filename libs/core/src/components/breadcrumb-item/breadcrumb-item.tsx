import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
} from '@stencil/core';
import arrow2Right from '@se/icons/svg/arrow2_right.svg';

@Component({
  tag: 'se-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItemComponent {
  @Element() el: HTMLElement;

  /**
   * Indicates whether or not the breadcrumb item should be show a arrow at the end.  The default setting is `false`.
   */
  @Prop() isLast: boolean;
  /**
   * Indicates the URL you wish to navigate to when clicking on your breadcrumb item.
   */
  @Prop() href: string;

  /**
   * Indicates whether or not the breadcrumb item should be selected.  The default setting is `true`.
   */
  @Prop() canSelect = true;

  /**
   * Indicates the position of an item in a series or sequence of items.
   */
  @Prop() position: string;

  /**
   * Event firing when breadcrumbs link is clicked.
   */
  @Event({
    bubbles: true,
    cancelable: true,
  })
  didNavigate: EventEmitter<HTMLAnchorElement>;

  private handleNavigation = event => {
    const navigationEvent = this.didNavigate.emit(event.currentTarget);
    if (navigationEvent.defaultPrevented) {
      event.preventDefault();
    }
  };

  getMicrodataAttr(
    itemprop: string,
    itemtype?: string
  ): {
    itemprop: string;
    itemscrope?: string;
    itemtype?: string;
  } {
    return {
      itemprop,
      ...(itemtype && { itemscope: '', itemtype }),
    };
  }

  microdataMetaPosition() {
    if (this.position !== undefined) {
      return <meta itemprop="position" content={this.position} />;
    }
  }

  private breadcrumbEl: HTMLElement | null;

  componentWillLoad() {
    this.breadcrumbEl =
      this.el.assignedSlot?.closest('se-breadcrumb') ||
      this.el.closest('se-breadcrumb');
  }

  render() {
    return (
      <Host
        role="listitem"
        class={`backlink--${this.breadcrumbEl?.dataset.breakpoint}`}
        {...this.getMicrodataAttr(
          'itemListElement',
          'https://schema.org/ListItem'
        )}
      >
        <div class={{ disabled: !this.canSelect }}>
          {this.canSelect ? (
            <span class="breadcrumb-item">
              <a
                href={this.href}
                onClick={this.handleNavigation}
                {...this.getMicrodataAttr('item')}
              >
                <span {...this.getMicrodataAttr('name')}>
                  <slot />
                </span>
              </a>
              {this.microdataMetaPosition()}
            </span>
          ) : (
            <span aria-current="page" class="breadcrumb-item">
              <span {...this.getMicrodataAttr('name')}>
                <slot />
              </span>
              {this.microdataMetaPosition()}
            </span>
          )}
          {!this.isLast && (
            <se-icon size="nano" aria-hidden="true" style={{width: "10px", height: "12px"}} innerHTML={arrow2Right}></se-icon>
          )}
        </div>
      </Host>
    );
  }
}
