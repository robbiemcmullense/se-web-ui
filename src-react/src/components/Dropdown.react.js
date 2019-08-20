import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didClose(e) {
    this.props.onDidClose && this.props.onDidClose(e)
  }
  didOpen(e) {
    this.props.onDidOpen && this.props.onDidOpen(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didClose", e => this.didClose(e));
    this.switchCmp.addEventListener("didOpen", e => this.didOpen(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClose", e => this.didClose(e));
    this.switchCmp.removeEventListener("didOpen", e => this.didOpen(e));
  }

	render() {
		const { alignment, didClose, didOpen, children } = this.props;
		return (
			<se-dropdown alignment={alignment} ref={this._handleRef} >{children}</se-dropdown>
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
  alignment: PropTypes.string,
  /**
   * Event emitted when the dropdown has been closed.
   */
  didClose: PropTypes.func,
  /**
   * Event emitted when the dropdown has been opened.
   */
  didOpen: PropTypes.func
};