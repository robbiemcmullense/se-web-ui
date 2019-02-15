import React, { Component } from 'react';

const widgetStyle = {
  width: '300px'
}

class Icons extends Component {
  render() {
    return (
      <se-widget-container>
        <se-widget style={widgetStyle}>
          <se-widget-header>Icons</se-widget-header>

          <se-widget-content>
            <div className="mycoolstyle">my content</div>
            <ul>
              ...
            </ul>
            <se-radio-on-off ref={this._handleRef}></se-radio-on-off>
          </se-widget-content>
          <se-widget-footer>
          <se-button mode="raised">Raised</se-button>
            <se-button mode="raised" color="primary">
              RaisedGreen
            </se-button>
            <se-button mode="text">Text</se-button>
            <se-button mode="text" color="primary">
              Primary
            </se-button>
          </se-widget-footer>
        </se-widget>
      </se-widget-container>
    );
  }
}

export default Icons;
