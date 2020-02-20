import React, { Component } from "react";
import { SeContainer, SeBlock, SeBlockHeader, SeButton, SeBlockContent, SeList, SeListItem, SeListGroup, SeDivider, SeStepper, SeStepperItem } from '@se/web-ui-react';

import Widget from '../components/widget';

import "./dashboard.scss";

interface DashboardProps{
  location: any;
}


const listItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
  ];

class Dashboard extends Component<DashboardProps> {
  state = {
    listItems
  }

  changePage(i) {
    // this.props.history.push(`/dashboard/${i}`)
  }
  removeLastListItem = () => {
    console.log("Before Remove Last List Item was run", listItems);
    listItems.pop();
    this.setState({listItems:listItems});
    console.log("After Remove Last List Item was run", listItems)
  }

  addNewListItem = () => {
    console.log("Before Add New List Item was run", listItems);
    listItems.push("New Item - Test");
    this.setState({listItems:listItems});
    console.log("After Add New List Item was run", listItems);
  }

  render() {
    console.log('ID', this.props)
    return (
      <SeContainer>
        <SeBlock>
          <SeBlockHeader>List classic with expender
            <div slot="end">
            <SeButton onClick={this.removeLastListItem} option="raised">Remove Last List Item</SeButton>
            <SeButton onClick={this.addNewListItem} option="raised">Add New List Item</SeButton>
            </div>
          </SeBlockHeader>
          <SeBlockContent>
            <SeList option="treeview">
              <SeListItem item="Static item"></SeListItem>
              <SeListGroup item="New Block" id="testing-list-group">
                {listItems.map( id => {
                  return(
                      <SeListItem
                        key={id}
                        item={`my item ${id}`}
                        onClick={() => this.changePage(id)}
                        icon="user_standard"
                        selected={this.props.location.pathname === `/dashboard/${id}`}
                        iconColor="primary"
                        description={`I have a description ${id}`}
                      />
                  );
                })}
              </SeListGroup>
            </SeList>
          </SeBlockContent>
        </SeBlock>
        <SeDivider option="vertical"></SeDivider>
        <SeBlock>
          <SeBlockHeader>Stepper Example</SeBlockHeader>
          <SeBlockContent>
            <SeStepper linear={false}>
              <SeStepperItem label="Step 1"></SeStepperItem>
              <SeStepperItem label="Step 2"></SeStepperItem>
              <SeStepperItem label="Step 3"></SeStepperItem>
            </SeStepper>
          </SeBlockContent>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default Dashboard;
