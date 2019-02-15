import React, {Component} from 'react';

class DefaultLayout extends Component {
  render() {
    return (
      <se-app>
        {this.props.children}
      </se-app>
    );
  }
}

export default DefaultLayout;

