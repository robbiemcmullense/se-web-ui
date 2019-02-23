import React, { Component } from "react";

import MonacoEditor from "react-monaco-editor";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code:
       ` <se-widget mode="fill">
          <se-widget-header>Filter</se-widget-header>
          <se-widget-content>
            <se-button mode="flat">Flat</se-button>
            <se-button mode="flat" color="primary">FlatGreen</se-button>
            <se-button id="raisedBtn" mode="raised">Raised</se-button>
            <se-button id="raisedBtn2" mode="raised" color="primary">RaisedGreen</se-button>
            <se-button id="textBtn1" mode="text">Text</se-button>
            <se-button id="textBtn2" mode="text" color="primary">Primary</se-button>
          </se-widget-content>
          <se-widget-footer>
            <div slot="end">
              <se-button id="raisedBtn2" mode="raised" color="primary">RaisedGreen</se-button>
            </div>
          </se-widget-footer>
        </se-widget>`
    };
  }

  onChange = (newValue) => {
    console.log("onChange");
    this.setState({ code: newValue });
    this.props.handleCode(newValue);
  }
  resize = () => {
    console.log("resize called");

    if(this.editor){
      this.editor.layout();
    }
  }
  editorDidMount = (editor) => {
    // eslint-disable-next-line no-console
    // console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
    this.editor.focus();
    this.props.handleCode(this.state.code);
    setTimeout(() => {
      this.editor.getAction('editor.action.formatDocument').run()
    }, 200);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <se-container mode="fill" position="absolute">
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </se-container>
    );
  }
}

export default Editor;
