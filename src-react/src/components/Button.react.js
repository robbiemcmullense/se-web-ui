import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
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
		const { block, caption, color, disabled, icon, iconColor, option, selected, size, type, value, didClick, children } = this.props;
		return (
			<se-button block={block} caption={caption} color={color} disabled={disabled} icon={icon} icon-color={iconColor} option={option} selected={selected} size={size} type={type} value={value} ref={this._handleRef} >{children}</se-button>
		);
	}
}

Button.defaultProps = {};

Button.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Optional property that defines if the button displays as a block in it's container.
When set to true, the button will be as wide as its container.
   */
  block: PropTypes.bool,
  /**
   * Optional property that defines if the button has a caption or tooltip text.
   */
  caption: PropTypes.string,
  /**
   * Defines the background color of the button. The default setting is `standard`.
   */
  color: PropTypes.string,
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.bool,
  /**
   * Optional property that determines if your button includes an icon.
   */
  icon: PropTypes.string,
  /**
   * Optional property to change the color of the icon when needed. For example, the user dropdown in the header component.
   */
  iconColor: PropTypes.string,
  /**
   * Defines the visual appearance of the button.
`flat` is the default option, which includes a gray background.
`raised` adds a box shadow to the button.
`outline` adds a border to the button.
`login` and `signup` are specific options for "Login" and "Sign Up" buttons in your application.
   */
  option: PropTypes.string,
  /**
   * Optional property that defines if the button should be shown as selected. Used with the `se-radio-group` component.
   */
  selected: PropTypes.bool,
  /**
   * Defines the size of the button.
`small` is the default option, with a 14px font and a 32px height.
`medium` sets the font to 16px and the height to 40px.
`large` sets the font to 18px and the height to 48px.
   */
  size: PropTypes.string,
  /**
   * Optional property.
`button`	is the default setting, creating a clickable button.
`submit`	creates a "submit" button (useful to submit form-data).
`reset`	creates a reset button (useful to reset form-data to its initial values).
   */
  type: PropTypes.string,
  /**
   * Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.
   */
  value: PropTypes.string,
  /**
   * Passes button data to the parent component on a click.
   */
  didClick: PropTypes.func
};