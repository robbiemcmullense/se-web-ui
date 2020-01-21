import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { duration, children } = this.props;
		return (
			<se-banner duration={duration} >{children}</se-banner>
		);
	}
}

Banner.defaultProps = {};

Banner.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Set the duration (in ms) that the banner will automatically switch slides.
   * Default is `6000`.
   */
  duration: PropTypes.number
};