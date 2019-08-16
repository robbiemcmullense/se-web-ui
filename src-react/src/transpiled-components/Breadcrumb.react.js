import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Breadcrumb extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-breadcrumb>{children}</se-breadcrumb>
		);
	}
}

export default Breadcrumb;