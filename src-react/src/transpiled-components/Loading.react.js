import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Loading extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-loading>{children}</se-loading>
		);
	}
}

export default Loading;