import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SidemenuItem extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didClick", e => this.props.didClick(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClick", e => this.props.didClick(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { active, item, didClick, children } = this.props;
		return (
			<se-sidemenu-item active={active} item={item} ref={this._handleRef}>{children}</se-sidemenu-item>
		);
	}
}

SidemenuItem.defaultProps = {};

SidemenuItem.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines if the menu item is active or not.
   * The default setting is `false`.
   */
  active: PropTypes.boolean,
  /**
   * Defines the title of the menu item.
   */
  item: PropTypes.string,
  /**
   * 
   */
  didClick: PropTypes.function
};