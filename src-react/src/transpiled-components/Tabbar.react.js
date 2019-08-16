import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Tabbar extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-tabbar>{children}</se-tabbar>
		);
	}
}

export default Tabbar;