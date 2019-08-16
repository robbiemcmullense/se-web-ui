import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Chip extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-chip>{children}</se-chip>
		);
	}
}

export default Chip;