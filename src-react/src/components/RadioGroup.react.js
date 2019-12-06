import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this._handleRef = component => {
      this.switchCmp = component;
    };
  }

  didChange(e) {
    this.props.onDidChange && this.props.onDidChange(e)
  }

  componentDidMount() {
    this.switchCmp.addEventListener("didChange", e => this.didChange(e));
  }

  componentWillUnmount() {
    this.switchCmp.removeEventListener("didChange", e => this.didChange(e));
  }

	render() {
		const { color, disabled, size, value, didChange, children } = this.props;
		return (
			<se-radio-group color={color} disabled={disabled} size={size} value={value} ref={this._handleRef} >{children}</se-radio-group>
		);
	}
}

RadioGroup.defaultProps = {};

RadioGroup.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines the background color of each button in the group.  The default setting is `standard`, rendering a light gray background.
   */
  color: PropTypes.string,
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  disabled: PropTypes.bool,
  /**
   * Defines the height of each button in the group.
`small` is the default setting, rendering a 32px height and a 14px font size.
`nano` sets the height to 24px and the font size to 12px.
   */
  size: PropTypes.string,
  /**
   * Defines the selected values of the array.
   */
  value: PropTypes.string,
  /**
   * Passes the selected button value to the parent component when clicking on a button in the group.
   */
  didChange: PropTypes.func
};