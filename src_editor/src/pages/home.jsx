import React, { Component } from "react";
import Editor from "../components/editor";
import ViewResult from "../components/viewResult";

class Home extends Component {
  state = {
    code: "",
  };

  resizedLayout() {
    if(this.myEditor){
      this.myEditor.resize();
    }
  }
  componentDidMount() {
    this.splitLayout.addEventListener("iron-resize", e => this.resizedLayout(e));

    setTimeout(() => {
      this.resizedLayout();
    }, 1000);
  }

  componentWillUnmount() {
    this.splitLayout.removeEventListener("iron-resize", e => this.resizedLayout(e));
  }

  updateDisplay(code){
    console.log('CODE TO DISPLAY', code)
    this.setState({ code: code });
  }

  render() {
    const { code } = this.state;

    return (
      <se-container mode="fill">
        <vaadin-split-layout ref={ref => (this.splitLayout = ref)}>
          <se-container mode="fill">
            <Editor handleCode={(newCode)=> (this.updateDisplay(newCode))} ref={ref => (this.myEditor = ref)}/>
          </se-container>
          <se-container mode="fill">
            <ViewResult code={code} />
          </se-container>
        </vaadin-split-layout>
      </se-container>
    );
  }
}

export default Home;
