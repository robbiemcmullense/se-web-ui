import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IconLifeison extends Component {
	render() {
		const { color, children } = this.props;
		return (
			<se-icon-lifeison color={color} ref={this._handleRef}>{children}</se-icon-lifeison>
		);
	}
}

IconLifeison.defaultProps = {};

IconLifeison.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the color of the logo.
   * `standard`: displays a light green / dark green conventional SE logo.
   * `inherited`: default option, which takes the color from it's parent.
   */
  color: PropTypes."inherited" | "standard"
};