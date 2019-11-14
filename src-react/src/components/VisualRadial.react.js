import React, { Component } from "react";
import PropTypes from "prop-types";

export default class VisualRadial extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { label, percentage, secolor, size, value, children } = this.props;
		return (
			<se-visual-radial label={label} percentage={percentage} secolor={secolor} size={size} value={value} >{children}</se-visual-radial>
		);
	}
}

VisualRadial.defaultProps = {};

VisualRadial.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the text value of the label in your component.
   */
  label: PropTypes.string,
  /**
   * Set the percentage of the "progress bar" to be "filled".
   */
  percentage: PropTypes.number,
  /**
   * Sets the color of the visual "progress bar".
The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
By default, the progress bar will have a green color.
   */
  secolor: PropTypes.string,
  /**
   * Determines the visual size of your circular progress bar.  The default setting is `large`.
   */
  size: PropTypes.string,
  /**
   * Defines the value of your component.
   */
  value: PropTypes.string
};