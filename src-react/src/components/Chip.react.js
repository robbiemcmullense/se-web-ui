import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Chip extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didClose", e => this.props.didClose(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClose", e => this.props.didClose(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { block, canClose, color, disabled, selected, value, didClose, children } = this.props;
		return (
			<se-chip block={block} can-close={canClose} color={color} disabled={disabled} selected={selected} value={value} ref={this._handleRef}>{children}</se-chip>
		);
	}
}

Chip.defaultProps = {};

Chip.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Optional property that defines if the chip displays as a block in it's container.
   * When set to true, the chip will be as wide as its container.
   */
  block: PropTypes.boolean,
  /**
   * Indicates whether or not the chip has a close button.  Set to `false` by default.
   */
  canClose: PropTypes.boolean,
  /**
   * Defines the background color of the chip.  The default setting is `standard`, which is a light gray color.
   */
  color: PropTypes."alternative" | "standard",
  /**
   * Indicates whether or not the chip is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.boolean,
  /**
   * Indicates whether or not the chip is selected.  Set to `false` by default.
   */
  selected: PropTypes.boolean,
  /**
   * The text you want to display in your chip.
   */
  value: PropTypes.string,
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  didClose: PropTypes.function
};