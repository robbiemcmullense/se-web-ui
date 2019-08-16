import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-button>{children}</se-button>
		);
	}
}

export default Button;