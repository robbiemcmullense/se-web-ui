import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dropdown extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-dropdown>{children}</se-dropdown>
		);
	}
}

export default Dropdown;