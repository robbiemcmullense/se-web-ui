import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Block extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { clickable, clickableBar, color, corner, display, divider, enlarged, height, loading, margin, option, outline, outlineColor, width, children } = this.props;
		return (
			<se-block clickable={clickable} clickable-bar={clickableBar} color={color} corner={corner} display={display} divider={divider} enlarged={enlarged} height={height} loading={loading} margin={margin} option={option} outline={outline} outline-color={outlineColor} width={width} >{children}</se-block>
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
   * Defines the se-block item's ability to appear clickable / selectable.
   * Default setting is `false`, resulting in no hover effects on the block level.
   * `true` adds a hover effect on the se-block. The cursor will change to `pointer`, a box-shadow will appear, and a `$se-life-green` bar will appear at the top of the block.
   */
  clickable: PropTypes.bool,
  /**
   * Defines clickable se-block item's bar on hover.
   * Default setting is `false`.
   * `true` renders a `$se-life-green` colored bar on a hover.
   */
  clickableBar: PropTypes.bool,
  /**
   * Optional property that defines the background color of the block.
   * Default setting is `alternative`, rendering the "alternative" theme background.
   * `none` has no background.
   * `standard` renders the "standard" theme background.
   */
  color: PropTypes.string,
  /**
   * Defines the se-block corner radius.
   * Default setting is `small`, rendering a rounded, 4px rounded corner.
   * `none` is for a sharp, 90 degree corner.
   * `nano` is for a slightly rounded, 2px rounded corner.
   */
  corner: PropTypes.string,
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` helps in specific cases. Make sure you know what you are doing.
   */
  display: PropTypes.string,
  /**
   * Defines whether or not a divider will be applied to the se-block header and footer.
   * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
   * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
   */
  divider: PropTypes.bool,
  /**
   * When the display is set to `grid`, this property determines if the block should have double the width and height of a standard grid item.
   * Default setting is `false`, spanning 1 row and 1 column (1/1).
   * `true` spans 2 rows and 2 columns (2/2).
   * `vertical` spans 2 rows (2/1).
   * `horizontal` spans 2 columns (1/2).
   */
  enlarged: PropTypes.string,
  /**
   * Defines the specific height of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  height: PropTypes.string,
  /**
   * Displays the loading icon if set to `true`.  Default setting is `false`.
   */
  loading: PropTypes.bool,
  /**
   * Defines the spacing around the outside edge of a block.
   * Default `none` is 0px.
   * `small` is 4px.
   * `medium` is 8px.
   * `large` is 16px.
   * `xlarge` is 32px.
   */
  margin: PropTypes.string,
  /**
   * Defines the visual appearance of a block.
   * Default setting is `basic`, which will remove any spacing.
   * `widget` will create a flat widget look and feel with a `medium` margin around it.
   * `card` will create a card look and feel with rounded corners, and with a `large` margin around it.
   * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
   */
  option: PropTypes.string,
  /**
   * Defines the se-block outline.
   * Default setting is `false`.
   * Setting this property to `true` will add a 1px border.
   */
  outline: PropTypes.bool,
  /**
   * Defines the se-block outline color.
   * Default setting is `standard`, which renders the outline with the `$se-super-light-grey` color.
   * `primary` defines the outline color as `$se-life-green`, used primarily for technical applications when the block is selected.
   * `secondary` defines the outline color as `$se-sky-blue`.
   */
  outlineColor: PropTypes.string,
  /**
   * Defines the specific width of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  width: PropTypes.string
};