import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListItem extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-list-item>{children}</se-list-item>
		);
	}
}

export default ListItem;