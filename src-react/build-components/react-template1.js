import React, { Component } from "react";
import PropTypes from "prop-types";

export default class {{component.name}} extends Component {
	render() {
		const { {{#each parameters}} {{component.props.name}}, {{/each}} children } = this.props;
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
  {{#each parameters}}
  /**
   * {{component.props.docs}}
   */
  {{component.props.name}}: PropTypes.{{component.props.type}} 
  {{/each}}
};