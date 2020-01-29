import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didChange(e) {
    this.props.onDidChange && this.props.onDidChange(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didChange", e => this.didChange(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didChange", e => this.didChange(e));
  }

	render() {
		const { background, color, disabled, header, label, labelPos, option, required, selected, textOff, textOn, value, didChange, children } = this.props;
		return (
			<se-checkbox background={background} color={color} disabled={disabled} header={header} label={label} label-pos={labelPos} option={option} required={required} selected={selected} text-off={textOff} text-on={textOn} value={value} ref={this._handleRef} >{children}</se-checkbox>
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
The default value is `standard`.
   */
  background: PropTypes.string,
  /**
   * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
The default value is `primary`, rendering a green color.
The `secondary` setting renders a blue color.
   */
  color: PropTypes.string,
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.bool,
  /**
   * Reduces the visual height of the checkbox when the option is set to `onoff`.
Useful if the on/off checkbox is within a header element.
   */
  header: PropTypes.bool,
  /**
   * The label of the checkbox that will be attached to the box.
   */
  label: PropTypes.string,
  /**
   * Sets the position of the label for your checkbox component.
The default setting is `right` when the option is set to `checkbox`.
The default setting is `left` when the option is set to `switch`.
   */
  labelPos: PropTypes.string,
  /**
   * Determines the visual appearance of the component.
`checkbox` is the default option, which will render the component like a standard HTML checkbox.
`switch` renders the component like a toggle switch.
`onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button.
   */
  option: PropTypes.string,
  /**
   * Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.
   */
  required: PropTypes.bool,
  /**
   * The "checked" state of the checkbox, `false` by default.
   */
  selected: PropTypes.bool,
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
  didChange: PropTypes.func
};