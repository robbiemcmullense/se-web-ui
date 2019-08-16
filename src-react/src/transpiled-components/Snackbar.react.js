import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Snackbar extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-snackbar>{children}</se-snackbar>
		);
	}
}

export default Snackbar;