import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SidemenuItem extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-sidemenu-item>{children}</se-sidemenu-item>
		);
	}
}

export default SidemenuItem;