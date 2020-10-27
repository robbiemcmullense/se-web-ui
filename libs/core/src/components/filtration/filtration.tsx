import { Component, h, Prop, State, Event, Element } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Element() el: HTMLElement;
  @Prop() label = 'Select';

  @Event() didSearch: EventEmitter;
  @Event() didViewMore: EventEmitter;

  @State() searchable = false;
  @State() hint = 'enter text';
  @State() searchText = '';
  @State() viewMoreText = 'More';
  @State() isExpanded = false;
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
    this.isExpanded = !this.isExpanded;
    this.isViewingMore = false;
    console.log('setExpanded: ', this.isExpanded || 'No');
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
        for (var el in listitems) {
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
      <se-block outline option="card">
        <se-block-header>
          {this.label}
          <div slot="end">
            <se-button
              option="flat"
              color="alternative"
              icon-only
              icon={this.isExpanded ? 'arrow2_up' : 'arrow2_down'}
              onClick={() => this.setExpanded()}
            />
          </div>
        </se-block-header>
        <se-block-content>
          {this.searchable && this.isExpanded && (
            <se-form-field option="stacked" block>
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
          )}
          <div
            style={{
              height: this.isViewingMore ? '300px' : this.listboxHeight,
            }}
            class={{
              panel: true,
              active: this.isExpanded,
              scroll: this.isViewingMore,
            }}
          >
            <slot></slot>
          </div>
        </se-block-content>
        {this.isExpanded && this.searchable && (
          <se-block-footer>
            <div
              class={{ viewmore: true, active: this.isExpanded }}
              slot="start"
              onClick={() => this.setViewMore()}
            >
              View{' '}
              {this.isViewingMore ? `Less` : `More (${this.viewMoreCount})`}
            </div>
          </se-block-footer>
        )}
      </se-block>
    );
  }
}
