import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogFooter extends Component {
	render() {
		const { children } = this.props;
		return (
			<se-dialog-footer ref={this._handleRef}>{children}</se-dialog-footer>
		);
	}
}

DialogFooter.defaultProps = {};

DialogFooter.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node
};