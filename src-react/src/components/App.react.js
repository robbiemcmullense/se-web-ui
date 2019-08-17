import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
	render() {
		const { option, children } = this.props;
		return (
			<se-app option={option} ref={this._handleRef}>{children}</se-app>
		);
	}
}

App.defaultProps = {};

App.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Define the type of application. updating the option will impact the font used.
   * - `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`.
   * - `website`: For `se.com` application, the font used will be `Arial Rounded`.
   */
  option: PropTypes."technical" | "website"
};