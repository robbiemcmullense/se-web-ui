import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DialogFooter extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { children } = this.props;
		return (
			<se-dialog-footer >{children}</se-dialog-footer>
		);
	}
}

DialogFooter.defaultProps = {};

DialogFooter.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node
};