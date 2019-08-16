import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Link extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-link>{children}</se-link>
		);
	}
}

export default Link;