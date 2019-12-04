import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, columnSize, direction, display, option, padding, position, rowSize, children } = this.props;
		return (
			<se-container color={color} column-size={columnSize} direction={direction} display={display} option={option} padding={padding} position={position} row-size={rowSize} >{children}</se-container>
		);
	}
}

Container.defaultProps = {};

Container.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the background color of the container.
   * `none` has no background.
   * `standard` is `se-background`, light gray.
   * `alternative` is a white background.
   */
  color: PropTypes.string,
  /**
   * When in `display="grid"`, defines the mininimum width of a column. It automatically figures out the appropriate number of columns from there.
   * Default is `350px`.
   */
  columnSize: PropTypes.string,
  /**
   * Defines the direction of the flex element.
   * `row` is the default direction. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  direction: PropTypes.string,
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` will set each container to be as large and high as it's content. Selecting this display will automatically configure each child element to have "display: block".
   */
  display: PropTypes.string,
  /**
   * Defines the inner appearance of a container.
   * `fill` is the default option, taking the full space of the container. This option automatically sets the color property to `standard` (gray) if color has not been set.
   * `widget` adds a `small` padding around the container to equally space all child elements. This option automatically sets the color property to `standard` (gray) if color has not been set.
   * `centered` centers the container so the content does not exceed a maximum width.
   * `card` adds a `medium` padding around each child element.  This option automatically sets the color property to `alternative` (white) if color has not been set.
   * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
   * `inherited` will insure that no specific style is applied to the container.
   */
  option: PropTypes.string,
  /**
   * Defines the spacing around the inside edge of a container.
   * `none` is 0px.
   * `small` is 4px.
   * `medium` is 8px.
   * `large` is 16px.
   * `xlarge` is 32px.
   */
  padding: PropTypes.string,
  /**
   * In specific cases, it may be necessary to define the container with an absolute position (such as inside an angular router-container). Most of the time, the default position will work perfectly with CSS flex box.
   * `relative` is the default position. This is perfect to use with flex content.
   * `absolute` is useful in specific cases. Make sure you know what you are doing.
   */
  position: PropTypes.string,
  /**
   * When in `display="grid"`, defines the height of each container.  Default is `300px`.
   */
  rowSize: PropTypes.string
};