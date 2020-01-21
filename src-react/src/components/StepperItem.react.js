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
		const { active, label, validated, didValidate, children } = this.props;
		return (
			<se-stepper-item active={active} label={label} validated={validated} ref={this._handleRef} >{children}</se-stepper-item>
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
   * Indicates the label for your stepper item.
   */
  label: PropTypes.string,
  /**
   * Indicates whether a required item's data has been validated.  Useful if using a form field.
   * When the stepper component is set to linear mode, all stepper items will need to be validated before advancing the stpper.
   */
  validated: PropTypes.bool,
  /**
   * Event to send to the parent component when a stepper item's data is validated.
The boolean validated property is passed to the parent.
   */
  didValidate: PropTypes.func
};