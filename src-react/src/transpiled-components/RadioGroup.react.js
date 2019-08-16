import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RadioGroup extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-radio-group>{children}</se-radio-group>
		);
	}
}

export default RadioGroup;