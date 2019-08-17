import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BreadcrumbItem extends Component {
	render() {
		const { href, isLast, children } = this.props;
		return (
			<se-breadcrumb-item href={href} is-last={isLast} ref={this._handleRef}>{children}</se-breadcrumb-item>
		);
	}
}

BreadcrumbItem.defaultProps = {};

BreadcrumbItem.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the URL you wish to navigate to when clicking on your breadcrumb item.
   */
  href: PropTypes.string,
  /**
   * Indicates whether or not the breadcrumb item should be selected.  The default setting is `false`.
   */
  isLast: PropTypes.boolean
};