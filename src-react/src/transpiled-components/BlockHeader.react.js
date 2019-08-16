import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockHeader extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-block-header>{children}</se-block-header>
		);
	}
}

export default BlockHeader;