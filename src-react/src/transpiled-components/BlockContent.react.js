import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockContent extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-block-content>{children}</se-block-content>
		);
	}
}

export default BlockContent;