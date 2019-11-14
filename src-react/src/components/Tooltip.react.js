import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  closeTooltips(e) {
    this.props.onCloseTooltips && this.props.onCloseTooltips(e)
  }
  didClose(e) {
    this.props.onDidClose && this.props.onDidClose(e)
  }
  didOpen(e) {
    this.props.onDidOpen && this.props.onDidOpen(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("closeTooltips", e => this.closeTooltips(e));
    this.switchCmp.addEventListener("didClose", e => this.didClose(e));
    this.switchCmp.addEventListener("didOpen", e => this.didOpen(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("closeTooltips", e => this.closeTooltips(e));
    this.switchCmp.removeEventListener("didClose", e => this.didClose(e));
    this.switchCmp.removeEventListener("didOpen", e => this.didOpen(e));
  }

	render() {
		const { action, position, closeTooltips, didClose, didOpen, children } = this.props;
		return (
			<se-tooltip action={action} position={position} ref={this._handleRef} >{children}</se-tooltip>
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
The default setting is `hover`, triggering the tooltip when hovering over the parent element.
The `click` action triggers the tooltip when you click on the parent element.
   */
  action: PropTypes.string,
  /**
   * Indicates the position of your tooltip.
The default setting is `bottom`, rendering the tooltip below its parent.
   */
  position: PropTypes.string,
  /**
   * Closes the tooltip when another tooltip is opened.
   */
  closeTooltips: PropTypes.func,
  /**
   * Event emitted when the tooltip has been closed.
   */
  didClose: PropTypes.func,
  /**
   * Event emitted when the tooltip has been opened.
   */
  didOpen: PropTypes.func
};