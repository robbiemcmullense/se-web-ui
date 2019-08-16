import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Checkbox extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-checkbox>{children}</se-checkbox>
		);
	}
}

export default Checkbox;