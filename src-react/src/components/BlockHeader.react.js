import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BlockHeader extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { divider, option, children } = this.props;
		return (
			<se-block-header divider={divider} option={option} >{children}</se-block-header>
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
   * 
   */
  divider: PropTypes.bool,
  /**
   * Defines the visual appearance of a header.
Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the header with respect to the card design.
`fill` removes all spacing, for example with use of the `se-tabbar` option `content`.
   */
  option: PropTypes.string
};