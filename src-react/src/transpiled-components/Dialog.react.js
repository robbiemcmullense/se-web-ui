import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dialog extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-dialog>{children}</se-dialog>
		);
	}
}

export default Dialog;