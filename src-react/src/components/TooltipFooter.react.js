import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TooltipFooter extends Component {
	render() {
		const { children } = this.props;
		return (
			<se-tooltip-footer ref={this._handleRef}>{children}</se-tooltip-footer>
		);
	}
}

TooltipFooter.defaultProps = {};

TooltipFooter.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node
};