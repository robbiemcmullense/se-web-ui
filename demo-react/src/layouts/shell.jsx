import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class ShellLayout extends Component {
  render() {
    return (
      <se-container position="absolute" direction="column">
        <se-header app-title="React Advisor"></se-header>
        <se-tabbar color="primary">
          <nav slot="start">Tenant: <a className="dropdown" href=""> test </a></nav>
          <nav>
            <NavLink to="/" exact={true} activeClassName='active'>Home</NavLink>
            <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
            <NavLink to='/icons' activeClassName='active'>Icons</NavLink>
          </nav>
          <nav slot="end">
            <a href="">End</a>
          </nav>
        </se-tabbar>
        {this.props.children}
      </se-container>
    );
  }
}

export default ShellLayout;
