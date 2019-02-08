import React, {Component} from 'react';
import './widget.css';
import { wc } from './utils/webComponent';

class Widget extends Component {
    customAlert(data) {
      alert(`switch ${this.props.name} : ${data.active}`)
    }
    render() {
      const { name } = this.props;

      return (
        <se-widget>
          <se-widget-header>{name}</se-widget-header>
          <se-widget-content>
              <div className="mycoolstyle">my content</div>
              <ul>
                <se-switch-on-off active="on" inactive="off"
                    ref={wc({
                      switched: (e) => this.customAlert(e.detail)
                    })} />
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
