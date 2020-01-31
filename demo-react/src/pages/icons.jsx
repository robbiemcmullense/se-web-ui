import React, { Component } from 'react';
import { SeContainer, SeBlock, SeBlockHeader, SeButton, SeBlockContent, SeCheckbox, SeBlockFooter } from '@se/web-ui-react';

const widgetStyle = {
  width: '300px'
}

class Icons extends Component {
  render() {
    return (
      <SeContainer>
        <SeBlock style={widgetStyle}>
          <SeBlockHeader>Icons</SeBlockHeader>

          <SeBlockContent>
            <div className="mycoolstyle">my content</div>
            <ul>
              ...
            </ul>
            <SeCheckbox ref={this._handleRef}></SeCheckbox>
          </SeBlockContent>
          <SeBlockFooter>
          <SeButton option="raised">Raised</SeButton>
            <SeButton option="raised" color="primary">
              RaisedGreen
            </SeButton>
            <SeButton option="text">Text</SeButton>
            <SeButton option="text" color="primary">
              Primary
            </SeButton>
          </SeBlockFooter>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default Icons;
