import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Sidemenu extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-sidemenu>{children}</se-sidemenu>
		);
	}
}

export default Sidemenu;