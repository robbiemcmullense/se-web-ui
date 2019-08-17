import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dropdown extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didClose", e => this.props.didClose(e));
    this.switchCmp.addEventListener("didOpen", e => this.props.didOpen(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClose", e => this.props.didClose(e));
    this.switchCmp.removeEventListener("didOpen", e => this.props.didOpen(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { alignment, didClose, didOpen, children } = this.props;
		return (
			<se-dropdown alignment={alignment} ref={this._handleRef}>{children}</se-dropdown>
		);
	}
}

Dropdown.defaultProps = {};

Dropdown.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines how to align the dropdown container.
   * `left`: Position the container with respect to the left side of the trigger element.
   * `right`: Position the container with respect to the right side of the trigger element.
   */
  alignment: PropTypes."left" | "right",
  /**
   * Event emitted when the dropdown has been closed.
   */
  didClose: PropTypes.function,
  /**
   * Event emitted when the dropdown has been opened.
   */
  didOpen: PropTypes.function
};