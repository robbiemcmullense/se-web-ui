import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { option, children } = this.props;
		return (
			<se-app option={option} >{children}</se-app>
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
   * - `website` or `dcx`: For `se.com` application, the font used will be `Arial Rounded`.
   */
  option: PropTypes.string
};