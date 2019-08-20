import React, { Component } from "react";
import PropTypes from "prop-types";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { canCollapse, option, children } = this.props;
		return (
			<se-list can-collapse={canCollapse} option={option} >{children}</se-list>
		);
	}
}

List.defaultProps = {};

List.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines if list groups can be collapsed.  The default setting is `true`.
   */
  canCollapse: PropTypes.bool,
  /**
   * Defines the style of the list.  The default setting is `classic`.
   */
  option: PropTypes.string
};