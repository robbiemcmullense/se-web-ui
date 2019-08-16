import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogFooter extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-dialog-footer>{children}</se-dialog-footer>
		);
	}
}

export default DialogFooter;