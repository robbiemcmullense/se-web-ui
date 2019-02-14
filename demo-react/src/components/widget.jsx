import React, {Component} from 'react';
import './widget.scss';
// import { wc } from '../utils/webComponent';

class Widget extends Component {
  customAlert(data) {
    alert(`switch ${data.detail.active} ${this.props.name}`)
  }
  componentDidMount() {
    this.switchCmp.addEventListener('change', (e) => this.customAlert(e));
  }

  componentWillUnmount() {
      this.switchCmp.removeEventListener('change', (e) => this.customAlert(e));
  }

  _handleRef = (component) => {
    this.switchCmp = component;
  };

  render() {
    const { name } = this.props;

    return (
      <se-widget>
        <se-widget-header>{name}</se-widget-header>
        <se-widget-content>
            <div className="mycoolstyle">my content</div>
            <ul>
              <se-switch-on-off active="on" inactive="off"  ref={this._handleRef}/>
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
