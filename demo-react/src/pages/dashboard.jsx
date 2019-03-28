import React, { Component } from "react";
import { Route} from "react-router-dom"
// import { Match } from "@reach/router"

import Widget from '../components/widget';

import "./dashboard.scss";

class Dashboard  extends Component {
  changePage(i) {
    this.props.history.push(`/dashboard/${i}`)
  }
  render() {
    console.log('ID', this.props)
    return (
      <se-container option="widget">
        <se-widget width="250px">
          <se-widget-header>List classic with expender</se-widget-header>
          <se-widget-content option="fill">
            <se-list>
            {[1,2,3,4,5,6,7].map( id => {
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
            </se-list>
          </se-widget-content>
        </se-widget>

        <se-widget>
          <Route path={`/dashboard/:id`} component={Widget}/>
        </se-widget>
      </se-container>
    );
  }
}

export default Dashboard;
