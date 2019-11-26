import React, { Component } from "react";
import PropTypes from "prop-types";

export default class StepperItem extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didClick(e) {
    this.props.onDidClick && this.props.onDidClick(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didClick", e => this.didClick(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClick", e => this.didClick(e));
  }

	render() {
		const { isLast, label, required, didClick, children } = this.props;
		return (
			<se-stepper-item is-last={isLast} label={label} required={required} ref={this._handleRef} >{children}</se-stepper-item>
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
   * Indicates whether or not the stepper item is the last item in the stepper component.  The default setting is `false`.
   */
  isLast: PropTypes.bool,
  /**
   * Indicates the label for your stepper item.
   */
  label: PropTypes.string,
  /**
   * Indicates whether or not this is a required section of your stepper component.  The default setting is `false`.
If set to `true`, the next step will not be accessible until the input fields associated with this step have been validated.
   */
  required: PropTypes.bool,
  /**
   * Event to send to the parent component when clicking on a stepper item.
This event emits the stepper item element object and its label property.
   */
  didClick: PropTypes.func
};