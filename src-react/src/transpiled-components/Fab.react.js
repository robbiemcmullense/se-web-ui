import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Fab extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-fab>{children}</se-fab>
		);
	}
}

export default Fab;