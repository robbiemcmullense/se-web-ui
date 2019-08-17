import React, { Component } from "react";
import PropTypes from "prop-types";

export default class {{name}} extends Component {
{{#if events}}

  componentDidMount() {
    {{#each events}}
    this.switchCmp.addEventListener("{{event}}", e => this.props.{{event}}(e));
    {{/each}}
  }

  componentWillUnmount() {
    {{#each events}}
    this.switchCmp.removeEventListener("{{event}}", e => this.props.{{event}}(e));
    {{/each}}
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

{{/if}}
	render() {
		const { {{#each props}}{{name}}, {{/each}}{{#each events}}{{event}}, {{/each}}children } = this.props;
		return (
			<{{tag}} {{#each props}}{{attr}}={{#wrap name}}{{/wrap}} {{/each}}ref={this._handleRef}>{children}</{{tag}}>
		);
	}
}

{{name}}.defaultProps = {};

{{name}}.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  {{#each props}}
  /**
   * {{{docs}}}
   */
  {{name}}: PropTypes.{{{type}}},
  {{/each}}
  {{#each events}}
  /**
   * {{{docs}}}
   */
  {{event}}: PropTypes.function,
  {{/each}}
};