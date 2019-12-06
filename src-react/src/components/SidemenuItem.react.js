import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SidemenuItem extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didClick(e) {
    this.props.onDidClick && this.props.onDidClick(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didClick", e => this.didClick(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didClick", e => this.didClick(e));
  }

	render() {
		const { active, item, didClick, children } = this.props;
		return (
			<se-sidemenu-item active={active} item={item} ref={this._handleRef} >{children}</se-sidemenu-item>
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
The default setting is `false`.
   */
  active: PropTypes.bool,
  /**
   * Defines the title of the menu item.
   */
  item: PropTypes.string,
  /**
   * Send an event when the sidemenu item changes
   */
  didClick: PropTypes.func
};