import React, { Component } from "react";
import PropTypes from "prop-types";

export default class VisualLinear extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-visual-linear>{children}</se-visual-linear>
		);
	}
}

export default VisualLinear;