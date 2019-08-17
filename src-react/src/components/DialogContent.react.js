import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogContent extends Component {
	render() {
		const { icon, iconColor, option, children } = this.props;
		return (
			<se-dialog-content icon={icon} icon-color={iconColor} option={option} ref={this._handleRef}>{children}</se-dialog-content>
		);
	}
}

DialogContent.defaultProps = {};

DialogContent.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates an icon you want to display in your dialog.
   */
  icon: PropTypes.string,
  /**
   * Indicates what color schema you want to render in your dialog.
   */
  iconColor: PropTypes."alternative" | "primary" | "secondary" | "standard",
  /**
   * When set to `fill`, the content will fill the whole space of the dialog.
   */
  option: PropTypes."fill"
};