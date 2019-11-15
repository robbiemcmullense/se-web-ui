import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didSelectedChange(e) {
    this.props.onDidSelectedChange && this.props.onDidSelectedChange(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didSelectedChange", e => this.didSelectedChange(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didSelectedChange", e => this.didSelectedChange(e));
  }

	render() {
		const { description, icon, iconColor, indentation, item, option, selected, didSelectedChange, children } = this.props;
		return (
			<se-list-item description={description} icon={icon} icon-color={iconColor} indentation={indentation} item={item} option={option} selected={selected} ref={this._handleRef} >{children}</se-list-item>
		);
	}
}

ListItem.defaultProps = {};

ListItem.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
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
  iconColor: PropTypes.string,
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
  option: PropTypes.string,
  /**
   * Defines if the list element should be selected or not.
   */
  selected: PropTypes.bool,
  /**
   * Event emitted to notify the list-group component that the selected state has changed.
   */
  didSelectedChange: PropTypes.func
};