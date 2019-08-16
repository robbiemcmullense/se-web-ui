import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Container extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-container>{children}</se-container>
		);
	}
}

export default Container;