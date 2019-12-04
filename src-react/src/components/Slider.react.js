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
		const { disabled, max, min, didChange, children } = this.props;
		return (
			<se-slider disabled={disabled} max={max} min={min} ref={this._handleRef} >{children}</se-slider>
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
  didChange: PropTypes.func
};