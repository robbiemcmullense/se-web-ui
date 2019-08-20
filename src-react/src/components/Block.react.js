import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Block extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, display, enlarged, height, loading, option, width, children } = this.props;
		return (
			<se-block color={color} display={display} enlarged={enlarged} height={height} loading={loading} option={option} width={width} >{children}</se-block>
		);
	}
}

Block.defaultProps = {};

Block.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Optional property that defines the background color of the block. Default setting is `alternative` (white).
   */
  color: PropTypes.string,
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` helps in specific cases. Make sure you know what you are doing.
   */
  display: PropTypes.string,
  /**
   * When the display is set to `grid`, this property determines if the block should have double the width and height of a standard grid item.
   * Default setting is `false` (1/1).
   */
  enlarged: PropTypes.bool,
  /**
   * Defines the specific height of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  height: PropTypes.string,
  /**
   * Displays the loading icon if set to `true`.  Default setting is `false`.
   */
  loading: PropTypes.bool,
  /**
   * Defines the visual appearance of a block.
   * `basic` will remove any spacing.
   * `widget` will create a flat widget look and feel with a small margin around it.
   * `card` will create a card look and feel with a shadow and rounded corners.
   */
  option: PropTypes.string,
  /**
   * Defines the specific width of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  width: PropTypes.string
};