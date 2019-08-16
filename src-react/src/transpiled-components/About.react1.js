import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
  render() {
    const { appTitle, copyright, imageUrl, domain, link, version, children } = this.props;
    return (
      <se-about app-title={appTitle} copyright={copyright} imageUrl={imageUrl} domain={domain} link={link} version={version}>{children}</se-about>
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
   * The title that will be printed when this component is rendered.
   */
	appTitle: PropTypes.string,
	/**
   * The version number you want to display.
	*/
	copyright: PropTypes.string,
  /**
   * The domain you want to display.  If set to `ecostruxure`, it renders an EcoStruxure icon.
	*/
	imageUrl: PropTypes.string,
  /**
   * Sets the background image for your about page.
	*/
	domain: PropTypes.string,
  /**
   * An external link you would like to provide.
	*/
	link: PropTypes.string,
  /**
   * The version number you want to display.
	*/
	version: PropTypes.string
};