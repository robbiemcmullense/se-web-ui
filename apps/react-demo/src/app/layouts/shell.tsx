import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import { SeContainer, SeBlock, SeBlockHeader, SeButton, SeSidemenuItem, SeBlockContent, SeChip, SeTabbar, SeAbout, SeHeader, SeSidemenu, SeBlockFooter } from '@se/web-ui-react';

class ShellLayout extends Component {
  render() {
    return (
      <SeContainer position="absolute" direction="column">
        <SeHeader appTitle="React Advisor">
          <SeSidemenu link="google.com">
            <SeSidemenuItem item="About">
              <SeAbout appTitle="React Advisor" version="123"></SeAbout>
            </SeSidemenuItem>
            <SeSidemenuItem item="Sidenav 2" active={true}>
              <SeBlock>
                <SeBlockHeader>some widget design</SeBlockHeader>
                <SeBlockContent>
                  <SeChip id="SeChip" value="Chip 01"></SeChip>
                </SeBlockContent>
                <SeBlockFooter>
                    <SeButton option="raised" color="primary">RaisedGreen</SeButton>
                </SeBlockFooter>
              </SeBlock>
            </SeSidemenuItem>
            <SeSidemenuItem item="Sidenav 3">
              <div>A simple div</div>
            </SeSidemenuItem>
          </SeSidemenu>
        </SeHeader>
        <SeTabbar color="primary">
          <nav slot="start">Tenant: <a className="dropdown" href=""> test </a></nav>
          <nav>
            <NavLink to="/" exact={true} activeClassName='active'>Home</NavLink>
            <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
            <NavLink to='/icons' activeClassName='active'>Icons</NavLink>
          </nav>
          <nav slot="end">
            <a href="">End</a>
          </nav>
        </SeTabbar>
        {this.props.children}
      </SeContainer>
    );
  }
}

export default ShellLayout;
