import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TooltipContent extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-tooltip-content>{children}</se-tooltip-content>
		);
	}
}

export default TooltipContent;