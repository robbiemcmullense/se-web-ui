import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import { SeContainer, SeBlock, SeBlockHeader, SeButton, SeSidemenuItem, SeBlockContent, SeChip, SeTabbar, SeAbout, SeHeader, SeSidemenu, SeBlockFooter, SeIcon } from '@se/web-ui-react';

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
          <nav>
            <NavLink to="/" exact={true} >Home</NavLink>
            <NavLink to='/docs' activeClassName="none" className="group-label">
              Extra
              <SeIcon size="medium">arrow2_right</SeIcon>
            </NavLink>
            <ul className="sub-nav">
              <NavLink to='/docs' >Docs</NavLink>
              <NavLink to='/table' >Table</NavLink>
            </ul>
            <NavLink to='/dashboard' >Dashboard</NavLink>
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
