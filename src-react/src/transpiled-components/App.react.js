import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
	render() {
		const { /*[/*props, ]*/ children } = this.props;
		return (
			<se-app>{children}</se-app>
		);
	}
}

export default App;