import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Authentication extends Component {
	render() {
		const { appTitle, copyright, domain, hide, imageUrl, link, logo, version, children } = this.props;
		return (
			<se-authentication app-title={appTitle} copyright={copyright} domain={domain} hide={hide} image-url={imageUrl} link={link} logo={logo} version={version} ref={this._handleRef}>{children}</se-authentication>
		);
	}
}

Authentication.defaultProps = {};

Authentication.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * The title of your authentication screen.
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
   * If set to `true`, this will hide the authentication screen.
   */
  hide: PropTypes.boolean,
  /**
   * Sets the background image for your authentication screen.
   */
  imageUrl: PropTypes.string,
  /**
   * An external link you would like to provide.
   */
  link: PropTypes.string,
  /**
   * A logo that you wish to display.
   */
  logo: PropTypes.string,
  /**
   * The version number you want to display.
   */
  version: PropTypes.string
};