import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BreadcrumbItem extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-breadcrumb-item>{children}</se-breadcrumb-item>
		);
	}
}

export default BreadcrumbItem;