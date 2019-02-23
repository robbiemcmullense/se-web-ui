import React, { Component } from "react";

export class ViewResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.code !== this.props.code) {
      this.setState({code: this.props.code });
    }
  }
  rawMarkup() {
    var {code} = this.state;
    return { __html: `<se-app>${code}</se-app>` };
  }
  render() {
    return (
      <se-container mode="fill" position="absolute">
        <se-app dangerouslySetInnerHTML={this.rawMarkup()}></se-app>
      </se-container>

    );
  }
}

export default ViewResult;
