import React, { Component } from 'react';

const widgetStyle = {
  width: '300px'
}

class Icons extends Component {
  render() {
    return (
      <se-container option="widget">
        <se-block style={widgetStyle}>
          <se-block-header>Icons</se-block-header>

          <se-block-content>
            <div className="mycoolstyle">my content</div>
            <ul>
              ...
            </ul>
            <se-radio-on-off ref={this._handleRef}></se-radio-on-off>
          </se-block-content>
          <se-block-footer>
          <se-button option="raised">Raised</se-button>
            <se-button option="raised" color="primary">
              RaisedGreen
            </se-button>
            <se-button option="text">Text</se-button>
            <se-button option="text" color="primary">
              Primary
            </se-button>
          </se-block-footer>
        </se-block>
      </se-container>
    );
  }
}

export default Icons;
