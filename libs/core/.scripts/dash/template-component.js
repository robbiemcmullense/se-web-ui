import React, { Component } from "react";
import PropTypes from "prop-types";

export default class {{name}} extends Component {
  constructor(props) {
    super(props);
    {{#if events}}
    this._handleRef = component => {
      this.switchCmp = component;
    };
    {{/if}}
  }
{{#if events}}

  {{#each events}}
  {{event}}(e) {
    this.props.on{{#firstToUpper event}}{{/firstToUpper}} && this.props.on{{#firstToUpper event}}{{/firstToUpper}}(e)
  }
  {{/each}}

  componentDidMount() {
  {{#each events}}
    this.switchCmp.addEventListener("{{event}}", e => this.{{event}}(e));
  {{/each}}
  }

  componentWillUnmount() {
  {{#each events}}
    this.switchCmp.removeEventListener("{{event}}", e => this.{{event}}(e));
  {{/each}}
  }
  {{/if}}

	render() {
		const { {{#each props}}{{name}}, {{/each}}{{#each events}}{{event}}, {{/each}}children } = this.props;
		return (
			<{{tag}} {{#each props}}{{attr}}={{#wrap name}}{{/wrap}} {{/each}}{{#if events}}ref={this._handleRef} {{/if}}>{children}</{{tag}}>
		);
	}
}

{{name}}.defaultProps = {};

{{name}}.propTypes = {
  /**
   * The Dash id of this component
   */
   id: PropTypes.string,
  /**
   * The children of this component
   */
  children: PropTypes.node,
  {{#each props}}
  /**
   * {{{docs}}}
   */
  {{name}}: PropTypes.{{#types type}}{{/types}},
  {{/each}}
  {{#each events}}
  /**
   * {{{docs}}}
   */
  {{event}}: PropTypes.func,
  {{/each}}
};