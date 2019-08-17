import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockContent extends Component {
	render() {
		const { option, children } = this.props;
		return (
			<se-block-content option={option} ref={this._handleRef}>{children}</se-block-content>
		);
	}
}

BlockContent.defaultProps = {};

BlockContent.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * The block-content component will add 8px padding on the top and bottom, and 16px padding on the left and right by default.
   * When the option is set to `fill`, the content will fill the whole space of the block-content with no padding.
   */
  option: PropTypes."basic" | "card" | "fill" | "widget"
};