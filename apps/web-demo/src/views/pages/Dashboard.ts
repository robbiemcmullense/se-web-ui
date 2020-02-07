let Dashboard = {
    render : async () => {
        let view =  /*html*/`
        <se-container position="absolute">
        <se-block>
          <se-block-header>Filter</se-block-header>
          <se-block-content>
            <div class="button-row">
              <se-button option="flat">Flat</se-button>
              <se-button option="flat" color="primary">
                FlatGreen
              </se-button>
              <se-button option="raised">Raised</se-button>
              <se-button option="raised" color="primary">
                RaisedGreen
              </se-button>
              <se-button option="text">Text</se-button>
              <se-button option="text" color="primary">
                Primary
              </se-button>
            </div>
          </se-block-content>
          <se-block-footer>
            <se-button option="raised">Apply</se-button>
          </se-block-footer>
        </se-block>
      </se-container>

        `
        return view
    },
    after_render: async () => {}

}

export default Dashboard;
