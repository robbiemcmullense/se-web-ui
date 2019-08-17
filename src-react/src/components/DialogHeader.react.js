import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogHeader extends Component {
	render() {
		const { color, children } = this.props;
		return (
			<se-dialog-header color={color} ref={this._handleRef}>{children}</se-dialog-header>
		);
	}
}

DialogHeader.defaultProps = {};

DialogHeader.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text.
   * `primary`: Primary color schema.
   */
  color: PropTypes."alternative" | "primary"
};