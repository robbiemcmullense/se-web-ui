import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockHeader extends Component {
	render() {
		const { option, children } = this.props;
		return (
			<se-block-header option={option} ref={this._handleRef}>{children}</se-block-header>
		);
	}
}

BlockHeader.defaultProps = {};

BlockHeader.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the visual appearance of a header.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the header with respect to the card design.
   */
  option: PropTypes."basic" | "card" | "widget"
};