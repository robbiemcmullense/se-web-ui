import React, { Component } from 'react';

const widgetStyle = {
  width: '300px'
}
class Dashboard extends Component {
  render() {
    return (
      <se-widget-container>
        <se-widget style={widgetStyle}>
          <se-widget-header>Filter</se-widget-header>
          <se-widget-content>
            <div className="mycoolstyle">my content</div>
            <ul>
              ...
            </ul>
            <se-switch-on-off id="switch" text-on="ON" text-off="OFF" />
            <span id="switch-state"></span>
          </se-widget-content>
          <se-widget-footer>
            <se-button appearance="standard">Apply</se-button>
            <se-button appearance="raised">Apply</se-button>
          </se-widget-footer>
        </se-widget>
      </se-widget-container>
    );
  }
}

export default Dashboard;
