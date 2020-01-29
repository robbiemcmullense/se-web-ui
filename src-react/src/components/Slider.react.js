import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didChange(e) {
    this.props.onDidChange && this.props.onDidChange(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didChange", e => this.didChange(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didChange", e => this.didChange(e));
  }

	render() {
		const { disabled, label, max, min, value, didChange, children } = this.props;
		return (
			<se-slider disabled={disabled} label={label} max={max} min={min} value={value} ref={this._handleRef} >{children}</se-slider>
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
  disabled: PropTypes.bool,
  /**
   * The label of the slider that will be attached to the input.
   */
  label: PropTypes.string,
  /**
   * Indicates the maximum value of your slider.
   * The default value is `100`.
   */
  max: PropTypes.number,
  /**
   * Indicates the minimum value of your slider.
   * The default value is `0`.
   */
  min: PropTypes.number,
  /**
   * Indicates the initial value of your slider component when it loads.
   * The default value is `0`.
   */
  value: PropTypes.any,
  /**
   * Event emitted when the slider has been changed.
   */
  didChange: PropTypes.func
};