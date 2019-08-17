import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dialog extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("backdrop", e => this.props.backdrop(e));
    this.switchCmp.addEventListener("didClose", e => this.props.didClose(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("backdrop", e => this.props.backdrop(e));
    this.switchCmp.removeEventListener("didClose", e => this.props.didClose(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { canBackdrop, color, open, size, backdrop, didClose, children } = this.props;
		return (
			<se-dialog can-backdrop={canBackdrop} color={color} open={open} size={size} ref={this._handleRef}>{children}</se-dialog>
		);
	}
}

Dialog.defaultProps = {};

Dialog.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `true`.
   */
  canBackdrop: PropTypes.boolean,
  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text
   * `primary`: Primary color schema and default setting.
   */
  color: PropTypes."alternative" | "primary",
  /**
   * Indicates whether or not the dialog is open or closed.  Default setting is `false`.
   */
  open: PropTypes.boolean,
  /**
   * Defines the size of the modal.
   * `small`: used in alerts and messages
   * `medium`: default setting, used by other apps
   * `fill`: takes the full space of the screen
   */
  size: PropTypes."fill" | "large" | "medium" | "small",
  /**
   * Send data to the parent component when the backdrop is clicked.
   */
  backdrop: PropTypes.function,
  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM.
   */
  didClose: PropTypes.function
};