import React, { Component } from "react";
import PropTypes from "prop-types";

export default class {{component.name}} extends Component {
	render() {
		const { {{[ {{component.props.name}}, ]}} children } = this.props;
		return (
			<{{component.tag}}>{children}</{{component.tag}}>
		);
	}
}

{{component.name}}.defaultProps = {};

{{component.name}}.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  {{[ 
  /**
   * {{component.props.docs}}
   */
  {{component.props.name}}: PropTypes.{{component.props.type}} 
  ]}}
};