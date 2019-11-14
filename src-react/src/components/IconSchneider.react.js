import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IconSchneider extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { children } = this.props;
		return (
			<se-icon-schneider >{children}</se-icon-schneider>
		);
	}
}

IconSchneider.defaultProps = {};

IconSchneider.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node
};