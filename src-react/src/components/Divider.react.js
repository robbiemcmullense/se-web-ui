import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Divider extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, option, children } = this.props;
		return (
			<se-divider color={color} option={option} >{children}</se-divider>
		);
	}
}

Divider.defaultProps = {};

Divider.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the color schema of your divider line.
Default setting is `standard`, rendering a light gray colored line.
The `alternative` property sets a white colored divider line.
   */
  color: PropTypes.string,
  /**
   * Indicates the visual appearance of your divider line.  Default setting is `horizontal`.
   */
  option: PropTypes.string
};