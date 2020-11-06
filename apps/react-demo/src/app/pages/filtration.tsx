import React, { Component } from 'react';
import {
  SeContainer,
  SeBlock,
  SeBlockHeader,
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
  SeChip,
} from '@se/web-ui-react';

import './filtration.scss';

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
    viewMoreProducts: true,
    isCollapsed: true,
    searchProductText: '',
    searchCategoryText: '',
    dateRange: {
      startDate: '',
      endDate: '',
    },
  };

  selectProduct = (li: any = null) => {
    this.setState({
      selectedProduct: this.state.selectedProduct === li ? null : li,
    });
  };

  setProductSearch = evt => {
    this.setState({ searchProductText: evt.detail });
  };

  setCategorySearch = evt => {
    this.setState({ searchCategoryText: evt.detail });
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
    this.setState({ dateRange });
  };

  isValidDateRange = () =>
    this.state.dateRange.startDate !== null &&
    this.state.dateRange.endDate !== null &&
    this.state.dateRange.startDate < this.state.dateRange.endDate;

  resetAll = () => {
    this.setState({
      isExpanded: false,
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
        <SeBlock width="400px" margin="small">
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
            label-select="Products - single select"
            label-hint="product"
            shadow
            onDidSearch={this.setProductSearch}
          >
            <div slot="selectedItem">{this.state.selectedProduct}</div>
            <div>
              {demoItems
                .filter(f =>
                  new RegExp(this.state.searchProductText, 'gi').test(f)
                )
                .map(li => (
                  <SeListItem
                    key={li}
                    item={li}
                    selected={this.isSelectedProduct(li)}
                    onClick={() => this.selectProduct(li)}
                  >
                    {this.isSelectedProduct(li) && (
                      <SeIcon option="button">action_delete_cross</SeIcon>
                    )}
                  </SeListItem>
                ))}
            </div>
          </SeFiltration>
          {/** Multi select */}
          <SeFiltration
            label-select="Categories - multi select"
            label-hint="category"
            select-all
            onDidSearch={this.setCategorySearch}
            onDidSelectAll={() => this.selectAllCategories()}
          >
            <div slot="selectedItem">
              {this.state.selectedCategories.join(', ')}
            </div>
            <div>
              {categories
                .filter(f =>
                  new RegExp(this.state.searchCategoryText, 'gi').test(f)
                )
                .map(li => (
                  <SeListItem
                    key={li}
                    item={li}
                    onClick={() => this.selectCategory(li)}
                  >
                    <SeCheckbox
                      selected={this.isSelectedCategory(li)}
                      slot="start"
                    ></SeCheckbox>
                  </SeListItem>
                ))}
            </div>
          </SeFiltration>
          {/** Date range */}
          <SeFiltration
            label-select="Date Range"
            collapsed={this.state.isCollapsed}
          >
            <div slot="selectedItem">{`start-date: ${
              this.state.dateRange.startDate || '??'
            } | end-date: ${this.state.dateRange.endDate || '??'}`}</div>
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
                  value={this.state.dateRange.endDate}
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
          <SeFiltration label-select="Search order results">
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
                label-select="Catalog number"
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
            <SeBlock>
              <SeBlockHeader>Selected Product</SeBlockHeader>
              <SeBlockContent>
                {this.state.selectedProduct ? (
                  <SeChip
                    canClose
                    onDidClose={() => this.selectProduct()}
                    value={this.state.selectedProduct}
                  />
                ) : (
                  'Nothing selected'
                )}
              </SeBlockContent>
            </SeBlock>
            <SeDivider></SeDivider>
            <SeBlock>
              <SeBlockHeader>Selected Categories:</SeBlockHeader>
              <SeBlockContent>
                {this.state.selectedCategories.length ? (
                  <>
                    {this.state.selectedCategories.map((item: any) => (
                      <SeChip
                        canClose
                        onDidClose={() => this.selectCategory(item)}
                        value={item}
                      ></SeChip>
                    ))}
                  </>
                ) : (
                  <div>No categories selected</div>
                )}
              </SeBlockContent>
            </SeBlock>
            <SeDivider></SeDivider>
            <SeBlock>
              <SeBlockHeader>Date Range:</SeBlockHeader>
              <SeBlockContent>
                Start date: <code>{this.state.dateRange.startDate}</code> | End
                date: <code>{this.state.dateRange.endDate}</code>
              </SeBlockContent>
            </SeBlock>
          </SeBlockContent>
        </SeBlock>
      </SeContainer>
    );
  }
}
export default Filtration;
