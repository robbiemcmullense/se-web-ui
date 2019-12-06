import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Fab extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const { color, icon, option, position, children } = this.props;
		return (
			<se-fab color={color} icon={icon} option={option} position={position} >{children}</se-fab>
		);
	}
}

Fab.defaultProps = {};

Fab.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the color of your main action button .
The Default setting is `primary`, rendering a green background.
The `alternative` setting renders a white background.
   */
  color: PropTypes.string,
  /**
   * Property that determines if an icon is included in the main action button.
   */
  icon: PropTypes.string,
  /**
   * Property that determines the functionality of the FAB.
The default setting is `speeddial`, which will show/hide a dropdown menu when clicking on the FAB.
The `backtotop` setting returns you to the top of the page you are viewing when clicking on the FAB.
   */
  option: PropTypes.string,
  /**
   * Property that determines the position of the component.
The default setting is `bottom`, rendering a FAB at the bottom right corner.
The `top` setting renders the FAB at the top right corner.
   */
  position: PropTypes.string
};