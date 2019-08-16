import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Authentication extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-authentication>{children}</se-authentication>
		);
	}
}

export default Authentication;