import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Stepper extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, linear, children } = this.props;
		return (
			<se-stepper color={color} linear={linear} >{children}</se-stepper>
		);
	}
}

Stepper.defaultProps = {};

Stepper.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Sets the background color of your stepper.
   * The default setting is `primary`, implementing a green background for the stepper visual items.
   * The `alternative` setting implements a white background for the stepper visual items.  This setting is best used against a gray background.
   */
  color: PropTypes.string,
  /**
   * Defines if the stepper items must be completed sequentially.  The default setting is `false`.
   */
  linear: PropTypes.bool
};