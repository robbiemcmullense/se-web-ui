import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Radio extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-radio>{children}</se-radio>
		);
	}
}

export default Radio;