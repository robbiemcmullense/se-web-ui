import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Sidemenu extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { label, link, children } = this.props;
		return (
			<se-sidemenu label={label} link={link} >{children}</se-sidemenu>
		);
	}
}

Sidemenu.defaultProps = {};

Sidemenu.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the text displayed in the header of the Sidemenu.
   * The default value is `Menu`.
   */
  label: PropTypes.string,
  /**
   * 
   */
  link: PropTypes.string
};