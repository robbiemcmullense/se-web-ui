import React, { Component } from "react";
import PropTypes from "prop-types";

export default class List extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-list>{children}</se-list>
		);
	}
}

export default List;