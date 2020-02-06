import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FabItem extends Component {
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
		const { icon, didClick, children } = this.props;
		return (
			<se-fab-item icon={icon} ref={this._handleRef} >{children}</se-fab-item>
		);
	}
}

FabItem.defaultProps = {};

FabItem.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Property that determines if an icon is included in the floating action button.
   */
  icon: PropTypes.string,
  /**
   * Send the value of the caption to the parent when clicking on the item.
   */
  didClick: PropTypes.func
};