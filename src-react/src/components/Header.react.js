import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  render() {
    const { appTitle, children } = this.props;
    return (
      <se-header app-title={appTitle}>{children}</se-header>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * The title that will be printed when this component is rendered.
   */
  appTitle: PropTypes.string
};
