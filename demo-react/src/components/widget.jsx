import React, { Component } from "react";
import "./widget.scss";
// import { wc } from '../utils/webComponent';

class Widget extends Component {
  customAlert(data) {
    alert(`switch ${this.props.name}: ${data.detail.selected}`);
  }
  componentDidMount() {
    this.switchCmp.addEventListener("didChange", e => this.customAlert(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didChange", e => this.customAlert(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

  render() {
    const { name, match } = this.props;

    return [
      <se-block>
        <se-block-header>
        {name || match.params.id}
          <div slot="end">
              <se-icon option="button" color="alternative">favourites_addto</se-icon>
              <se-icon option="button" color="alternative">other_vertical</se-icon>
          </div>
        </se-block-header>
        <se-block-content>
          <div className="mycoolstyle">my content</div>
          <ul>
            <se-checkbox option="switch" ref={this._handleRef} />
          </ul>

        </se-block-content>
        <se-block-footer>
          <se-button>Apply</se-button>
        </se-block-footer>
      </se-block>,
      <se-divider option="vertical"></se-divider>
    ];
  }
}

export default Widget;
