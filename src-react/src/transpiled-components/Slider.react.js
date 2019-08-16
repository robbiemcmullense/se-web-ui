import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Slider extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-slider>{children}</se-slider>
		);
	}
}

export default Slider;