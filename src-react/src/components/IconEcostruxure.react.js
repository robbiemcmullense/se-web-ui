import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IconEcostruxure extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { size, children } = this.props;
		return (
			<se-icon-ecostruxure size={size} >{children}</se-icon-ecostruxure>
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
   * Sets the size of the EcoStruxure icon.  The default setting is `small`.
   */
  size: PropTypes.string
};