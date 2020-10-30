import React, { Component } from 'react';
import {
  SeContainer,
  SeBlock,
  SeBlockHeader,
  SeBlockFooter,
  SeIcon,
  SeLink,
  SeButton,
  SeBlockContent,
  SeCheckbox,
  SeList,
  SeListItem,
  SeFiltration,
  SeFormField,
  SeDivider,
} from '@se/web-ui-react';

const demoItems = [
  'Apple',
  'Orange',
  'Pineapple',
  'Fig',
  'Pear',
  'Custard Apple',
  'Lemon',
  'Mango',
  'Grapes',
  'Carrot',
  'Radish',
  'Pumpkin',
];

const categories = [
  'Software',
  'Hardware',
  'Infrastructure',
  'Mechanical',
  'Electrical',
  'Information',
  'Telecommunication',
  'Healthcare',
  'Food',
];
const minItems = 5;

class Filtration extends Component {
  state = {
    selectedProduct: '',
    selectedCategories: [],
    isCollapsed: false,
    scrollPage: false,
    canViewProducts: false,
    viewMoreProducts: true,
    dateRange: {
      startDate: null,
      endDate: null,
    },
  };

  selectProduct = (li: any) => {
    this.setState({
      selectedProduct: this.state.selectedProduct === li ? null : li,
    });
  };

  selectCategory = (li: any) => {
    let selectedCategories = this.state.selectedCategories;
    const idx = selectedCategories.indexOf(li);
    if (idx < 0) {
      selectedCategories = [...selectedCategories, li];
    } else {
      selectedCategories = [
        ...selectedCategories.slice(0, idx),
        ...selectedCategories.slice(idx + 1),
      ];
    }
    this.setState({ selectedCategories: selectedCategories });
  };

  areAllCategoriesSelected() {
    return this.state.selectedCategories.length === categories.length;
  }

  selectAllCategories() {
    let selectedCategories = [];
    if (!this.areAllCategoriesSelected()) {
      selectedCategories = [...categories];
    } else {
      selectedCategories = [];
    }
    this.setState({ selectedCategories: selectedCategories });
  }

  isSelectedProduct = (li: any) => {
    return this.state.selectedProduct === li;
  };

  isSelectedCategory = (li: any) => {
    return this.state.selectedCategories.filter(f => f === li).length > 0;
  };

  handleViewMoreProducts = () => {
    this.setState({ viewMoreProducts: !this.state.viewMoreProducts });
    this.setState({
      numItems: this.state.viewMoreProducts ? demoItems.length : minItems,
    });
  };

  setRangeDate = e => {
    const dateRange = this.state.dateRange;
    dateRange[e.target.name] = e.target.value;
    this.setState({ dateRange: dateRange });
    console.log('dateRange:', this.state.dateRange);
  };

  isValidDateRange = () =>
    this.state.dateRange.startDate !== null &&
    this.state.dateRange.endDate !== null &&
    this.state.dateRange.startDate < this.state.dateRange.endDate;

  resetAll = () => {
    this.setState({
      isCollapsed: false,
      selectedCategories: [],
      selectedProduct: '',
      dateRange: {
        startDate: '',
        endDate: '',
      },
    });
  };
  render() {
    return (
      <SeContainer>
        <SeBlock width="30vw">
          <SeBlockHeader>
            Filter by:
            <div slot="end">
              <SeLink onClick={() => this.resetAll()}>
                <SeIcon>data_refresh_stroke</SeIcon> Reset All
              </SeLink>
            </div>
          </SeBlockHeader>
          {/** Single Select */}
          <SeFiltration
            label="Products - single select"
            collapsed={this.state.isCollapsed}
          >
            <SeList option="dropdown" selected-color="primary">
              {demoItems.map(li => (
                <SeListItem
                  item={li}
                  selected={this.isSelectedProduct(li)}
                  onClick={() => this.selectProduct(li)}
                >
                  {this.isSelectedProduct(li) && (
                    <SeIcon option="button">action_delete_cross</SeIcon>
                  )}
                </SeListItem>
              ))}
            </SeList>
          </SeFiltration>
          {/** Multi select */}
          <SeFiltration
            label="Categories - multi select"
            collapsed={this.state.isCollapsed}
          >
            <SeList option="dropdown" selected-color="primary">
              <SeListItem
                item="Select All"
                onClick={() => this.selectAllCategories()}
              >
                <SeCheckbox
                  selected={this.areAllCategoriesSelected()}
                  slot="start"
                ></SeCheckbox>
              </SeListItem>
              {categories.map(li => (
                <SeListItem item={li} onClick={() => this.selectCategory(li)}>
                  <SeCheckbox
                    selected={this.isSelectedCategory(li)}
                    slot="start"
                  ></SeCheckbox>
                </SeListItem>
              ))}
            </SeList>
          </SeFiltration>
          {/** Date range */}
          <SeFiltration label="Date Range" collapsed={this.state.isCollapsed}>
            <SeBlock margin="medium">
              <SeFormField
                label="Start date"
                option="stacked"
                type="input"
                block
              >
                <input
                  id="startdate"
                  name="startDate"
                  type="date"
                  value={this.state.dateRange.startDate}
                  onChange={this.setRangeDate}
                />
              </SeFormField>
              <SeFormField label="End date" option="stacked" type="input" block>
                <input
                  id="enddate"
                  name="endDate"
                  type="date"
                  onChange={this.setRangeDate}
                />
              </SeFormField>
              <SeButton
                disabled={!this.isValidDateRange()}
                color="secondary"
                option="outline"
              >
                OK
              </SeButton>
            </SeBlock>
          </SeFiltration>
          {/** Search order results */}
          <SeFiltration
            label="Search order results"
            collapsed={this.state.isCollapsed}
          >
            <SeBlock margin="medium">
              <SeFormField
                label="Order number"
                option="stacked"
                type="input"
                block
              >
                <input id="ordernumber" name="ordernumber" type="text" />
              </SeFormField>
              <SeFormField
                label="Purchase order number"
                option="stacked"
                type="input"
                block
              >
                <input
                  id="purchaseordernumber"
                  name="purchaseordernumber"
                  type="text"
                />
              </SeFormField>
              <SeFormField
                label="Catalog number"
                option="stacked"
                type="input"
                block
              >
                <input id="catalognumber" name="catalognumber" type="text" />
              </SeFormField>
              <SeButton color="secondary" option="outline">
                OK
              </SeButton>
            </SeBlock>
          </SeFiltration>
        </SeBlock>
        <SeDivider option="vertical"></SeDivider>
        <SeBlock>
          <SeBlockHeader>Result</SeBlockHeader>
          <SeBlockContent>
            <div>
              <h4>Selected Product</h4> ::{' '}
              {this.state.selectedProduct || 'Nothing selected'}
            </div>
            <div>
              <h4>Selected Categories:</h4>
              {this.state.selectedCategories.length ? (
                <ul>
                  {this.state.selectedCategories.map((item: any) => (
                    <li>&raquo; {item}</li>
                  ))}
                </ul>
              ) : (
                <div>No categories selected</div>
              )}
            </div>
            <div>
              <h4>Date Range:</h4>
              <div>
                Start date: <code>{this.state.dateRange.startDate}</code> | End
                date: <code>{this.state.dateRange.endDate}</code>
              </div>
            </div>
          </SeBlockContent>
        </SeBlock>
      </SeContainer>
    );
  }
}
export default Filtration;
