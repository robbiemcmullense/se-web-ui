import React, { Component } from "react";
import "./widget.scss";
// import { wc } from '../utils/webComponent';

class Widget extends Component {
  customAlert(data) {
    alert(`switch ${data.detail.active} ${this.props.name}`);
  }
  componentDidMount() {
    this.switchCmp.addEventListener("change", e => this.customAlert(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("change", e => this.customAlert(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

  render() {
    const { name, match } = this.props;

    return (
      <se-widget mode="fill">
        <se-widget-header>
        {name || match.params.id}
          <div slot="end">
              <se-icon mode="button" color="alternative">favourites_addto</se-icon>
              <se-icon mode="button" color="alternative">other_vertical</se-icon>
          </div>
        </se-widget-header>
        <se-widget-content>
          <div className="mycoolstyle">my content</div>
          <ul>
            <se-radio-on-off ref={this._handleRef} />
          </ul>

        </se-widget-content>
        <se-widget-footer>
          <se-button>Apply</se-button>
        </se-widget-footer>
      </se-widget>
    );
  }
}

export default Widget;
