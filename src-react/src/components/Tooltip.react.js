import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Tooltip extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("closeTooltips", e => this.props.closeTooltips(e));
    this.switchCmp.addEventListener("didClose", e => this.props.didClose(e));
    this.switchCmp.addEventListener("didOpen", e => this.props.didOpen(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("closeTooltips", e => this.props.closeTooltips(e));
    this.switchCmp.removeEventListener("didClose", e => this.props.didClose(e));
    this.switchCmp.removeEventListener("didOpen", e => this.props.didOpen(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { action, position, closeTooltips, didClose, didOpen, children } = this.props;
		return (
			<se-tooltip action={action} position={position} ref={this._handleRef}>{children}</se-tooltip>
		);
	}
}

Tooltip.defaultProps = {};

Tooltip.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the action of your tooltip.
   * The default setting is `hover`, triggering the tooltip when hovering over the parent element.
   * The `click` action triggers the tooltip when you click on the parent element.
   */
  action: PropTypes."click" | "hover",
  /**
   * Indicates the position of your tooltip.
   * The default setting is `bottom`, rendering the tooltip below its parent.
   */
  position: PropTypes."bottom" | "left" | "right" | "top",
  /**
   * Closes the tooltip when another tooltip is opened.
   */
  closeTooltips: PropTypes.function,
  /**
   * Event emitted when the tooltip has been closed.
   */
  didClose: PropTypes.function,
  /**
   * Event emitted when the tooltip has been opened.
   */
  didOpen: PropTypes.function
};