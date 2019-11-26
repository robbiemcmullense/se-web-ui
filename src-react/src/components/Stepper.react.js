import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Stepper extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  optionSelected(e) {
    this.props.onOptionSelected && this.props.onOptionSelected(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("optionSelected", e => this.optionSelected(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("optionSelected", e => this.optionSelected(e));
  }

	render() {
		const { color, linear, validated, optionSelected, children } = this.props;
		return (
			<se-stepper color={color} linear={linear} validated={validated} ref={this._handleRef} >{children}</se-stepper>
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
The default setting is `primary`, implementing a green background for the stepper visual items.
The `alternative` setting implements a white background for the stepper visual items.  This setting is best used against a gray background.
   */
  color: PropTypes.string,
  /**
   * Defines if the stepper items must be completed sequentially.  The default setting is `false`.
   */
  linear: PropTypes.bool,
  /**
   * Set the validated property to true when a form field tied to a required step has the required input data.
The default setting is `false`.
   */
  validated: PropTypes.bool,
  /**
   * Emits an event to the parent component that a new stepper item has been selected.
   */
  optionSelected: PropTypes.func
};