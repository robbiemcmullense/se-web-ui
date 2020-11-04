import { Component, h, Prop, State, Event, Element } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Element() el: HTMLElement;
  // properties
  @Prop() label = 'Select';
  @Prop({ mutable: true }) collapsed = true;
  @Prop() hint = 'enter text';
  @Prop() shadow = false;
  // event
  @Event() didSearch: EventEmitter;
  // local variables
  @State() searchable = false;
  @State() searchText = '';
  @State() labelViewMore = 'View more';
  @State() labelViewLess = 'View less';
  @State() isViewingMore = false;
  @State() listboxHeight = '';
  @State() minItems = 5;
  @State() maxItems = 20;
  @State() viewMoreCount = 0;

  setSearch = e => {
    this.searchText = e.target.value;
    this.didSearch.emit(this.searchText);
  };

  /**
   * @description function to clear search text
   */
  clearSearch = () => {
    this.searchText = '';
    this.didSearch.emit('');
  };

  /**
   * @description to set the dropdown expanded
   */
  setExpanded() {
    this.collapsed = !this.collapsed;
    this.isViewingMore = false;
  }

  /**
   * @description to set flag when user clicked `View More` or `Veiw Less`
   */
  setViewMore() {
    this.isViewingMore = !this.isViewingMore;
  }

  render() {
    const listitems = this.el.querySelectorAll('se-list-item');
    this.searchable = listitems.length > 0;
    let lbHeight = 0;
    let n = 0;
    if (this.searchable) {
      this.minItems = this.isViewingMore ? this.maxItems : this.minItems;
      setTimeout(() => {
        listitems.forEach((_, idx) => {
          if (n < this.minItems + 2) {
            n++;
            lbHeight += listitems[idx].offsetHeight;
          }
        });
        this.viewMoreCount = listitems.length - n;
        this.listboxHeight = `${lbHeight}px`;
      }, 10);
    } else {
      this.listboxHeight = 'auto';
    }
    return (
      <se-block divider margin="none" option={this.shadow ? 'card' : 'fill'}>
        <se-block-header>
          <div>
            {this.label}
            <div class="selected-values">
              <slot name="selectedItem"></slot>
            </div>
          </div>
          <div slot="end">
            <se-button
              option="flat"
              color="alternative"
              icon-only
              icon={this.collapsed ? 'arrow2_up' : 'arrow2_down'}
              onClick={() => this.setExpanded()}
            />
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
                      placeholder={this.hint}
                      onInput={this.setSearch}
                    />
                    <se-icon size="small" style={{ marginLeft: '4px' }}>
                      action_search_stroke
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
          <se-block-footer>
            <div
              class={{ viewmore: true, active: this.collapsed }}
              slot="start"
              onClick={() => this.setViewMore()}
            >
              {this.isViewingMore
                ? this.labelViewLess
                : `${this.labelViewMore} (${this.viewMoreCount})`}
              <se-icon>
                {this.isViewingMore ? 'arrow2_up' : 'arrow2_down'}
              </se-icon>
            </div>
          </se-block-footer>
        )}
      </se-block>
    );
  }
}
