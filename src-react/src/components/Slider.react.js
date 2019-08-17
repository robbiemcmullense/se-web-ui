import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Slider extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didChange", e => this.props.didChange(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didChange", e => this.props.didChange(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { disabled, max, min, didChange, children } = this.props;
		return (
			<se-slider disabled={disabled} max={max} min={min} ref={this._handleRef}>{children}</se-slider>
		);
	}
}

Slider.defaultProps = {};

Slider.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates if your slider is disabled.
   * The default setting is `false`.
   */
  disabled: PropTypes.boolean,
  /**
   * Indicates the maximum value of your slider.
   */
  max: PropTypes.number,
  /**
   * Indicates the minimum value of your slider.
   */
  min: PropTypes.number,
  /**
   * Event emitted when the slider has been changed.
   */
  didChange: PropTypes.function
};