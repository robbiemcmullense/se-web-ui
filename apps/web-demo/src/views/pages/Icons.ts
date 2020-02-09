
let PostShow = {

    render : async () => {

        return /*html*/`
        <se-container position="absolute">
        <se-block>
          <se-block-header>Icons</se-block-header>
          <se-block-content>
            <div class="mycoolstyle">my content</div>
            <ul>
              ...
            </ul>
            <se-checkbox option="onoff"></se-checkbox>
          </se-block-content>
          <se-block-footer>
            <se-button option="raised">Raised</se-button>
            <se-button option="raised" color="primary">
              RaisedGreen
            </se-button>
            <se-button option="text">Text</se-button>
            <se-button option="text" color="primary">
              Primary
            </se-button>
          </se-block-footer>
        </se-block>
      </se-container>

        `
    }
    , after_render: async () => {
    }
}

export default PostShow;