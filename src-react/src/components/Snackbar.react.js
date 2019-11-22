import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Snackbar extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  actionClicked(e) {
    this.props.onActionClicked && this.props.onActionClicked(e)
  }
  didClose(e) {
    this.props.onDidClose && this.props.onDidClose(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("actionClicked", e => this.actionClicked(e));
    this.switchCmp.addEventListener("didClose", e => this.didClose(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("actionClicked", e => this.actionClicked(e));
    this.switchCmp.removeEventListener("didClose", e => this.didClose(e));
  }

	render() {
		const { actionText, canClose, duration, icon, message, open, type, actionClicked, didClose, children } = this.props;
		return (
			<se-snackbar action-text={actionText} can-close={canClose} duration={duration} icon={icon} message={message} open={open} type={type} ref={this._handleRef} >{children}</se-snackbar>
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
   * Defines the text you want your custom action button to read.
   */
  actionText: PropTypes.string,
  /**
   * Displays a "button" to close the snackbar.
The default setting is `false`.
This will be visible if set to `true`.
   */
  canClose: PropTypes.bool,
  /**
   * Indicates the duration (in milliseconds) that the snackbar will display on screen before auto-closing, if `canClose` is set to false.
The default setting is 5000.
   */
  duration: PropTypes.number,
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
`success`: green
`warning`: orange
`error`: red
`information`: dark grey, default setting
   */
  type: PropTypes.string,
  /**
   * Sends information to the parent component when clicking a custom action button.
   */
  actionClicked: PropTypes.func,
  /**
   * Sends information to the parent component when closing the snackbar.
   */
  didClose: PropTypes.func
};