import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockFooter extends Component {
	render() {
		const { direction, option, children } = this.props;
		return (
			<se-block-footer direction={direction} option={option} ref={this._handleRef}>{children}</se-block-footer>
		);
	}
}

BlockFooter.defaultProps = {};

BlockFooter.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the direction of the flex element.
   * `row` is the default direction. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  direction: PropTypes."column" | "row",
  /**
   * Defines the visual appearance of a footer.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the footer with respect to the card design.
   */
  option: PropTypes."basic" | "card" | "widget"
};