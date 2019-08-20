import React, { Component } from "react";
import PropTypes from "prop-types";

export default class VisualLinear extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { label, option, percentage, secolor, value, children } = this.props;
		return (
			<se-visual-linear label={label} option={option} percentage={percentage} secolor={secolor} value={value} >{children}</se-visual-linear>
		);
	}
}

VisualLinear.defaultProps = {};

VisualLinear.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the text value of the label in your component.
   */
  label: PropTypes.string,
  /**
   * Defines the layout of your component.
   * `inline` is the default option.  This sets the "progress bar" adjacent to the label.
   * `stacked` option will render the "progress bar" below the label.
   */
  option: PropTypes.string,
  /**
   * Set the percentage of the "progress bar" to be "filled".
   */
  percentage: PropTypes.number,
  /**
   * Sets the color of the visual "progress bar".
   * The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
   * By default, the progress bar will have a green color.
   */
  secolor: PropTypes.string,
  /**
   * Defines the value of your component.
   */
  value: PropTypes.string
};