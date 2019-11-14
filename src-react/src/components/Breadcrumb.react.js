import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { children } = this.props;
		return (
			<se-breadcrumb >{children}</se-breadcrumb>
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