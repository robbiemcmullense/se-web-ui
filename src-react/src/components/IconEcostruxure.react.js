import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IconEcostruxure extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, size, children } = this.props;
		return (
			<se-icon-ecostruxure color={color} size={size} >{children}</se-icon-ecostruxure>
		);
	}
}

IconEcostruxure.defaultProps = {};

IconEcostruxure.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the color of the logo.
   * `standard`: displays a light green / dark green conventional SE logo.
   * `inherited`: default option, which takes the color from it's parent.
   */
  color: PropTypes.string,
  /**
   * Sets the size of the EcoStruxure icon.  The default setting is `small`.
   */
  size: PropTypes.string
};