import React, { Component } from 'react';
import {
  SeContainer,
  SeBlock,
  SeBlockHeader,
  SeBlockFooter,
  SeButton,
  SeBlockContent,
  SeCheckbox,
  SeList,
  SeListItem,
  SeListGroup,
  SeDivider,
  SeStepper,
  SeStepperItem,
  SeDialogHeader,
  SeDialog,
  SeDialogContent,
  SeIcon,
  SeDialogFooter,
  SeFiltration,
  SeFormField,
} from '@se/web-ui-react';

// import Widget from '../components/widget';

import './dashboard.scss';

interface DashboardProps {
  location: any;
}

const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

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

class Dashboard extends Component<DashboardProps> {
  state = {
    listItems,
    searchText: '',
    scrollable: false,
    scrollCategories: false,
    scrollProducts: true,
    canViewProducts: false,
    viewMoreProducts: true,
    numItems: minItems,
    listHeight: '220px',
    selectedProduct: '',
    selectedCategories: [],
    isDlgOpen: false,
    scrollPage: false,
    dateRange: {
      startDate: null,
      endDate: null,
    },
    formFields: [
      { id: 'firstname', label: 'First Name', hint: 'enter first name' },
      { id: 'lastname', label: 'Last Name', hint: 'enter last name' },
      { id: 'city', label: 'City', hint: 'enter city' },
      { id: 'postalcode', label: 'Postal Code', hint: 'enter postal code' },
      {
        id: 'primaryskill',
        label: 'Primary Skill',
        hint: 'enter primary skill',
      },
      { id: 'otherskills', label: 'Other Skills', hint: 'enter other skills' },
      { id: 'jobtitle', label: 'Job Title', hint: 'job title' },
      { id: 'graduation', label: 'Graduation', hint: 'graduation' },
      {
        id: 'postgraduation',
        label: 'Post Graduation',
        hint: 'post graduation',
      },
    ],
  };

  changePage(i) {
    // this.props.history.push(`/dashboard/${i}`)
  }
  removeLastListItem = () => {
    console.log('Before Remove Last List Item was run', listItems);
    listItems.pop();
    this.setState({ listItems: listItems });
    console.log('After Remove Last List Item was run', listItems);
  };

  addNewListItem = () => {
    console.log('Before Add New List Item was run', listItems);
    listItems.push('New Item - Test');
    this.setState({ listItems: listItems });
    console.log('After Add New List Item was run', listItems);
  };

  handleDidSearch = evt => {
    this.setState({ searchText: evt.detail });
  };

