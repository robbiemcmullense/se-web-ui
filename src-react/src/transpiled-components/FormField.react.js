import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FormField extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-form-field>{children}</se-form-field>
		);
	}
}

export default FormField;