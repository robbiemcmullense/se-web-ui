import React, {Component} from 'react';
import './widget.css';

class Widget extends Component {
    render() {
      const { name } = this.props;

      return (
        <se-widget>
          <se-widget-header>{name}</se-widget-header>
          <se-widget-content>
              <div class="mycoolstyle">my content</div>
              <ul>
                ...
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
