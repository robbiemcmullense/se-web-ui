import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class ShellLayout extends Component {
  render() {
    return (
      <span className="se-app-body">
        <se-header app-title="React Advisor"></se-header>
        <se-navbar color="primary">
          <nav slot="start">Tenant: <a className="dropdown" href=""> test </a></nav>
          <nav>
            <NavLink to="/" exact={true} activeClassName='active'>Home</NavLink>
            <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
            <NavLink to='/icons' activeClassName='active'>Icons</NavLink>
          </nav>
          <nav slot="end">
            <a href="">End</a>
          </nav>
        </se-navbar>
        {this.props.children}
      </span>
    );
  }
}

export default ShellLayout;
