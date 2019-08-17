import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Radio extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didCheck", e => this.props.didCheck(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didCheck", e => this.props.didCheck(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { color, disabled, label, required, selected, value, didCheck, children } = this.props;
		return (
			<se-radio color={color} disabled={disabled} label={label} required={required} selected={selected} value={value} ref={this._handleRef}>{children}</se-radio>
		);
	}
}

Radio.defaultProps = {};

Radio.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the color of the checkbox.
   * The default setting is `primary`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  color: PropTypes."primary" | "secondary",
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.boolean,
  /**
   * Defines the label that will display next to the radio button.
   */
  label: PropTypes.string,
  /**
   * Adds a red asterisk if the radio button is required when used in a form field.  Default setting is `false`.
   */
  required: PropTypes.boolean,
  /**
   * Determines whether or not the checkbox is checked when you initialize it.
   *  The default setting is `false`.
   *  Checked if set to `true`.
   */
  selected: PropTypes.boolean,
  /**
   * Defines the value you want to pass to the parent component when the radio button is checked.
   */
  value: PropTypes.string,
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  didCheck: PropTypes.function
};