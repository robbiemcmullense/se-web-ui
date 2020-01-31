import React, { Component } from "react";
import "./widget.scss";
import {  SeBlock, SeBlockHeader, SeButton, SeBlockContent, SeBlockFooter, SeCheckbox, SeIcon, SeDivider } from '@se/web-ui-react';

class Widget extends Component {
  customAlert = (data) => {
    alert(`switch ${this.props.name}: ${data.detail.selected}`);
  }

  render() {
    const { name, match } = this.props;

    return [
      <SeBlock>
        <SeBlockHeader>
        {name || match.params.id}
          <div slot="end">
              <SeIcon option="button" color="alternative">favourites_addto</SeIcon>
              <SeIcon option="button" color="alternative">other_vertical</SeIcon>
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <div className="mycoolstyle">my content</div>
          <ul>
            <SeCheckbox option="switch" onDidChange={this.customAlert} />
          </ul>

        </SeBlockContent>
        <SeBlockFooter>
          <SeButton>Apply</SeButton>
        </SeBlockFooter>
      </SeBlock>,
      <SeDivider option="vertical"></SeDivider>
    ];
  }
}

export default Widget;
