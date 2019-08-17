import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Tabbar extends Component {
	render() {
		const { color, option, children } = this.props;
		return (
			<se-tabbar color={color} option={option} ref={this._handleRef}>{children}</se-tabbar>
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
   * Default setting is `primary`, rendering a green background.
   * The `alternative` setting renders a white background.
   */
  color: PropTypes."alternative" | "primary",
  /**
   * Defines the inner appearance of a tabbar.
   * `fill` is the default option, taking the full space of the tabbar.
   * `centered` centers the tabbar so the content does not exceed a maximum width (1070px by default).
   */
  option: PropTypes."centered" | "fill"
};