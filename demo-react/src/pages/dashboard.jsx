import React, { Component } from "react";
import { Route} from "react-router-dom"
// import { Match } from "@reach/router"
import { SeContainer, SeBlock, SeBlockHeader, SeButton, SeBlockContent, SeList, SeListItem, SeListGroup, SeDivider } from '@se/web-ui-react';

import Widget from '../components/widget';

import "./dashboard.scss";

let listItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
  ];

class Dashboard extends Component {
  state = {
    listItems
  }

  changePage(i) {
    this.props.history.push(`/dashboard/${i}`)
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
        <SeBlock width="250px">
          <SeBlockHeader>List classic with expender
            <div slot="end">
            <SeButton onClick={this.removeLastListItem} option="raised">Remove Last List Item</SeButton>
            <SeButton onClick={this.addNewListItem} option="raised">Add New List Item</SeButton>
            </div>
          </SeBlockHeader>
          <SeBlockContent option="fill">
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
          <Route path={`/dashboard/:id`} component={Widget}/>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default Dashboard;
