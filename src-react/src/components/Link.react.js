import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Link extends Component {
	render() {
		const { disabled, option, url, children } = this.props;
		return (
			<se-link disabled={disabled} option={option} url={url} ref={this._handleRef}>{children}</se-link>
		);
	}
}

Link.defaultProps = {};

Link.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Determines whether or not the link is disabled.
   */
  disabled: PropTypes.boolean,
  /**
   * Adds visual and function properties to your link component.
   * The default setting is `internal`, which redirects you to the specified URL in the same page.
   * The `external` setting adds an underline and ">" icon to the link, and opens the link in a new web browser tab.
   */
  option: PropTypes."external" | "internal",
  /**
   * Defines the url the user should get redirected to when clicking on the link.
   */
  url: PropTypes.string
};