import React, { Component } from "react";
import "./widget.scss";
import { SeBlock, SeBlockHeader, SeButton, SeBlockContent, SeBlockFooter, SeCheckbox, SeIcon, SeDivider } from '@se/web-ui-react';

interface WidgetProps{
  name: string;
  key: number;
}


class Widget extends Component<WidgetProps> {
  customAlert = (data) => {
    alert(`switch: ${data.detail.selected}`);
  }

  render() {

    return [
      <SeBlock divider>
        <SeBlockHeader>
          <div slot="end">
              <SeIcon option="button" color="alternative">favourites_addto</SeIcon>
              <SeIcon option="button" color="alternative">other_vertical</SeIcon>
          </div>
          {this.props.name}
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
