import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didCheck(e) {
    this.props.onDidCheck && this.props.onDidCheck(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didCheck", e => this.didCheck(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didCheck", e => this.didCheck(e));
  }

	render() {
		const { color, disabled, label, required, selected, value, didCheck, children } = this.props;
		return (
			<se-radio color={color} disabled={disabled} label={label} required={required} selected={selected} value={value} ref={this._handleRef} >{children}</se-radio>
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
The default setting is `primary`, rendering a green color.
The `secondary` setting renders a blue color.
   */
  color: PropTypes.string,
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.bool,
  /**
   * Defines the label that will display next to the radio button.
   */
  label: PropTypes.string,
  /**
   * Adds a red asterisk if the radio button is required when used in a form field.  Default setting is `false`.
   */
  required: PropTypes.bool,
  /**
   * Determines whether or not the checkbox is checked when you initialize it.
 The default setting is `false`.
 Checked if set to `true`.
   */
  selected: PropTypes.bool,
  /**
   * Defines the value you want to pass to the parent component when the radio button is checked.
   */
  value: PropTypes.string,
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  didCheck: PropTypes.func
};