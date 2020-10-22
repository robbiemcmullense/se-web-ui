import { Component, h, Prop, State, Event } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Prop() label = 'Select';
  @Prop() searchable = false;
  @Prop() scrollable = false;
  @Prop() moreItems = 0;

  @Event() didSearch: EventEmitter;
  @Event() didViewMore: EventEmitter;

  @State() searchText = '';
  @State() viewMoreText = 'More';
  @State() isSelecting = false;
  @State() isViewingMore = false;

  componentWillLoad() {
    console.log('Component will load...');
  }

  setSearch = e => {
    this.searchText = e.target.value;
    this.didSearch.emit(this.searchText);
  };

  clearSearch = () => {
    this.searchText = '';
    this.didSearch.emit('');
  };

  setSelecting() {
    this.isSelecting = !this.isSelecting;
  }

  setViewMore() {
    this.isViewingMore = !this.isViewingMore;
    this.didViewMore.emit(this.isViewingMore ? 'yes' : 'no');
  }
  render() {
    return (
      <div>
        <div class="dropdown">
          <div class="dropdown-header">
            <span>{this.label}</span>
            <se-button
              color="alternative"
              onClick={() => this.setSelecting()}
              iconOnly
              icon={this.isSelecting ? 'arrow2_up' : 'arrow2_down'}
            />
          </div>
          <div class={{ listview: true, active: this.isSelecting }}>
            {this.searchable && (
              <se-form-field type="input" option="stacked">
                <div class="with-icon" style={{ width: '97%' }}>
                  <input
                    type="search"
                    onFocus={() => this.clearSearch()}
                    onInput={this.setSearch}
                  />
                  <se-icon size="small">action_search_stroke</se-icon>
                </div>
              </se-form-field>
            )}
            <div class={{ listbox: true, scroll: this.isViewingMore }}>
              <slot name="content"></slot>
            </div>
            <div class="listbox-footer">
              {this.scrollable && (
                // tslint:disable-next-line: linebreak-style
                <span onClick={() => this.setViewMore()}>
                  View{' '}
                  {this.isViewingMore ? 'Less' : `More (${this.moreItems})`}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
