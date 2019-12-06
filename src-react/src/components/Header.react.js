import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { appTitle, domain, project, children } = this.props;
		return (
			<se-header app-title={appTitle} domain={domain} project={project} >{children}</se-header>
		);
	}
}

Header.defaultProps = {};

Header.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Sets the title of your application.
   */
  appTitle: PropTypes.string,
  /**
   * Defines the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed.
   */
  domain: PropTypes.string,
  /**
   * Defines the project name (useful for small projects) that can be used for versioning as well. It will be placed at the right side of the title.
   */
  project: PropTypes.string
};