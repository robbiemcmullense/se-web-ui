import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Checkbox extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didChange", e => this.props.didChange(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didChange", e => this.props.didChange(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { background, color, disabled, header, label, option, required, selected, textOff, textOn, value, didChange, children } = this.props;
		return (
			<se-checkbox background={background} color={color} disabled={disabled} header={header} label={label} option={option} required={required} selected={selected} text-off={textOff} text-on={textOn} value={value} ref={this._handleRef}>{children}</se-checkbox>
		);
	}
}

Checkbox.defaultProps = {};

Checkbox.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the color schema of the checkbox when the option is set to `onoff`.
   * The default value is `standard`.
   */
  background: PropTypes."alternative" | "standard",
  /**
   * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
   * The default value is `primary`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  color: PropTypes."primary" | "secondary",
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.boolean,
  /**
   * Reduces the visual height of the checkbox when the option is set to `onoff`.
   * Useful if the on/off checkbox is within a header element.
   */
  header: PropTypes.boolean,
  /**
   * The label of the checkbox that will be attached to the box.
   */
  label: PropTypes.string,
  /**
   * Determines the visual appearance of the component.
   * `checkbox` is the default option, which will render the component like a standard HTML checkbox.
   * `switch` renders the component like a toggle switch.
   * `onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button.
   */
  option: PropTypes."checkbox" | "onoff" | "switch",
  /**
   * Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.
   */
  required: PropTypes.boolean,
  /**
   * Determines whether or not the checkbox is checked when you initialize it.  Set to `false` by default.
   */
  selected: PropTypes.boolean,
  /**
   * Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.
   */
  textOff: PropTypes.string,
  /**
   * Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.
   */
  textOn: PropTypes.string,
  /**
   * The value you want to pass to the parent component when the checkbox is checked.
   */
  value: PropTypes.string,
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  didChange: PropTypes.function
};