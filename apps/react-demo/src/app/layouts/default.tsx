import React, {Component} from 'react';
import { SeApp, SeLoading } from '@se/web-ui-react';

class DefaultLayout extends Component {
  render() {
    return (
      <SeApp>
        {this.props.children}
      </SeApp>
    );
  }
}

export default DefaultLayout;

