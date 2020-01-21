import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, option, children } = this.props;
		return (
			<se-tabbar color={color} option={option} >{children}</se-tabbar>
		);
	}
}

Tabbar.defaultProps = {};

Tabbar.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the color of your tab bar.
   * Default setting is `primary`, rendering a green background for nav-bars and ultra-light-grey-1 for content.
   * The `alternative` setting renders a white background.
   */
  color: PropTypes.string,
  /**
   * Defines the function of the tabbar.
   * Default `nav` creates a tab bar that functions as a nav-bar.
   * `content` creates a ta bbar that functions as a content section tab bar.
   */
  option: PropTypes.string
};