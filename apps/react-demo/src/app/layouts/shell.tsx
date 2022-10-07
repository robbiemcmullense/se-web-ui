import React, { Children, Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  SeContainer,
  SeBlock,
  SeBlockHeader,
  SeButton,
  SeSidemenuItem,
  SeBlockContent,
  SeTabbar,
  SeAbout,
  SeHeader,
  SeSidemenu,
  SeBlockFooter,
  SeIcon,
  SeDropdown,
  SeList,
  SeListItem,
} from '@se/web-ui-react';


class ShellLayout extends Component {

 
  render() {
    return (
      <SeContainer position="absolute" direction="column">
        <SeHeader appTitle="React Advisor">
          <div slot="end">
            <SeDropdown alignment="right">
              <SeIcon slot="trigger" option="button">
                action_download_stroke
              </SeIcon>
            </SeDropdown>
          </div>
          <SeSidemenu link="">
            <SeSidemenuItem item="About">
              <SeAbout
                appTitle="React Advisor"
                version="123"
                imageUrl="url('https://schneider-electric.box.com/shared/static/7hp8f04wj8lclpxn8jonti616lvim3zl.jpg')"
              ></SeAbout>
            </SeSidemenuItem>
            <SeSidemenuItem item="Sidenav 2" active>
              <SeBlock>
                <SeBlockHeader>some widget design</SeBlockHeader>
                <SeBlockContent option="fill">
                  <SeContainer option="card" display="block">
                    {[1, 2, 3, 4, 5, 6].map((nextVersion, index) => (
                      <SeBlock key={index} height="300px">
                        <SeBlockHeader>
                          H3 Buttons and Form
                          <div slot="end">
                            <SeDropdown
                              alignment="right"
                              verticalAlignment={index > 2 ? 'top' : 'bottom'}
                            >
                              <SeIcon
                                slot="trigger"
                                option="button"
                                color="alternative"
                              >
                                other_vertical
                              </SeIcon>
                              <SeList option="dropdown">
                                <SeListItem item="My Site 1"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 2"></SeListItem>
                                <SeListItem item="My Site 3"></SeListItem>
                              </SeList>
                            </SeDropdown>
                          </div>
                        </SeBlockHeader>
                        <SeBlockContent>
                          <SeDropdown
                            alignment="right"
                            verticalAlignment={index > 2 ? 'top' : 'bottom'}
                          >
                            <SeIcon
                              slot="trigger"
                              option="button"
                              color="alternative"
                            >
                              other_vertical
                            </SeIcon>
                            <SeList option="dropdown">
                              <SeListItem item="My Site 1"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 2"></SeListItem>
                              <SeListItem item="My Site 3"></SeListItem>
                            </SeList>
                          </SeDropdown>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                          <h1> title </h1>
                        </SeBlockContent>
                      </SeBlock>
                    ))}
                  </SeContainer>
                </SeBlockContent>
                <SeBlockFooter>
                  <SeButton option="raised" color="primary">
                    RaisedGreen
                  </SeButton>
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
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
            <NavLink to="/docs" activeClassName="none" className="group-label">
              Extra
              <SeIcon size="micro">arrow2_right</SeIcon>
            </NavLink>
            <ul className="sub-nav">
              <NavLink to="/docs">Docs</NavLink>
              <NavLink to="/table">Table</NavLink>
            </ul>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/tableother">TableOther</NavLink>
            <NavLink to="/filtration">Filtration</NavLink>
            <NavLink to="/carousel">Carousel</NavLink>
          </nav>
          <nav slot="end">
            <a href="/">End</a>
          </nav>
        </SeTabbar>
        {this.props.children}
        {/* <SeLoading loading color="secondary"></SeLoading> */}
      </SeContainer>
    );
  }
}

export default ShellLayout;
