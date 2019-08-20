import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  backdrop(e) {
    this.props.onBackdrop && this.props.onBackdrop(e)
  }
  didClose(e) {
    this.props.onDidClose && this.props.onDidClose(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("backdrop", e => this.backdrop(e));
    this.switchCmp.addEventListener("didClose", e => this.didClose(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("backdrop", e => this.backdrop(e));
    this.switchCmp.removeEventListener("didClose", e => this.didClose(e));
  }

	render() {
		const { canBackdrop, color, open, size, backdrop, didClose, children } = this.props;
		return (
			<se-dialog can-backdrop={canBackdrop} color={color} open={open} size={size} ref={this._handleRef} >{children}</se-dialog>
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
  canBackdrop: PropTypes.bool,
  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text
   * `primary`: Primary color schema and default setting.
   */
  color: PropTypes.string,
  /**
   * Indicates whether or not the dialog is open or closed.  Default setting is `false`.
   */
  open: PropTypes.bool,
  /**
   * Defines the size of the modal.
   * `small`: used in alerts and messages
   * `medium`: default setting, used by other apps
   * `fill`: takes the full space of the screen
   */
  size: PropTypes.string,
  /**
   * Send data to the parent component when the backdrop is clicked.
   */
  backdrop: PropTypes.func,
  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM.
   */
  didClose: PropTypes.func
};