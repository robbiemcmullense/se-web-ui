import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'se-filtration',
  styleUrl: 'filtration.scss',
})
export class FiltrationComponent {
  @Prop() multiselect: boolean = false;
  @Prop() data: any = ['Apple', 'Orange', 'Pineapple', 'Pear'];
  @Prop() label: string = 'Select';

  @State() selectedItems: any = [];
  @State() searchText: string = '';

  hasSearchText = (item: any) =>
    item.toLowerCase().includes(this.searchText.toLowerCase());

  setSearch = e => {
    this.searchText = e.target.value;
  };

  addItem = (item: any) => {
    if (this.multiselect) {
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
      this.selectedItems[0] = item;
    }
  };

  isSelected = (item: any) =>
    this.selectedItems.findIndex(f => f === item) > -1;

  render() {
    return (
      <div class="dropdown">
        <se-form-field type="input" option="stacked">
          <div class="with-icon" style={{ width: '97%' }}>
            <input type="search" onInput={this.setSearch} />
            <se-icon size="small">action_search_stroke</se-icon>
          </div>
        </se-form-field>
        {this.searchText.length && (
          <se-list option="dropdown">
            {this.data
              .filter(f => this.hasSearchText(f))
              .map(item => (
                <div class="li">{item}</div>
              ))}
          </se-list>
        )}
      </div>
    );
  }
}
