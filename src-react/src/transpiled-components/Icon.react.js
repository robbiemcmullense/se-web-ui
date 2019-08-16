import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Icon extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-icon>{children}</se-icon>
		);
	}
}

export default Icon;