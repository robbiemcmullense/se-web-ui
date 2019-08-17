import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TooltipContent extends Component {
	render() {
		const { icon, children } = this.props;
		return (
			<se-tooltip-content icon={icon} ref={this._handleRef}>{children}</se-tooltip-content>
		);
	}
}

TooltipContent.defaultProps = {};

TooltipContent.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates an icon you want to display in your tooltip.
   */
  icon: PropTypes.string
};