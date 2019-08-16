import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogContent extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-dialog-content>{children}</se-dialog-content>
		);
	}
}

export default DialogContent;