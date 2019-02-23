import React, {Component} from 'react';
// import { NavLink } from 'react-router-dom'

class ShellLayout extends Component {
  render() {
    return (
      <span className="se-app-body">
        <se-header app-title="Template Editor" domain="none"></se-header>
        <se-navbar></se-navbar>
        {this.props.children}
      </span>
    );
  }
}

export default ShellLayout;
