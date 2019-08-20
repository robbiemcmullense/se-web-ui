import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { appTitle, copyright, domain, imageUrl, link, version, children } = this.props;
		return (
			<se-about app-title={appTitle} copyright={copyright} domain={domain} image-url={imageUrl} link={link} version={version} >{children}</se-about>
		);
	}
}

About.defaultProps = {};

About.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * The title of your about screen.
   */
  appTitle: PropTypes.string,
  /**
   * The copyright you would like to display.
   */
  copyright: PropTypes.string,
  /**
   * The domain you want to display.  If set to `ecostruxure`, it renders an EcoStruxure icon.
   */
  domain: PropTypes.string,
  /**
   * Sets the background image for your about page.
   */
  imageUrl: PropTypes.string,
  /**
   * An external link you would like to provide.
   */
  link: PropTypes.string,
  /**
   * The version number you want to display.
   */
  version: PropTypes.string
};