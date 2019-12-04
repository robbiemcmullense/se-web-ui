import React, { Component } from "react";
import PropTypes from "prop-types";

export default class StepperItem extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  itemValidated(e) {
    this.props.onItemValidated && this.props.onItemValidated(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("itemValidated", e => this.itemValidated(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("itemValidated", e => this.itemValidated(e));
  }

	render() {
		const { disabled, isLast, label, required, selected, selectedContent, step, validated, itemValidated, children } = this.props;
		return (
			<se-stepper-item disabled={disabled} is-last={isLast} label={label} required={required} selected={selected} selected-content={selectedContent} step={step} validated={validated} ref={this._handleRef} >{children}</se-stepper-item>
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
   * Indicates whether or not a stepper item has been disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Indicates whether or not the stepper item is the last item in the stepper component.  The default setting is `false`.
   */
  isLast: PropTypes.bool,
  /**
   * Indicates the label for your stepper item.
   */
  label: PropTypes.string,
  /**
   * Indicates whether or not this is a required section of your stepper component.  The default setting is `false`.
   * If set to `true`, the next step will not be accessible until the input fields associated with this step have been validated.
   */
  required: PropTypes.bool,
  /**
   * Indicates whether or not a stepper item has been selected.
   */
  selected: PropTypes.bool,
  /**
   * Indicates the content for the currently selected step in the stepper.
   */
  selectedContent: PropTypes.bool,
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
  itemValidated: PropTypes.func
};