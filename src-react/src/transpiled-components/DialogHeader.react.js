import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogHeader extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-dialog-header>{children}</se-dialog-header>
		);
	}
}

export default DialogHeader;