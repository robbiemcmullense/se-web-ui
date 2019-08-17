import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Breadcrumb extends Component {
	render() {
		const { children } = this.props;
		return (
			<se-breadcrumb ref={this._handleRef}>{children}</se-breadcrumb>
		);
	}
}

Breadcrumb.defaultProps = {};

Breadcrumb.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node
};