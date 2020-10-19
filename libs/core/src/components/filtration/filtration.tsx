import { Component, h, Prop, State, Event } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Prop() multiSelect: boolean = false;
  @Prop() data: any;
  @Prop() label: string = 'Select';
  @Event() selected: EventEmitter;

  @State() selectedItems: any = [];
  @State() selectedItem: any;
  @State() searchText: string = '';
  @State() options = [];

  @State() viewMulti = false;

  @State() numToShow = 5;
  @State() minItems = 5;
  @State() maxItems = 20;
  @State() isSelecting = false;

  componentWillLoad() {
    console.log('Component will load ::', this.data);
    // console.log('typeof(', this.data, ')', typeof (this.data));
    this.options =
      typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
  }

  canSearch = (item: any) => new RegExp(this.searchText, 'gi').test(item);

  setSearch = e => {
    console.log('> setSearch:', e.target.value);
    this.searchText = e.target.value;
  };

  clearSearch = () => {
    this.searchText = '';
  };

  addItem = (item: any) => {
    if (this.multiSelect) {
      const idx: number = this.selectedItems.indexOf(item);
      if (idx < 0) {
        this.selectedItems = [...this.selectedItems, item];
      } else {
        this.selectedItems = [
          ...this.selectedItems.slice(0, idx),
          ...this.selectedItems.slice(idx + 1),
        ];
      }
    } else {
      this.selectedItem = this.selectedItem === item ? null : item;
    }
    if (!this.multiSelect) {
      this.isSelecting = false;
      this.isViewingMore = false;
    }
    this.selected.emit(
      this.multiSelect ? this.selectedItems : this.selectedItem
    );
  };

  setSelecting() {
    this.isSelecting = !this.isSelecting;
  }

  isSelected = (item: any) => this.selectedItems.indexOf(item) > -1;

  isViewingMore = this.numToShow > this.minItems;

  viewMore = () => {
    this.isViewingMore = !this.isViewingMore;
    if (this.isViewingMore) {
      this.numToShow = this.maxItems;
    } else {
      this.numToShow = this.minItems;
    }
  };

  getFilteredItems = () => {
    const items = this.options.filter(f => this.canSearch(f));
    return items;
  };

  isSelectedAll = () => this.selectedItems.length === this.options.length;

  selectAll = () => {
    if (this.isSelectedAll()) {
      this.selectedItems = [];
    } else {
      this.selectedItems = [...this.options];
    }
  };

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
            ></se-button>
          </div>

          {this.isSelecting && (
            <div class="listview">
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
              <div class="listbox">
                {this.multiSelect && (
                  <div class="list-item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => this.selectAll()}
                        checked={this.isSelectedAll()}
                      />{' '}
                      Select All
                    </label>
                  </div>
                )}
                {this.getFilteredItems()
                  .slice(0, this.numToShow)
                  .map(item =>
                    this.multiSelect ? (
                      <div class="list-item">
                        <label>
                          <input
                            type="checkbox"
                            onChange={() => this.addItem(item)}
                            checked={this.isSelected(item)}
                          />{' '}
                          {item}
                        </label>
                      </div>
                    ) : (
                      <div onClick={() => this.addItem(item)} class="list-item">
                        {item}
                      </div>
                    )
                  )}
              </div>
              {this.options.length > 5 && (
                <div class="listbox-footer">
                  <span onClick={() => this.viewMore()}>
                    &laquo; View{' '}
                    {this.isViewingMore
                      ? `Less`
                      : `More (${this.options.length - this.minItems})`}{' '}
                    &raquo;
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
