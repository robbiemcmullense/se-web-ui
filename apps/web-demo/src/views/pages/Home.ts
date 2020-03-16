// --------------------------------
//  Define Data Sources
// --------------------------------

let Home = {
    render : async () => {
        let view =  `
        <se-container>
          <se-block width="250px">
            <se-list option="classic">
              <se-list-item id="item1" item="my item 1" selected="false" icon="user_standard" icon-color="primary"
                description="I have a description" href="https://www.google.com">
              </se-list-item>
              <se-list-item id="item2" item="my item 2 no description with a long text" icon="user_standard"
                icon-color="primary">
              </se-list-item>
              <se-list-item id="item3" item="my item 3 no icon" description="I'm here too">
              </se-list-item>
              <se-list-item id="item4" item="I'm the selected one!" selected="true">
              </se-list-item>
              <se-list-item item="Basic Item" icon="action_settings2">
              </se-list-item>
              <se-list-group item="I have a selected child" icon="action_settings2" icon-color="primary"
                description="I'm selected if collapsed" id="simple-collapse-parent">
                <se-list-item item="my item 1" selected="false" icon="action_settings2" icon-color="primary"
                  description="I have a description">
                </se-list-item>
                <se-list-item item="my item 2 no description" icon="action_settings2" icon-color="primary">
                </se-list-item>
                <se-list-item item="my item 3 no icon" icon="action_settings2" description="I'm here too">
                </se-list-item>
                <se-list-item item="Check me!" icon="action_settings2" selected="false">
                  <se-checkbox label="Check me"></se-checkbox>
                </se-list-item>
                <se-list-item item="Click the button!" icon="action_settings2">
                  <se-button>Select</se-button>
                </se-list-item>
                <se-list-group id="simple-collapse" item="simple collapse">
                  <se-list-item item="No icon, not selected" selected="false">
                  </se-list-item>
                  <se-list-item item="my item 2 no description" icon="action_settings2" icon-color="primary">
                  </se-list-item>
                  <se-list-item item="my item 3 no icon" description="I'm here too">
                  </se-list-item>
                  <se-list-item id="basic-item" item="Basic Item" selected="true">
                  </se-list-item>
                </se-list-group>
              </se-list-group>
              <se-list-group item="simple collapse">
                <se-list-item item="No icon, not selected" selected="false">
                </se-list-item>
                <se-list-item item="my item 2 no description" icon="action_settings2" icon-color="primary">
                </se-list-item>
                <se-list-item item="my item 3 no icon" description="I'm here too">
                </se-list-item>
                <se-list-item item="Basic Item">
                </se-list-item>
              </se-list-group>
              <se-list-group item="Widget Title">
                  <se-block role="listitem" option="widget" clickable="true">
                    <se-block-content>Testing a block widget within an se-list-group</se-block-content>
                  </se-block>
                  <se-block role="listitem" option="widget">
                    <se-block-header>More</se-block-header>
                    <se-block-content>Further testing</se-block-content>
                    <se-block-footer>Fin</se-block-footer>
                  </se-block>

              </se-list-group>
              <!-- <se-divider></se-divider> -->
              <se-list-group item="Card Title">
                <se-block role="listitem" option="card" outline outlinecolor="alternative" corner="0" elevation="false">
                  <se-block-content>Testing a block card within an se-list-group</se-block-content>
                </se-block>
                <se-block role="listitem" option="card" clickable="true">
                  <se-block-header id="test">More</se-block-header>
                  <se-block-content>Further testing</se-block-content>
                  <se-block-footer>Fin</se-block-footer>
                </se-block>
              </se-list-group>
              <!-- <se-divider></se-divider> -->
              <se-list-group item="Basic Title">
                <se-block role="listitem" elevation="large" option="basic">
                  <se-block-content>Testing a basic card within an se-list-group</se-block-content>
                </se-block>
                <se-block role="listitem" option="basic" clickable="true">
                  <se-block-header>More</se-block-header>
                  <se-block-content>Further testing</se-block-content>
                  <se-block-footer>Fin</se-block-footer>
                </se-block>
              </se-list-group>
              <!-- <se-divider></se-divider> -->
              <se-list-item item="My last item"></se-list-item>
            </se-list>
          </se-block>
          <se-divider option="vertical"></se-divider>

          <se-container color="standard" option="centered" direction="column" position="relative" display="block">
            <se-container color="none" display="block">
              <se-banner id="se-banner">
                <se-banner-item
                  image-url="url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)">
                  <se-block color="none" divider="false">
                    <se-block-header>Reliable Through the Storm</se-block-header>
                    <se-block-content>
                      <div>
                        And we do it at every level with EcoStruxure.
                        Discover how Schneider Electric bold ideas happen with an INNOVATION portfolio
                        of IoT enabled, connected products, edge control, and apps, analytics, and services.
                      </div>
                    </se-block-content>
                    <se-block-footer>
                      <se-button slot="start" color="secondary">Call to action</se-button>
                      <se-button slot="start" option="outline">Secondary button</se-button>
                    </se-block-footer>
                  </se-block>
                </se-banner-item>
                <se-banner-item
                  image-url="url(https://images.unsplash.com/photo-1440098334316-9b3afb87b5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)">
                  <se-block outline outline-color="primary" clickable margin="xlarge" corner="4" color="standard">
                    <se-block-header>Header 2</se-block-header>
                    <se-block-content>Content 2</se-block-content>
                    <se-block-footer>Footer 2</se-block-footer>
                  </se-block>
                </se-banner-item>
                <se-banner-item
                  image-url="url(https://images.freeimages.com/images/large-previews/199/sunflowers-6-1392951.jpg)">
                  <se-block>
                    <se-block-header>Header 3</se-block-header>
                    <se-block-content>Content 3</se-block-content>
                    <se-block-footer>Footer 3</se-block-footer>
                  </se-block>
                </se-banner-item>
              </se-banner>
            </se-container>


            <se-container padding="large" color="alternative">
              <se-table style="max-height:350px">
                <se-table-group-header>
                    <se-table-item-header width="72px"></se-table-item-header>
                    <se-table-item-header width="64px"></se-table-item-header>
                    <se-table-item-header sort="asc">Title</se-table-item-header>
                    <se-table-item-header flex="50%" sort="none">Secondary Info</se-table-item-header>
                    <se-table-item-header clickable="true"><se-icon color="primary">airconditioner_hot_heating</se-icon> - with a lot of extra text to make it as long as possible</se-table-item-header>
                </se-table-group-header>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button">arrow2_up</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item title="best practice is to provide a title in case all content is not visible">Testing 1 with a very long title that continues on</se-table-item>
                    <se-table-item flex="50%">2nd test</se-table-item>
                    <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                    <div slot="detail">
                      <div style="padding:12px 24px;">
                        <h4>You may put any type of content here</h4>
                        <p>You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                      </div>
                    </div>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item title="best practice is to provide a title in case all content is not visible">Testing 1.5 - with the detail section hidden</se-table-item>
                    <se-table-item flex="50%">2nd test</se-table-item>
                    <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                    <div slot="detail">
                      <div style="display:none;padding:12px 24px;">
                        <h4>You may put any type of content here</h4>
                        <p>You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                      </div>
                    </div>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Last group with some more info</se-table-item>
                    <se-table-item flex="50%">Test item 2</se-table-item>
                    <se-table-item>Very last test item</se-table-item>
                </se-table-group>
                <se-table-group selectable="true" selected="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox selected="true"></se-checkbox></se-table-item>
                    <se-table-item>Group 2</se-table-item>
                    <se-table-item flex="50%">Another test item with a lot more content than the other items so that we can see what happens when there is multiple lines of information that needs to be shown</se-table-item>
                    <se-table-item>Last test item</se-table-item>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Testing 1</se-table-item>
                    <se-table-item flex="50%">2nd test</se-table-item>
                    <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Group 2</se-table-item>
                    <se-table-item flex="50%">Another test item with a lot more content than the other items</se-table-item>
                    <se-table-item>Last test item</se-table-item>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Last group with some more info</se-table-item>
                    <se-table-item flex="50%">Test item 2</se-table-item>
                    <se-table-item>Very last test item</se-table-item>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Testing 1</se-table-item>
                    <se-table-item flex="50%">2nd test</se-table-item>
                    <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Group 2</se-table-item>
                    <se-table-item flex="50%">Another test item with a lot more content than the other items</se-table-item>
                    <se-table-item>Last test item</se-table-item>
                </se-table-group>
                <se-table-group selectable="true">
                    <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                    <se-table-item width="64px"><se-checkbox></se-checkbox></se-table-item>
                    <se-table-item>Last group with some more info</se-table-item>
                    <se-table-item flex="50%">Test item 2</se-table-item>
                    <se-table-item>Very last test item</se-table-item>
                </se-table-group>
              </se-table>
            </se-container>


            <se-container color="none" option="widget" display="grid" column-size="350px" row-size="350px">
              <se-block option="card-old" color="none" outline="true" corner="none" outline-color="secondary" clickable="true" id="block0">
                <se-block-header>
                  <div slot="start">
                    <se-icon color="primary">airconditioner_hot_heating</se-icon>
                  </div>
                  Typography
                  <div slot="end">
                    <se-dropdown alignment="right" max-width="300px">
                      <se-icon slot="trigger" option="button" color="alternative">other_vertical</se-icon>
                      <se-list option="dropdown">
                        <se-list-item item="I'm in a 300px wide dropdown"></se-list-item>
                        <se-list-item item="my item 2 no description  with a long text long text"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                      </se-list>
                    </se-dropdown>
                    <se-icon option="button" color="alternative" onclick="toggle(0)">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <se-button icon-only>
                    <se-icon slot="icon">
                      folder
                    </se-icon>
                  </se-button>
                  <h1>My h1 string with a divider</h1>
                  <se-divider></se-divider>
                  <h2>My h2 string with a divider </h2>
                  <se-divider></se-divider>
                  <h3>My h3 string with a divider </h3>
                  <se-divider></se-divider>
                  <h4>My h4 string with a divider </h4>
                  <se-divider></se-divider>
                  <h5>My h5 string with a divider </h5>
                  <se-divider></se-divider>
                  <h6>My h6 string with a divider </h6>
                  <se-divider></se-divider>
                  <p>
                    Lorem ipsum dolor sit amet, <se-link>consectetur adipiscing elit, sed dooo</se-link> eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </se-block-content>
                <se-block-footer>
                  <se-button onclick="openSnackbar()" option="raised">Open Snackbar</se-button>
                </se-block-footer>
              </se-block>
              <se-block enlarged="vertical" clickable="true" color="alternative" outline-color="primary" corner="nano"
                outline="true" id="block1">
                <se-block-header>
                  Headline list with colored icons
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(1)">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content option="fill">
                  <se-list option="headline" can-collapse="true">
                    <se-list-group item="Headline Example">
                      <se-list-item item="Standard color icon" icon="action_doc_new" icon-color="standard"></se-list-item>
                      <se-list-item item="Primary color icon" icon="action_doc_add" icon-color="primary"></se-list-item>
                      <se-list-item item="Disable color icon" icon="action_editor" icon-color="disable"></se-list-item>
                    </se-list-group>
                    <se-list-group item="Warning and error icon colors">
                      <se-list-item item="Warning color icon" icon="general_danger_wired" icon-color="warning">
                      </se-list-item>
                      <se-list-item item="Error color icon" icon="notification_error_full_stroke" icon-color="error">
                      </se-list-item>
                    </se-list-group>
                  </se-list>
                </se-block-content>
              </se-block>
              <se-block margin="small" corner="small" color="standard" clickable="true" corner="small" outline="true"
                id="block2">
                <se-block-header>
                  <div slot="start">
                    <se-icon color="primary">connection_bluetooth</se-icon>
                  </div>
                  Buttons
                  <div slot="end">
                    <se-icon option="button" color="standard" onclick="toggle(2, 'vertical')">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <se-button option="flat">standard flat</se-button>
                  <se-button option="raised">standard raised</se-button>
                  <se-divider></se-divider>
                  <se-button option="flat" block="true">standard flat block</se-button>
                  <se-button id="raisedBtn" option="raised" block="true">
                    <se-icon slot="icon" size="small">presentation_mode</se-icon>
                    standard raised block
                  </se-button>
                  <se-divider></se-divider>
                  <se-button id="flatBtn1" option="flat" color="alternative">
                    <se-icon slot="icon">presentation_mode</se-icon>
                    alternative
                  </se-button>
                  <se-button option="flat" color="primary" size="large">
                    <se-icon slot="icon" size="small">action_resize</se-icon>
                    primary
                  </se-button>
                  <se-button option="flat" color="secondary">secondary</se-button>
                  <se-dropdown alignment="left">
                    <se-button slot="trigger" option="flat">Dropdown</se-button>
                    <se-list option="dropdown">
                      <se-list-item item="Item 1"></se-list-item>
                      <se-list-item item="Item 2"></se-list-item>
                      <se-list-item item="Item 3 longer description"></se-list-item>
                      <se-list-item item="Basic Item"></se-list-item>
                      <se-list-item item="I'm here"></se-list-item>
                      <se-list-item item="My item with no description and a long text"></se-list-item>
                    </se-list>
                  </se-dropdown>
                  <se-button icon="action_resize">Resize</se-button>
                  <se-button option="outline">Outline</se-button>
                  <se-button option="outline" color="alternative">Outline alternative</se-button>
                  <se-button option="outline" color="primary">Outline primary</se-button>
                  <se-button option="outline" color="secondary">Outline secondary</se-button>
                  <se-button icon="action_resize"></se-button>
                  <se-divider></se-divider>
                  <se-button icon="action_resize">default size</se-button>
                  <se-button icon="action_resize" size="medium">medium size</se-button>
                  <se-button icon="action_resize" size="large">large size</se-button>
                  <se-divider></se-divider>
                  <se-button onclick="standardLoader()">Standard Loader</se-button>
                  <se-button onclick="dialogLoader()">Dialog Loader</se-button>
                  <se-divider></se-divider>
                  <se-icon size="nano">calendar</se-icon>
                  <se-icon size="small">calendar</se-icon>
                  <se-icon size="medium">calendar</se-icon>
                  <se-icon size="large">calendar</se-icon>
                  <se-icon size="xlarge">calendar</se-icon>
                  <se-divider></se-divider>
                  <se-button option='fab' icon="notebook_paper" color="primary"></se-button>
                  <se-divider></se-divider>
                  <ul>
                    <li id="chip-info"></li>
                  </ul>
                  <se-chip block="true" can-close="true" value="Chip Block"></se-chip>
                  <se-chip id="se-chip" can-close="true" value="Chip Std"></se-chip>
                  <se-chip can-close="true" selected="true" value="Chip Std Selected"></se-chip>
                  <se-chip can-close="true" disabled="true" value="Chip Std Disabled"></se-chip>
                  <div style="background-color:#9fa0a4;">
                    <se-chip value="Chip Alt" can-close="true" color="alternative"></se-chip>
                    <se-chip value="Chip Alt Selected" selected="true" can-close="true" color="alternative"></se-chip>
                    <se-chip value="Chip Alt Disabled" can-close="true" disabled="true" color="alternative"></se-chip>
                  </div>
                  <se-chip block="true" value="Chip Block"></se-chip>
                  <se-chip value="Chip Std"></se-chip>
                  <se-chip selected="true" value="Chip Std Selected"></se-chip>
                  <se-chip disabled="true" value="Chip Std Disabled"></se-chip>
                  <div style="background-color:#9fa0a4;">
                    <se-chip value="Chip Alt" color="alternative"></se-chip>
                    <se-chip value="Chip Alt Selected" selected="true" color="alternative"></se-chip>
                    <se-chip value="Chip Alt Disabled" disabled="true" color="alternative"></se-chip>
                  </div>
                  <se-divider></se-divider>
                  <se-link url="http://google.com">Link to Google</se-link>
                  <se-link url="http://google.com" option="external">External Link to Google</se-link>
                  <se-link url="http://google.com" disabled="true">Link to Google</se-link>
                  <se-link url="http://google.com" option="external" disabled="true">External Link to Google</se-link>
                  <ul>
                    <li id="switch-message">the selected state of the on/off switch is: <span></span></li>
                    <li id="toggle-switch-message">the selected state of the toggle switch is: <span></span></li>
                  </ul>
                  <se-checkbox option="onoff" id="on-off-switch-el"></se-checkbox>
                  <se-checkbox option="onoff" disabled="true" text-on="active" text-off="inactive" selected="true">
                  </se-checkbox>
                  <se-checkbox id="toggle-switch-el" option="switch" label="Switch Label"></se-checkbox>
                  <se-checkbox selected="true" option="switch" disabled="true" label="Disabled Switch Label"></se-checkbox>
                  <se-divider></se-divider>
                  <ul>
                    <li id="radio-message">selected radio icon button: <span></span></li>
                  </ul>
                  <se-radio-group id="RadioGroup1">
                    <se-button value="left" icon="arrow2_left"></se-button>
                    <se-button value="right" icon="arrow2_right"></se-button>
                  </se-radio-group>
                  <se-divider></se-divider>
                  <ul>
                    <li>Example Checkbox and Radio components:</li>
                  </ul>
                  <se-checkbox id="checkbox-primary" value="primary" label="Checkbox Primary"></se-checkbox>
                  <se-checkbox value="secondary" selected="true" color="secondary" label="Checkbox Secondary"></se-checkbox>
                  <se-radio id="radio-primary" value="radio-primary" label="Radio Primary" selected="true"></se-radio>
                  <se-radio value="radio-secondary" label="Radio Secondary" color="secondary"></se-radio>
                  <se-divider></se-divider>
                  <ul>
                    <li id="checkbox-button-message">selected radio buttons: <span>second</span></li>
                  </ul>
                  <se-radio-group id="btnGroup1" value="second">
                    <se-button value="first">Check1</se-button>
                    <se-button value="second">Check2</se-button>
                    <se-button value="third">Check3</se-button>
                  </se-radio-group>
                  <se-divider></se-divider>
                  <ul>
                    <li>Nano-sized button groups:</li>
                  </ul>
                  <se-radio-group size="nano">
                    <se-button value="left" icon="arrow2_left"></se-button>
                    <se-button value="right" icon="arrow2_right"></se-button>
                  </se-radio-group>
                  <se-radio-group size="nano" value="second">
                    <se-button value="first">Check1</se-button>
                    <se-button value="second">Check2</se-button>
                    <se-button value="third">Check3</se-button>
                  </se-radio-group>
                </se-block-content>
              </se-block>
              <se-block margin="large" clickable="true" clickable-bar="false" outline="true" outline-color="standard"
                id="block3">
                <se-loading id="dialog-loader" loading="false" option="dialog"></se-loading>
                <se-block-header>
                  Forms
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(3, 'horizontal')">presentation_mode
                    </se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <ul style="padding: 10px;">
                    <li id="form-field-message">last submitted form field value: <span></span></li>
                  </ul>
                  <h4>Inlined:</h4>
                  <se-form-field id="checkbox-form" label="Inline Checkbox" type="checkbox" required="true">
                    <se-checkbox required="required"></se-checkbox>
                  </se-form-field>
                  <se-form-field id="radio-form" label="Inline Radio" type="radio" required="true">
                    <se-radio></se-radio>
                  </se-form-field>
                  <se-form-field id="input-form" label="Input" required="true">
                    <input type="text" required/>
                  </se-form-field>
                  <se-form-field id="select-form" label="Select" required="true" type="select">
                    <select>
                      <option>Inline Option 1</option>
                      <option>Inline Option 2</option>
                      <option>Inline Option 3</option>
                    </select>
                  </se-form-field>
                  <se-form-field id="textarea-form" type="input" label="Multi-Line Input">
                    <textarea rows="5"></textarea>
                  </se-form-field>
                  <se-form-field label="Date">
                    <input type="date" />
                  </se-form-field>
                  <h4>Stacked:</h4>
                  <se-form-field id="input-stacked-form" label="Input" required="true" option="stacked">
                    <input type="text" />
                  </se-form-field>
                  <se-form-field label="Select" required="true" type="select" option="stacked">
                    <select>
                      <option>Stacked Option 1</option>
                      <option>Stacked Option 2</option>
                      <option>Stacked Option 3</option>
                    </select>
                  </se-form-field>
                  <se-form-field option="stacked" type="input" label="Very Long Multi-Line Input">
                    <textarea rows="10"></textarea>
                  </se-form-field>
                  <se-form-field option="stacked" label="Stacked Checkbox" type="checkbox" required="true">
                    <se-checkbox></se-checkbox>
                  </se-form-field>
                  <se-form-field option="stacked" label="Stacked Radio" type="radio" required="true">
                    <se-radio></se-radio>
                  </se-form-field>
                </se-block-content>
              </se-block>
              <se-block divider="true" outline="false" id="block4">
                <se-block-header>
                  Breadcrumbs & Modals
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(4)">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <se-breadcrumb id="my-breadcrumb">
                    <se-breadcrumb-item href="#">First</se-breadcrumb-item>
                    <se-breadcrumb-item href="#">Second</se-breadcrumb-item>
                    <se-breadcrumb-item href="#">Third</se-breadcrumb-item>
                    <se-breadcrumb-item href="#">Last</se-breadcrumb-item>
                  </se-breadcrumb>
                  <se-button onclick="removeLastBreadcrumb()" option="raised">Remove Last Breadcrumb</se-button>
                  <se-button onclick="addNewBreadcrumb()" option="raised">Add New Breadcrumb</se-button>
                  <se-button onclick="removeSidemenuItem()" option="raised">Remove Sidemenu Item</se-button>
                  <se-button onclick="addNewSidemenuItem()" option="raised">Add New Sidemenu Item</se-button>

                  <se-divider></se-divider>
                  <se-button onclick="openDialog('dialog-simple-notitle')" option="raised">Open Dialog simple</se-button>
                  <se-button onclick="openDialog('dialog-simple-title')" option="raised">Open Dialog title & icon
                  </se-button>
                  <se-button onclick="openDialog('dialog-complex')" option="raised">Open Dialog complex</se-button>
                  <se-button onclick="addBannerItem()" option="raised">Add Banner Item</se-button>
                  <se-button onclick="removeLastBannerItem()" option="raised">Remove Last Banner Item</se-button>
                </se-block-content>
              </se-block>
              <se-block enlarged="true" option="widget" outline="true" divider="false" id="block5">
                <se-block-header>
                  Linear chart & Slider
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(5)">exit_presentation</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <se-visual-linear percentage="33" value="8" label="Labels"></se-visual-linear>
                  <se-visual-linear id="progBar" secolor="error" percentage="66" value="16" label="Labels">
                  </se-visual-linear>
                  <se-visual-linear secolor="#0011aa" percentage="89" option="stacked" value="59" label="Stacked Labels">
                  </se-visual-linear>
                  <se-slider id="sliderID"></se-slider>
                  <ul>
                    <li id="slider-value"><span></span></li>
                  </ul>
                </se-block-content>
              </se-block>
              <se-block corner="4" clickable id="block6">
                <se-block-header>
                  Radial chart
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(6)">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <se-visual-radial percentage="30" label="units"></se-visual-radial>
                  <se-visual-radial percentage="60" secolor="warning" label="units"></se-visual-radial>
                  <se-visual-radial percentage="90" secolor="#1400ee" label="units" value="8"></se-visual-radial>
                </se-block-content>
              </se-block>
              <se-block enlarged="true" id="block7">
                <se-block-header>
                  Lists
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(7)">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <se-container option="fill" style="border:1px solid black;">
                    <se-block width="250px" option="fill">
                      <se-list>
                        <se-list-item item="my classic list item" icon="user_standard" icon-color="primary" description="I have a description that is really super long"></se-list-item>
                        <se-list-item item="my item 2 no description with a long text" icon="user_standard" icon-color="primary"></se-list-item>
                        <se-list-item item="Basic Item"></se-list-item>
                        <se-list-item item="Check me!" icon="action_settings2" selected="false" role="listitem" class="hydrated"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
                        <se-list-item item="Click the button!" icon="action_settings2" role="listitem" class="hydrated"> <se-button class="hydrated">Select</se-button> </se-list-item>
                        <se-list-group item="I have a selected child">
                          <se-list-item item="my item 1" icon="action_settings2" icon-color="primary" description="I have a description"></se-list-item>
                          <se-list-item item="my item 2 no description" selected="true" icon="action_settings2" icon-color="primary"></se-list-item>
                          <se-list-item item="my item 3 no icon" description="I'm here too"></se-list-item>
                          <se-list-group icon="action_settings2" item="Second treeview child">
                            <se-list-item icon="action_settings2" item="I'm the first treeview grandchild!"></se-list-item>
                          </se-list-group>
                        </se-list-group>
                        <se-list-group item="simple collapse">
                          <se-list-item item="No icon, not selected"></se-list-item>
                        </se-list-group>
                      </se-list>
                    </se-block>
                    <se-divider option="vertical"></se-divider>
                    <se-block width="250px" option="fill">
                        <se-list option="nav">
                          <se-list-item item="my classic list item" icon="user_standard" icon-color="primary" description="I have a description"></se-list-item>
                          <se-list-item item="my item 2 no description with a long text" icon="user_standard" icon-color="primary"></se-list-item>
                          <se-list-item item="Basic Item"></se-list-item>
                          <se-list-item item="Check me!" icon="action_settings2" selected="false" role="listitem" class="hydrated"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
                          <se-list-item item="Click the button!" icon="action_settings2" role="listitem" class="hydrated"> <se-button class="hydrated">Select</se-button> </se-list-item>
                          <se-list-group item="I have a selected child">
                            <se-list-item item="my item 1" icon="action_settings2" icon-color="primary" description="I have a description"></se-list-item>
                            <se-list-item item="my item 2 no description" selected="true" icon="action_settings2" icon-color="primary"></se-list-item>
                            <se-list-item item="my item 3 no icon" description="I'm here too"></se-list-item>
                            <se-list-group icon="action_settings2" item="Second treeview child">
                              <se-list-item icon="action_settings2" item="I'm the first treeview grandchild!"></se-list-item>
                            </se-list-group>
                          </se-list-group>
                          <se-list-group item="simple collapse">
                            <se-list-item item="No icon, not selected"></se-list-item>
                          </se-list-group>
                        </se-list>
                      </se-block>
                    <se-divider option="vertical"></se-divider>
                    <se-block width="250px" option="fill">
                      <se-list option="treeview">
                        <se-list-item item="First treeview item"></se-list-item>
                        <se-list-group item="Treeview Example">
                          <se-list-item item="First treeview child" description="I have a description"></se-list-item>
                          <se-list-group item="Second treeview child">
                            <se-list-item item="I'm the first treeview grandchild!"></se-list-item>
                            <se-list-item item="I'm the second treeview grandchild!"></se-list-item>
                            <se-list-item item="Check me!" selected="false" role="listitem" class="hydrated"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
                            <se-list-item item="Click the button!" role="listitem" class="hydrated"> <se-button class="hydrated">Select</se-button> </se-list-item>
                            <se-list-group item="Second treeview child">
                              <se-list-item item="I'm the first treeview grandchild!"></se-list-item>
                              <se-list-item item="I'm the second treeview grandchild!" selected="true"></se-list-item>
                            </se-list-group>
                          </se-list-group>
                          <se-list-item item="Third treeview child" description="I have a description"></se-list-item>
                          <se-list-item item="Third treeview child"></se-list-item>
                        </se-list-group>
                        <se-list-item item="Forth treeview child"></se-list-item>
                        <se-list-item item="Forth treeview child"></se-list-item>
                      </se-list>
                    </se-block>
                    <se-divider option="vertical"></se-divider>
                    <se-block width="250px" option="fill">
                      <se-list option="dropdown">
                        <se-list-item item="dropdown item"></se-list-item>
                        <se-list-item item="Item 2" description="I have a description"></se-list-item>
                        <se-list-item item="Item 3"></se-list-item>
                        <se-list-item item="Check me!" icon="action_settings2" selected="false" role="listitem" class="hydrated"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
                        <se-list-item item="Click the button!" icon="action_settings2" role="listitem" class="hydrated"> <se-button size="large" class="hydrated">Select</se-button> </se-list-item>
                        <se-divider></se-divider>
                        <se-list-item item="Item separated with a divider" description="I have a description"></se-list-item>
                      </se-list>
                    </se-block>
                    <se-divider option="vertical"></se-divider>
                    <se-block width="250px" option="fill">
                      <se-list option="headline" can-collapse="true">
                        <se-list-group item="Headline Example">
                          <se-list-item item="Standard color icon" icon="action_doc_new" icon-color="standard"></se-list-item>
                          <se-list-item item="Primary color icon" icon="action_doc_add" icon-color="primary" description="I have a description"></se-list-item>
                          <se-list-item item="Disable color icon" icon="action_editor" icon-color="disable"></se-list-item>
                          <se-list-group item="Headline Example">
                            <se-list-item item="Standard color icon" icon="action_doc_new" icon-color="standard" description="I have a description"></se-list-item>
                            <se-list-item item="Check me!" icon="action_settings2" selected="false" role="listitem" class="hydrated" description="I have a description"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
                        <se-list-item item="Click the button!" icon="action_settings2" role="listitem" class="hydrated"> <se-button class="hydrated">Select</se-button> </se-list-item>
                          </se-list-group>
                        </se-list-group>
                        <se-list-group item="Warning and error icon colors">
                          <se-list-item item="Warning color icon" icon="general_danger_wired" icon-color="warning"></se-list-item>
                          <se-list-item item="Error color icon" icon="notification_error_full_stroke" icon-color="error"></se-list-item>
                        </se-list-group>
                      </se-list>
                    </se-block>
                  </se-container>
                </se-block-content>
              </se-block>
              <se-block id="block8">
                <se-block-header>
                  Group of Radio Buttons
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(8)">presentation_mode</se-icon>
                  </div>
                </se-block-header>
                <se-block-content option="fill">
                  <se-radio-group id="radio-button-dot-group">
                    <se-radio value="one radio" label="First Radio Button"></se-radio>
                    <se-radio value="two radio" label="Second Radio Button"></se-radio>
                    <se-radio value="three radio" label="Third Radio Button"></se-radio>
                  </se-radio-group>
                  <div>Selected radio button value: <span id="se-radio-value"></span></div>
                </se-block-content>
              </se-block>
              <se-block option="fill" id="block9">
                <se-block-header option="fill">
                  Tooltips
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(9)">exit_presentation</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>
                  <div style="padding-left:50px;">
                    <h4>Tooltip OnClick</h4>
                    <se-tooltip action="click">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Title & Message</se-button>
                      <se-tooltip-header>Tooltip Title</se-tooltip-header>
                      <se-tooltip-content>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </se-tooltip-content>
                    </se-tooltip>
                    <se-tooltip action="click">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Icon & Message</se-button>
                      <se-tooltip-header icon="information_circle">Tooltip With Icon</se-tooltip-header>
                      <se-tooltip-content>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</se-tooltip-content>
                    </se-tooltip>
                  </div>
                  <div style="padding-left:50px;">
                    <se-tooltip action="click">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Message Without Title</se-button>
                      <se-tooltip-content icon="information_circle">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                      </se-tooltip-content>
                    </se-tooltip>
                    <se-tooltip action="click">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Complex</se-button>
                      <se-tooltip-header>Tooltip Complex</se-tooltip-header>
                      <se-tooltip-content>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </se-tooltip-content>
                      <se-tooltip-footer>
                        <se-button option="raised" color="secondary">Retry</se-button>
                      </se-tooltip-footer>
                    </se-tooltip>
                  </div>
                  <div style="padding-top:40px;padding-left:50px;">
                    <h4>Tooltip OnHover</h4>
                    <se-tooltip position="right">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Right</se-button>
                      Tooltip Right
                    </se-tooltip>
                    <se-tooltip position="bottom">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Bottom</se-button>
                      Tooltip Bottom
                    </se-tooltip>
                    <se-tooltip position="left">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Left</se-button>
                      Tooltip Left
                    </se-tooltip>
                    <se-tooltip position="top">
                      <se-button option="raised" color="primary" slot="tooltip">Tooltip Top</se-button>
                      Tooltip Top
                    </se-tooltip>
                  </div>
                </se-block-content>
              </se-block>
              <se-block outline="true" color="alternative" divider="false" enlarged="horizontal" id="block10">
                <se-block-header option="fill">
                  <se-tabbar color="alternative" option="content" display="centered">
                    <nav>
                      <a>Introduction</a>
                      <a class="active">Installation</a>
                      <a disabled>Maintenance</a>
                      <a>Glossary</a>
                    </nav>
                  </se-tabbar>
                </se-block-header>
                <se-block-content style="border-right: 1px solid #EDEDED; border-bottom: 1px solid #EDEDED; border-left: 1px solid #EDEDED;">
                  <br>
                  <se-tabbar color="alternative">
                    <nav>
                      <a class="active">Home</a><a>Another</a><a disabled>Another</a><a>Another</a><a>Another</a>
                    </nav>
                  </se-tabbar>
                  <br>
                  <se-tabbar color="primary"> </se-tabbar>
                  <br>
                  <se-container display="block">
                    <se-tabbar option="content" color="primary" display="centered">
                      <nav>
                        <a>Introduction</a>
                        <a class="active">Installation</a>
                        <a disabled>Maintenance</a>
                        <a>Glossary</a>
                      </nav>
                      <nav slot="end">
                        <se-link url="www.google.com" option="external">Google</se-link>
                      </nav>
                    </se-tabbar>
                    <se-block color="standard" margin="none" divider="false">
                      <se-block-header style="border: 1px solid #ededed;border-top:0;border-bottom:0;">Testing</se-block-header>
                      <se-block-content style="border: 1px solid #ededed;border-top:0;">Testing more content</se-block-content>
                    </se-block>
                  </se-container>
                  <br>
                  <se-container color="standard" padding="large" display="block" style="border: 1px solid #ededed;">
                    <se-block outline="true" margin="none" divider="false">
                      <se-block-header option="fill">
                        <se-tabbar option="content" color="alternative" display="centered">
                            <nav>
                              <a>Introduction</a>
                              <a class="active">Installation</a>
                              <a disabled>Maintenance</a>
                              <a>Glossary</a>
                            </nav>
                            <nav slot="end">
                              <se-link url="www.google.com" option="external">Google</se-link>
                            </nav>
                          </se-tabbar>
                      </se-block-header>
                      <se-block-content>Testing<br/><br/>Testing more content</se-block-content>
                    </se-block>
                  </se-container>
                </se-block-content>
              </se-block>
              <se-block enlarged="horizontal" id="block11">
                <se-block-header>Stepper
                  <div slot="end">
                    <se-icon option="button" color="alternative" onclick="toggle(10)">exit_presentation</se-icon>
                  </div>
                </se-block-header>
                <se-block-content id="stepper-content">
                  <div><span id="stepper-color">Primary</span> Color Stepper (<span id="stepper-mode">linear</span> mode):</div>
                  <se-stepper id="se-stepper">
                    <se-stepper-item label="Step 1" id="primone">
                      <div style="border: 1px solid black; padding: 10px;">
                          <se-button onclick="nextStep()">Validate and Next Step</se-button>
                        </div>
                    </se-stepper-item>
                    <se-stepper-item label="Step 2" id="primtwo">
                      <div style="border: 1px solid black; padding: 10px;">
                          <se-button onclick="nextStep()">Validate and Next Step</se-button>
                        </div>
                    </se-stepper-item>
                    <se-stepper-item label="Step 3" id="primthree">
                      <div style="border: 1px solid black; padding: 10px;">
                          <se-button onclick="nextStep()">Validate and Next Step</se-button>
                        </div>
                    </se-stepper-item>
                    <se-stepper-item label="Step 4" id="primfour">
                      <div style="border: 1px solid black; padding: 10px;">
                          <se-button onclick="nextStep()">Validate and Next Step</se-button>
                        </div>
                    </se-stepper-item>
                    <se-stepper-item label="Step 5">
                      <div style="border: 1px solid black; padding: 10px;">Sixth Step</div>
                    </se-stepper-item>
                  </se-stepper>
                  <se-button onclick="toggleStepperMode()">Toggle Stepper Mode</se-button>
                  <se-button onclick="toggleStepperColor()">Toggle Stepper Color</se-button>
                  <se-button onclick="stepperReset()">Reset Stepper</se-button>
                </se-block-content>
              </se-block>
            </se-container>
          </se-container>
        </se-container>

        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;
