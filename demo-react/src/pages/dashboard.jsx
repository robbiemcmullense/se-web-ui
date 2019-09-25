import React, { Component } from "react";
import { Route} from "react-router-dom"
// import { Match } from "@reach/router"

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
      <se-container>
        <se-block width="250px">
          <se-block-header>List classic with expender
            <div slot="end">
            <se-button onClick={this.removeLastListItem} option="raised">Remove Last List Item</se-button>
            <se-button onClick={this.addNewListItem} option="raised">Add New List Item</se-button>
            </div>
          </se-block-header>
          <se-block-content option="fill">
            <se-list option="treeview">
              <se-list-item item="Static item"></se-list-item>
              <se-list-group item="New Block" id="testing-list-group">
                {listItems.map( id => {
                  return(
                      <se-list-item
                        key={id}
                        item={`my item ${id}`}
                        onClick={() => this.changePage(id)}
                        icon="user_standard"
                        selected={this.props.location.pathname === `/dashboard/${id}`}
                        icon-color="primary"
                        description={`I have a description ${id}`}
                      />
                  );
                })}
              </se-list-group>
            </se-list>
          </se-block-content>
        </se-block>
        <se-divider option="vertical"></se-divider>
        <se-block>
          <Route path={`/dashboard/:id`} component={Widget}/>
        </se-block>
      </se-container>
    );
  }
}

export default Dashboard;
