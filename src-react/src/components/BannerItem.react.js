import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BannerItem extends Component {
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
		const { active, imageUrl, didChange, children } = this.props;
		return (
			<se-banner-item active={active} image-url={imageUrl} ref={this._handleRef} >{children}</se-banner-item>
		);
	}
}

BannerItem.defaultProps = {};

BannerItem.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Indicates the active banner item in your banner component.
   */
  active: PropTypes.bool,
  /**
   * Sets the background image for your banner item.
   */
  imageUrl: PropTypes.string,
  /**
   * Send an event when the banner item changes
   */
  didChange: PropTypes.func
};