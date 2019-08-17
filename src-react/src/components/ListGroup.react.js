import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListGroup extends Component {

  componentDidMount() {
    this.switchCmp.addEventListener("didGroupClick", e => this.props.didGroupClick(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didGroupClick", e => this.props.didGroupClick(e));
  }

  _handleRef = component => {
    this.switchCmp = component;
  };

	render() {
		const { canCollapse, collapsed, description, icon, iconColor, indentation, item, option, selected, selectedChild, didGroupClick, children } = this.props;
		return (
			<se-list-group can-collapse={canCollapse} collapsed={collapsed} description={description} icon={icon} icon-color={iconColor} indentation={indentation} item={item} option={option} selected={selected} selected-child={selectedChild} ref={this._handleRef}>{children}</se-list-group>
		);
	}
}

ListGroup.defaultProps = {};

ListGroup.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines if list groups can be collapsed, true by default.
   */
  canCollapse: PropTypes.boolean,
  /**
   * Defines if the item group is collapsed/closed. The default setting is `false`.
   */
  collapsed: PropTypes.boolean,
  /**
   * Defines the description of the item, placed under its title.
   */
  description: PropTypes.string,
  /**
   * Places an icon on the left side of the item list.
   */
  icon: PropTypes.string,
  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  iconColor: PropTypes."primary" | "secondary",
  /**
   * Defines the group indentation to add paddings to the list item (used with multiple list groups).
   */
  indentation: PropTypes.number,
  /**
   * Defines the title of the item.
   */
  item: PropTypes.string,
  /**
   * Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element.
   */
  option: PropTypes."classic" | "dropdown" | "headline" | "nav" | "treeview",
  /**
   * Defines if the list group should be displayed as selected (if one of its child elements is selected when collapsed).
   */
  selected: PropTypes.boolean,
  /**
   * 
   */
  selectedChild: PropTypes.boolean,
  /**
   * Pass the group data to the parent when collapsed.
   */
  didGroupClick: PropTypes.function
};