import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, option, size, children } = this.props;
		return (
			<se-icon color={color} option={option} size={size} >{children}</se-icon>
		);
	}
}

Icon.defaultProps = {};

Icon.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Optional property that defines the background color of the button.
The default color will be inherited from its parent.
   */
  color: PropTypes.string,
  /**
   * Optional property to define if the icon should act as a button (clickable).
   */
  option: PropTypes.string,
  /**
   * Defines the size of an icon.
`nano` sets the size to 14px.
`small` sets the size to 24px. (default setting)
`medium` sets the size to 32px
`large` sets the size to 52px.
`xlarge` sets the size to 62px.
   */
  size: PropTypes.string
};