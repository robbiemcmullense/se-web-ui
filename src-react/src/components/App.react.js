import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <se-app>{children}</se-app>
    );
  }
}

App.defaultProps = {};

App.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node
};
