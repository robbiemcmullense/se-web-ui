import React, { Component } from 'react';
import './widget.scss';
import {
  SeBlock,
  SeBlockHeader,
  SeButton,
  SeBlockContent,
  SeBlockFooter,
  SeCheckbox,
  SeIcon,
  SeDivider,
  SeChip
} from '@se/web-ui-react';

interface WidgetProps {
  name: string;
  key: number;
}

class Widget extends Component<WidgetProps> {
  customAlert = data => {
    alert(`switch: ${data.detail.selected}`);
  };

  render() {
    return [
      <SeBlock divider>
        <SeBlockHeader>
          <div slot="end">
            <SeIcon option="button" color="alternative">
              favourites_addto
            </SeIcon>
            <SeIcon option="button" color="alternative">
              other_vertical
            </SeIcon>
          </div>
          {this.props.name}
        </SeBlockHeader>
        <SeBlockContent>
          <div className="mycoolstyle">my content</div>
          <ul>
            <SeCheckbox option="switch" onDidChange={this.customAlert} />
          </ul>
          <SeChip value="630 A" color="standard"></SeChip>
          <SeChip value="630 A" color="standard" selected></SeChip>
          <SeChip value="630 A" color="standard" >
            <strong slot="start">20</strong>
          </SeChip>

          <SeChip value="800 A" color="alternative"></SeChip>
          <SeChip value="800 A" color="alternative" selected></SeChip>
          <SeChip value="800 A" color="alternative">
            <strong slot="start">20</strong>
          </SeChip>

          <SeChip value="33 kV" id="33" canClose>
            <SeIcon slot="start">folder</SeIcon>
          </SeChip>
          <SeChip value="Measurement" id="measurement" canClose>
            <strong slot="start">100</strong>
          </SeChip>
          <SeChip value="Warning" id="warning"></SeChip>
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
