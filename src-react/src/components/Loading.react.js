import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { loading, option, children } = this.props;
		return (
			<se-loading loading={loading} option={option} >{children}</se-loading>
		);
	}
}

Loading.defaultProps = {};

Loading.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Displays the loading icon on screen when set to `true`.
   */
  loading: PropTypes.bool,
  /**
   * Defines the visual display of the loader.
   * `standard` is the default option, and displays a spinning green circle.
   * `dialog` gives the loading icon a look-and-feel that it is within a popup dialog box.
   */
  option: PropTypes.string
};