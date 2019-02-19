import React, { Component } from 'react';
import "./dashboard.scss";

const widgetStyle = {
  width: '300px'
}
class Dashboard extends Component {
  render() {
    return (
      <se-container mode="widget">
        <se-widget style={widgetStyle}>
          <se-widget-header>Filter</se-widget-header>
          <se-widget-content>
          <div className="button-row">
            <se-button mode="flat" color="error">
              Warning
            </se-button>
            <se-button mode="login" value="myLoginValue">
              Login
            </se-button>
            <se-button mode="signup">Sign Up</se-button>
            <se-button mode="outline">Outline</se-button>
          </div>
          <div class="button-row">
            <se-button mode="flat">Flat</se-button>
            <se-button mode="flat" color="primary">
              FlatGreen
            </se-button>
            <se-button mode="raised">Raised</se-button>
            <se-button mode="raised" color="primary">
              RaisedGreen
            </se-button>
            <se-button mode="text">Text</se-button>
            <se-button mode="text" color="primary">
              Primary
            </se-button>
          </div>
          </se-widget-content>
          <se-widget-footer>
            <se-button mode="raised">Apply</se-button>
          </se-widget-footer>
        </se-widget>
      </se-container>
    );
  }
}

export default Dashboard;