  handleViewMore = evt => {
    const ok = evt.detail === 'yes';
    this.setState({ numItems: ok ? demoItems.length : minItems });
    // console.log('handleViewMore: evt:', evt ,' | ', this.state.numItems);
  };
  setListHeight = () => {
    const listht = this.state.listHeight === '220px' ? '400px' : '220px';
    this.setState({ listHeight: listht });
    this.setState({
      numItems: listht === '400px' ? demoItems.length : minItems,
    });
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

  selectAllCategories() {
    let selectedCategories = [];
    if (this.state.selectedCategories.length !== categories.length) {
      selectedCategories = [...categories];
    } else {
      selectedCategories = [];
    }
    this.setState({ selectedCategories: selectedCategories });
  }

  isSelectedCategory = (li: any) => {
    return this.state.selectedCategories.filter(f => f === li).length > 0;
  };

  handleViewMoreProducts = () => {
    this.setState({ viewMoreProducts: !this.state.viewMoreProducts });
    this.setState({
      numItems: this.state.viewMoreProducts ? demoItems.length : minItems,
    });
  };
  openDialog = () => {
    this.setState({ isDlgOpen: true });
  };
  closeDialog = () => {
    this.setState({ isDlgOpen: false });
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

  render() {
    console.log('ID', this.props);
    return (
      <SeContainer>
        <SeBlock>
          <SeBlockHeader>
            List classic with expender
            <div slot="end">
              <SeButton onClick={this.removeLastListItem} option="raised">
                Remove Last List Item
              </SeButton>
              <SeButton onClick={this.addNewListItem} option="raised">
                Add New List Item
              </SeButton>
            </div>
          </SeBlockHeader>
          <SeBlockContent>
            <nav>
              <SeList option="treeview">
                <SeListItem item="Static item"></SeListItem>
                <SeListGroup item="New Block" id="testing-list-group">
                  {listItems.map(id => {
                    return (
                      <SeListItem
                        key={id}
                        item={`my item ${id}`}
                        onClick={() => this.changePage(id)}
                        icon="user_standard"
                        selected={
                          this.props.location.pathname === `/dashboard/${id}`
                        }
                        iconColor="primary"
                        description={`I have a description ${id}`}
                      />
                    );
                  })}
                </SeListGroup>
              </SeList>
            </nav>
          </SeBlockContent>
        </SeBlock>
        <SeDivider option="vertical"></SeDivider>
        <SeBlock>
          <SeBlockHeader>Stepper Example</SeBlockHeader>
          <SeBlockContent>
            <div>Default/Linear</div>
            <SeStepper>
              <SeStepperItem label="Step 1"></SeStepperItem>
              <SeStepperItem label="Step 2"></SeStepperItem>
              <SeStepperItem label="Step 3"></SeStepperItem>
            </SeStepper>
            <div>Non-linear</div>
            <SeStepper linear={false}>
              <SeStepperItem label="Step 1"></SeStepperItem>
              <SeStepperItem label="Step 2"></SeStepperItem>
              <SeStepperItem label="Step 3"></SeStepperItem>
            </SeStepper>
            <div>Third active + linear (first & second are validated)</div>
            <SeStepper>
              <SeStepperItem label="Step 1" validated={true}></SeStepperItem>
              <SeStepperItem label="Step 2" validated={true}></SeStepperItem>
              <SeStepperItem label="Step 3" active={true}></SeStepperItem>
              <SeStepperItem label="Step 4"></SeStepperItem>
            </SeStepper>
            <div>Fourth active + linear (second is not validated)</div>
            <SeStepper>
              <SeStepperItem label="Step 1" validated={true}></SeStepperItem>
              <SeStepperItem label="Step 2" validated={false}></SeStepperItem>
              <SeStepperItem label="Step 3" validated={true}></SeStepperItem>
              <SeStepperItem label="Step 4" active={true}></SeStepperItem>
            </SeStepper>
            <div>Third active + non-linear</div>
            <SeStepper linear={false}>
              <SeStepperItem label="Step 1"></SeStepperItem>
              <SeStepperItem label="Step 2"></SeStepperItem>
              <SeStepperItem label="Step 3" active={true}></SeStepperItem>
              <SeStepperItem label="Step 4"></SeStepperItem>
            </SeStepper>
          </SeBlockContent>
        </SeBlock>
        <SeDivider option="vertical"></SeDivider>
        <SeBlock>
          <div>Filtration demo</div>
          {/** Single Select */}
          <SeFiltration
            label={`Product type - single select`}
            onDidSearch={this.handleDidSearch}
          >
            <SeList>
              {demoItems
                .filter(f => new RegExp(this.state.searchText, 'gi').test(f))
                .map((li, idx) => (
                  <SeListItem
                    selected={this.state.selectedProduct === li}
                    onClick={() => this.selectProduct(li)}
                    key={idx}
                    item={li}
                  >
                    {this.state.selectedProduct === li && (
                      <SeIcon option="button">action_delete_cross</SeIcon>
                    )}
                  </SeListItem>
                ))}
            </SeList>
          </SeFiltration>
          {/** Category */}
          <SeFiltration
            label={`Category - Mullti select`}
            onDidSearch={this.handleDidSearch}
          >
            <SeListItem
              item="Select All"
              onClick={() => this.selectAllCategories()}
            >
              <SeCheckbox
                slot="start"
                selected={
                  this.state.selectedCategories.length === categories.length
                }
              ></SeCheckbox>
            </SeListItem>
            {categories
              .filter(f => new RegExp(this.state.searchText, 'gi').test(f))
              .map((li, idx) => (
                <SeListItem
                  onClick={() => this.selectCategory(li)}
                  key={idx}
                  item={`${li}`}
                >
                  <SeCheckbox
                    slot="start"
                    value={li}
                    selected={this.isSelectedCategory(li)}
                  />
                </SeListItem>
              ))}
          </SeFiltration>

          {/** Date range */}
          <SeFiltration label="Date Range">
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
          <SeFiltration label="Search order results">
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
      </SeContainer>
    );
  }
}

export default Dashboard;
