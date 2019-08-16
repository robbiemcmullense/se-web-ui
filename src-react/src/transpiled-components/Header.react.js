import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-header>{children}</se-header>
		);
	}
}

export default Header;