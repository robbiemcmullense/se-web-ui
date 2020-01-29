import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class ShellLayout extends Component {
  render() {
    return (
      <se-container position="absolute" direction="column">
        <se-header app-title="React Advisor">
          <se-sidemenu link="google.com">
            <se-sidemenu-item item="About">
              <se-about app-title="React Advisor" version="123"></se-about>
            </se-sidemenu-item>
            <se-sidemenu-item item="Sidenav 2" active="true">
              <se-block option="fill">
                <se-block-header>some widget design</se-block-header>
                <se-block-content>
                  <se-chip id="se-chip" value="Chip 01"></se-chip>
                </se-block-content>
                <se-block-footer>
                    <se-button option="raised" color="primary">RaisedGreen</se-button>
                </se-block-footer>
              </se-block>
            </se-sidemenu-item>
            <se-sidemenu-item item="Sidenav 3">
              <div>A simple div</div>
            </se-sidemenu-item>
          </se-sidemenu>
        </se-header>
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
