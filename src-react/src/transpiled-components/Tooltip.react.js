import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Tooltip extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-tooltip>{children}</se-tooltip>
		);
	}
}

export default Tooltip;