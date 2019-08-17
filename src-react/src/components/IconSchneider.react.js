import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IconSchneider extends Component {
	render() {
		const { children } = this.props;
		return (
			<se-icon-schneider ref={this._handleRef}>{children}</se-icon-schneider>
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