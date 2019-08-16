import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TooltipHeader extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-tooltip-header>{children}</se-tooltip-header>
		);
	}
}

export default TooltipHeader;