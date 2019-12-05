import React, { Component } from "react";
import PropTypes from "prop-types";

export default class StepperItem extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didValidate(e) {
    this.props.onDidValidate && this.props.onDidValidate(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didValidate", e => this.didValidate(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didValidate", e => this.didValidate(e));
  }

	render() {
		const { active, isLast, label, step, validated, didValidate, children } = this.props;
		return (
			<se-stepper-item active={active} is-last={isLast} label={label} step={step} validated={validated} ref={this._handleRef} >{children}</se-stepper-item>
		);
	}
}

StepperItem.defaultProps = {};

StepperItem.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the content for the currently selected step in the stepper.
   */
  active: PropTypes.bool,
  /**
   * Indicates whether or not the stepper item is the last item in the stepper component.  The default setting is `false`.
   */
  isLast: PropTypes.bool,
  /**
   * Indicates the label for your stepper item.
   */
  label: PropTypes.string,
  /**
   * Indicates the numerical position of the stepper item within the stepper component.
   */
  step: PropTypes.number,
  /**
   * Indicates whether a required item's data has been validated.  Useful if using a form field.
   */
  validated: PropTypes.bool,
  /**
   * Event to send to the parent component when a stepper item's data is validated.
   */
  didValidate: PropTypes.func
};