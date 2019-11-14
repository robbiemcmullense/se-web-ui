import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormField extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didSubmit(e) {
    this.props.onDidSubmit && this.props.onDidSubmit(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didSubmit", e => this.didSubmit(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didSubmit", e => this.didSubmit(e));
  }

	render() {
		const { disabled, label, option, required, status, type, value, didSubmit, children } = this.props;
		return (
			<se-form-field disabled={disabled} label={label} option={option} required={required} status={status} type={type} value={value} ref={this._handleRef} >{children}</se-form-field>
		);
	}
}

FormField.defaultProps = {};

FormField.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Optional property that defines if the form field is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.bool,
  /**
   * Defines the text value of the label in your form field.
   */
  label: PropTypes.string,
  /**
   * Defines the layout of your form field.
`inline` is the default option, and is always applied if the type is set to `checkbox`.  This sets the input or select field adjacent to the label.
`stacked` option will render the input or select field below the label.
   */
  option: PropTypes.string,
  /**
   * Determines if the input is required by the application.
Set to `false` by default.
Setting this value to `true` will render a red asterisk next to your label.
   */
  required: PropTypes.bool,
  /**
   * Sets a red border on an input field if there's an error, an orange border if there's a warning, and a green border if a successful input.
   */
  status: PropTypes.string,
  /**
   * Defines whether the form field's input is a text field (`input`), a checkbox (`checkbox`), a radio button (`radio`), or a dropdown menu (`select`).
`input` is the default type.
   */
  type: PropTypes.string,
  /**
   * Defines the value of your form field to get passed to the parent component.
When the type is set to "input", this value will be the default placeholder in your input field.
   */
  value: PropTypes.string,
  /**
   * Passes form data to the parent component on a click (`checkbox` or `radio`), menu change (`select`), or when the input field loses focus.
   */
  didSubmit: PropTypes.func
};