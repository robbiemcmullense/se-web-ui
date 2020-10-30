import { Component, h, Prop, State, Event, Element } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Element() el: HTMLElement;
  @Prop() label = 'Select';
  @Prop() collapsed = false;

  @Event() didSearch: EventEmitter;
  @Event() didViewMore: EventEmitter;

  @State() searchable = false;
  @State() hint = 'enter text';
  @State() searchText = '';
  @State() viewMoreText = 'More';
  @State() isCollapsed = this.collapsed;
  @State() isViewingMore = false;
  @State() listboxHeight = '';
  @State() minItems = 5;
  @State() viewMoreCount = 0;

  setSearch = e => {
    this.searchText = e.target.value;
    this.didSearch.emit(this.searchText);
  };

  clearSearch = () => {
    this.searchText = '';
    this.didSearch.emit('');
  };

  setExpanded() {
    this.isCollapsed = !this.isCollapsed;
    this.isViewingMore = false;
    console.log('setExpanded: ', this.isCollapsed || 'No');
  }

  setViewMore() {
    this.isViewingMore = !this.isViewingMore;
  }
  render() {
    const listitems = this.el.querySelectorAll('se-list-item');
    this.searchable = listitems.length > 0;
    let lbHeight = 0;
    let n = 0;
    if (this.searchable) {
      this.minItems = this.isViewingMore ? 20 : 5;
      setTimeout(() => {
        for (let el in listitems) {
          if (n > this.minItems) {
            break;
          }
          n++;
          lbHeight += listitems[el].offsetHeight;
        }
        this.viewMoreCount = listitems.length - n;
        this.listboxHeight = `${lbHeight}px`;
      }, 10);
    } else {
      this.listboxHeight = 'auto';
    }
    return (
      <se-block divider margin="small" option="card">
        <se-block-header>
          {this.label}
          <div slot="end">
            <se-button
              option="flat"
              color="alternative"
              icon-only
              icon={this.isCollapsed ? 'arrow2_up' : 'arrow2_down'}
              onClick={() => this.setExpanded()}
            />
          </div>
        </se-block-header>
        <se-block-content option="fill">
          <div class={{ panel: true, active: this.isCollapsed }}>
            {this.searchable && (
              <div>
                <se-form-field type="input" option="stacked" block>
                  <div class="with-icon">
                    <input
                      type="search"
                      placeholder={this.hint + ' ' + this.searchable}
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
                active: this.isCollapsed && this.isCollapsed,
                scroll: this.isViewingMore,
              }}
            >
              <slot></slot>
            </div>
          </div>
        </se-block-content>
        {this.isCollapsed && this.searchable && (
          <se-block-footer>
            <div
              class={{ viewmore: true, active: this.isCollapsed }}
              slot="start"
              onClick={() => this.setViewMore()}
            >
              View{' '}
              {this.isViewingMore ? `Less` : `More (${this.viewMoreCount})`}
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
