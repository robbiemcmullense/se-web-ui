import { Component, h, Prop, State, Event, Element, Host } from '@stencil/core';
import { EventEmitter } from 'events';

import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import arrow2Down from '@se/icons/svg/arrow2_down.svg';
import actionSearchStroke from '@se/icons/svg/action_search_stroke.svg';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
  shadow: true,
})
export class FiltrationComponent {
  @Element() el: HTMLElement;
  observer;
  mobileMedia;
  nbItemOffset = 2;

  /**
   * text to display in the header
   */
  @Prop() item;
  /**
   * Text for the placeholder. the default is `enter text`
   */
  @Prop() labelHint = 'enter text';
  /**
   * Boolean property to indicate if the content will be visible or hidden
   * collapsed = `true` => content is shown
   * collapsed = `false` => content is hidden
   */

  @Prop({ mutable: true }) collapsed = true;
  /**
   * Boolean property to indicate if there should be a shadow around the box
   * valid values are `true` or `false`
   */
  @Prop() shadow = false;
  /**
   * Default value to display for viewing more content
   */
  @Prop() labelViewMore = 'View More';
  /**
   * Default text to display for viewing less content
   */
  @Prop() labelViewLess = 'View Less';
  /**
   * Variable to show 'Select all'
   */
  @Prop() labelSelectAll = 'Select All';
  /**
   * Minimum number of items to be displayed when collapsed. Default is `5`
   */
  @Prop() minItems = 5;
  /**
   * Maximum number of items to be displayed when expanded. Default is `10`
   */
  @Prop() maxItems = 10;
  /**
   * Optional property to indicate if multiple selections will be made
   * `true` = multiple selection | `false` = single selection
   */
  @Prop() showSelectAll = false;

  /**
   * Optional property to show a search box inside the form
   */
  @Prop() searchable = false;
  /**
   * The search value in the search field. Mostly used to clear the search box when needed.
   */
  @Prop({ mutable: true }) search: string;

  @Event() didSearch: EventEmitter;
  /**
   * Event emitter for callback to select all items
   */
  @Event() didSelectAll: EventEmitter;

  @State() canViewMore = false;
  @State() isViewMore = false;
  @State() items: HTMLElement[] = [];
  @State() isMobile: boolean;

  setSearch = e => {
    this.search = e.target.value;
    this.didSearch.emit(this.search);
  };
  /**
   * Function to set the dropdown expanded
   */
  setExpanded() {
    this.collapsed = !this.collapsed;
    this.isViewMore = false;
  }
  /**
   * Function to set flag when user clicked `View More` or `Veiw Less`
   */
  setViewMore() {
    this.isViewMore = !this.isViewMore;
  }

  watchItemList() {
    // If we add a list of item after the component is loaded, we need
    // to update the node and re-calculate the show more/less feature
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.setItemsArray();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }

  setItemsArray() {
    this.items = Array.from(this.el.querySelectorAll('se-list-item')).filter(
      (item: any) => {
        // const closeList = item.closest('se-list');
        // Make sure we only change the style of the current list.
        // If there is a another list like a dropdown, we should ignore it.
        return (
          item.closest('se-filtration, se-list, se-list-group') === this.el
        );
      }
    );
    // console.log('this.items.length', this.items.length);
    this.canViewMore = this.items.length > this.minItems + this.nbItemOffset;
  }

  componentDidLoad() {
    this.setItemsArray();
  }

  componentWillLoad() {
    this.mobileMedia = window.matchMedia('only screen and (max-width: 601px)');
    // Initialize isMobile variable
    this.isMobile = this.mobileMedia.matches;
    // Add listener for future change
    this.mobileMedia.addListener(
      mediaQuery => (this.isMobile = mediaQuery.matches)
    );
    this.watchItemList();
  }

  componentWillUnload() {
    if (this.mobileMedia) {
      this.mobileMedia.removeListener();
    }
    this.observer.disconnect();
  }
  /**
   * Function to emit event to select all items
   */
  selectAllItems() {
    this.didSelectAll.emit('all');
  }

  render() {
    const nbItems = this.items?.length;
    let listboxHeight = 'auto';

    if (nbItems) {
      // calculate height of an element
      const firstItemHeight = window
        .getComputedStyle(this.items[0])
        .getPropertyValue('--se-list-item-height');
      const height = parseInt(firstItemHeight, 10);
      if (this.isViewMore) {
        // if we have a bit more item, than max item, we still show all item
        listboxHeight = `${height * this.maxItems}px`;
      } else if (nbItems > this.minItems + this.nbItemOffset) {
        listboxHeight = `${height * this.minItems}px`;
      }
    }
    return (
      <Host class={{ isMobile: this.isMobile }}>
        <se-block
          class={{ shadow: this.shadow, isMobile: this.isMobile }}
          corner={this.isMobile ? 'none' : 'small'}
          margin={this.isMobile ? 'none' : this.shadow ? 'medium' : 'small'}
          option={this.shadow && !this.isMobile ? 'card-old' : 'card'}
        >
          <se-block-header option="fill" divider>
            <h5>
              <bold>{this.item}</bold>
              <div class="selected-values">
                <slot name="selectedItem"></slot>
              </div>
            </h5>
            <div slot="end">
              <se-icon
                color="standard"
                icon-only
                size="medium"
                onClick={() => this.setExpanded()}
              >
                <span
                  class="link"
                  innerHTML={this.collapsed ? arrow2Up : arrow2Down}
                ></span>
              </se-icon>
            </div>
          </se-block-header>
          <div
            class={{
              panel: true,
              active: this.collapsed,
              'background-standard': this.isMobile,
            }}
          >
            {this.searchable && (
              <se-form-field type="input" option="stacked" block padding="none">
                <div class="with-icon">
                  <input
                    type="search"
                    placeholder={this.labelHint}
                    onInput={this.setSearch}
                  />
                  <se-icon class="icon-collapse">
                    <span innerHTML={actionSearchStroke}></span>
                  </se-icon>
                </div>
              </se-form-field>
            )}

            <se-list
              style={{ height: listboxHeight }}
              class={{ content: true, scroll: this.isViewMore }}
              option="dropdown"
              selected-color="primary"
            >
              <slot></slot>
            </se-list>
            {(this.canViewMore || this.showSelectAll) && (
              <se-block-footer>
                {this.canViewMore ? (
                  <div
                    class={{ 'view-more': true, active: this.collapsed }}
                    slot="start"
                    onClick={() => this.setViewMore()}
                  >
                    {this.isViewMore
                      ? this.labelViewLess
                      : `${this.labelViewMore} (${nbItems - this.minItems})`}
                    <se-icon>
                      <span
                        innerHTML={this.isViewMore ? arrow2Up : arrow2Down}
                      ></span>
                    </se-icon>
                  </div>
                ) : (
                  ''
                )}
                {this.showSelectAll ? (
                  <div class="select-all" onClick={() => this.selectAllItems()}>
                    {this.labelSelectAll}
                    {this.search?.length ? `(${nbItems})` : ''}
                  </div>
                ) : (
                  ''
                )}
              </se-block-footer>
            )}
          </div>
        </se-block>
      </Host>
    );
  }
}
