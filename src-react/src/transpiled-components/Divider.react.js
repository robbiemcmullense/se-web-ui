import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Divider extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-divider>{children}</se-divider>
		);
	}
}

export default Divider;