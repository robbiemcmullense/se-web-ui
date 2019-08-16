import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Block extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-block>{children}</se-block>
		);
	}
}

export default Block;