import { Component, h, Prop, State, Event, Element } from '@stencil/core';
import { EventEmitter } from 'events';

import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import arrow2Down from '@se/icons/svg/arrow2_down.svg';
import actionSearchStroke from '@se/icons/svg/action_search_stroke.svg';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Element() el: HTMLElement;
  /**
   * text to display in the header
   */
  @Prop() labelSelect = 'Select';
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
   * Minimum number of items to be displayed when collapsed. Default is `5`
   */
  @Prop() minItems = 5;
  /**
   * Maximum number of items to be displayed when expanded. Default is `20`
   */
  @Prop() maxItems = 20;
  /**
   * Optional property to indicate if multiple selections will be made
   * `true` = multiple selection | `false` = single selection
   */
  @Prop() selectAll = false;
  /**
   * Event emitter for callback with the searched text
   */
  @Event() didSearch: EventEmitter;
  /**
   * Event emitter for callback to select all items
   */
  @Event() didSelectAll: EventEmitter;
  /**
   * Variable to store the text to search
   */
  @State() searchText = '';
  /**
   * Boolean variable to denote if there are list items and search box can be shown.
   * If there are no list items, then the search box will not be displayed.
   */
  @State() searchable = false;
  /**
   * Boolean variable to denote if the user has clicked `View More` or `View Less`
   * `true` would mean the user has clicked `View More` and the component is expanded
   * `false` would mean the user has clicked `View Less` and the component is collapsed
   */
  @State() isViewingMore = false;
  /**
   * Variable to store the height of the content area when expanded and collapsed. It is
   * computed based on the `minItems` and `maxItems` computed at run time.
   */
  @State() listboxHeight = '';
  /**
   * Variable to store how many more items the user would see when he clicks `View More` link
   */
  @State() viewMoreCount = 0;
  /**
   * Variable to show 'Select all'
   */
  @State() selectAllLink = 'Select All';
  /**
   * Function to set the text that user would enter to search
   * @param e Object
   */
  setSearch = e => {
    this.searchText = e.target.value;
    this.didSearch.emit(this.searchText);
  };
  /**
   * Function to clear search text
   */
  clearSearch = () => {
    this.searchText = '';
    this.didSearch.emit('');
  };
  /**
   * Function to set the dropdown expanded
   */
  setExpanded() {
    this.collapsed = !this.collapsed;
    this.isViewingMore = false;
  }
  /**
   * Function to set flag when user clicked `View More` or `Veiw Less`
   */
  setViewMore() {
    this.isViewingMore = !this.isViewingMore;
  }
  /**
   * Function to emit event to select all items
   */
  selectAllItems() {
    this.didSelectAll.emit('all');
  }

  render() {
    const listitems = this.el.querySelectorAll('se-list-item');
    this.searchable = listitems.length > 0;
    let lbHeight = 0; // - effective list box height -
    let n = 0; // - to store number of items initially displayed -
    /**
     * to compute the height of the content when expanded and collapsed
     */
    if (this.searchable) {
      const minItems = this.isViewingMore ? this.maxItems : this.minItems;
      setTimeout(() => {
        listitems.forEach(li => {
          if (n < minItems) {
            n++;
            lbHeight += li.offsetHeight;
          }
        });
        this.viewMoreCount = listitems.length - n;
        this.listboxHeight = `${lbHeight}px`;
      }, 10);
    } else {
      this.listboxHeight = 'auto';
    }
    console.log('> viewMoreCount: ', this.viewMoreCount);
    return (
      <se-block
        divider
        margin="none"
        option={this.shadow ? 'card-old' : 'fill'}
      >
        <se-block-header>
          <div>
            {this.labelSelect}
            <div class="selected-values">
              <slot name="selectedItem"></slot>
            </div>
          </div>
          <div slot="end">
            <se-icon
              color="standard"
              icon-only
              onClick={() => this.setExpanded()}
            >
              <span
                class="link"
                innerHTML={this.collapsed ? arrow2Up : arrow2Down}
              ></span>
            </se-icon>
          </div>
        </se-block-header>
        <se-block-content option="fill">
          <div class={{ panel: true, active: this.collapsed }}>
            {this.searchable && (
              <div>
                <se-form-field type="input" option="stacked" block>
                  <div class="with-icon">
                    <input
                      type="search"
                      placeholder={this.labelHint}
                      onInput={this.setSearch}
                    />
                    <se-icon size="small" style={{ marginLeft: '4px' }}>
                      <span innerHTML={actionSearchStroke}></span>
                    </se-icon>
                  </div>
                </se-form-field>
              </div>
            )}
            <div
              style={{
                height: this.isViewingMore ? '300px' : this.listboxHeight,
              }}
              class={{
                content: true,
                active: this.collapsed && this.collapsed,
                scroll: this.isViewingMore,
              }}
            >
              <se-list option="dropdown" selected-color="primary">
                <slot></slot>
              </se-list>
            </div>
          </div>
        </se-block-content>
        {this.collapsed && this.searchable && (
          <se-block-footer divider={false}>
            <div
              class={{ 'view-more': true, active: this.collapsed }}
              slot="start"
              onClick={() => this.setViewMore()}
            >
              {this.isViewingMore
                ? this.labelViewLess
                : `${this.labelViewMore} (${this.viewMoreCount})`}
              <se-icon>
                <span
                  innerHTML={this.isViewingMore ? arrow2Up : arrow2Down}
                ></span>
              </se-icon>
            </div>
            <div
              class={{ 'select-all': true, active: this.selectAll }}
              onClick={() => this.selectAllItems()}
            >
              {this.selectAllLink}
            </div>
          </se-block-footer>
        )}
      </se-block>
    );
  }
}
