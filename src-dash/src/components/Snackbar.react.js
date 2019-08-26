import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Snackbar extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didClose(e) {
    this.props.onDidClose && this.props.onDidClose(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didClose", e => this.didClose(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClose", e => this.didClose(e));
  }

	render() {
		const { canClose, closeText, icon, message, open, type, didClose, children } = this.props;
		return (
			<se-snackbar can-close={canClose} close-text={closeText} icon={icon} message={message} open={open} type={type} ref={this._handleRef} >{children}</se-snackbar>
		);
	}
}

Snackbar.defaultProps = {};

Snackbar.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Displays a "button" to close the snackbar.
   * The default setting is `false`.
   * This will be visible if set to `true`.
   */
  canClose: PropTypes.bool,
  /**
   * Defines the text you want your "close button" to read.  The default text is `dismiss`.
   */
  closeText: PropTypes.string,
  /**
   * The name of the icon you wish to display.  The default icon is an information circle.
   */
  icon: PropTypes.string,
  /**
   * The content of the message you want the snackbar to display.
   */
  message: PropTypes.string,
  /**
   * Indicates if the snackbar is open.  Set to `false` (closed) by default.
   */
  open: PropTypes.bool,
  /**
   * Indicates the background color of your snackbar.
   * `success`: green
   * `warning`: orange
   * `error`: red
   * `information`: dark grey, default setting
   */
  type: PropTypes.string,
  /**
   * Sends information to the parent component when closing the snackbar.
   */
  didClose: PropTypes.func
};