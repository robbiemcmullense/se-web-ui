import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockFooter extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-block-footer>{children}</se-block-footer>
		);
	}
}

export default BlockFooter;