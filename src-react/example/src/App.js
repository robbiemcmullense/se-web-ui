import React, { Component } from 'react'

import { App as SeApp, About, Authentication, Block, BlockContent, BlockFooter, BlockHeader, Breadcrumb, BreadcrumbItem, Button, Checkbox, Chip, Container, Dialog, DialogContent, DialogFooter, DialogHeader, Divider, Dropdown, Fab, FormField, Header, Icon, IconEcostruxure, IconLifeison, IconSchneider, Link, List, ListGroup, ListItem, Loading, Radio, RadioGroup, Sidemenu, SidemenuItem, Slider, Snackbar, Tabbar, Tooltip, TooltipContent, TooltipFooter, TooltipHeader, VisualLinear, VisualRadial } from 'web-ui-react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      fizz: "buzz"
    };

    //this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    console.log(e);
  }

  render () {
    return (
      <SeApp>
        <Header appTitle="Test Advisor">
          <div slot="end">
            <Dropdown alignment="right">
              <Button slot="trigger" option="inherit" icon="user_standard" iconColor="primary">John Doe</Button>
              <List option="dropdown">
                <ListItem item="About"></ListItem>
                <ListItem item="Language"></ListItem>
                <Divider></Divider>
                <ListItem item="Logout"></ListItem>
              </List>
            </Dropdown>
          </div>
          <Sidemenu id="app-sidemenu">
            <SidemenuItem item="Project">
              <Block option="fill">
                <BlockHeader>some widget design</BlockHeader>
                <BlockContent option="fill">
                  <Container option="card" display="block">
                    <Block>
                      <BlockHeader>
                        H3 Buttons and Form
                        <div slot="end">
                          <Icon option="button" color="alternative">other_vertical</Icon>
                        </div>
                      </BlockHeader>
                      <BlockContent>test</BlockContent>
                    </Block>
                    <Block>
                      <BlockHeader>
                        H3 Buttons and Form
                        <div slot="end">
                          <Icon option="button" color="alternative">other_vertical</Icon>
                        </div>
                      </BlockHeader>
                      <BlockContent>test</BlockContent>
                    </Block>
                  </Container>
                </BlockContent>
                <BlockFooter>
                  <Button option="raised" color="primary">RaisedGreen</Button>
                </BlockFooter>
              </Block>
            </SidemenuItem>
            <SidemenuItem item="About">
              <About appTitle="Test Advisor" version="1.2.3" imageUrl="url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)"></About>
            </SidemenuItem>
            <SidemenuItem item="Save"></SidemenuItem>
          </Sidemenu>
          </Header>
          <Tabbar color="primary">
          <nav slot="start">
            Site :
            <Dropdown alignment="left">
              <Button slot="trigger" option="inherit">My Site 1</Button>
              <List option="dropdown">
                <ListItem item="My Site 1"></ListItem>
                <ListItem item="My Site 2"></ListItem>
                <ListItem item="My Site 3"></ListItem>
              </List>
            </Dropdown>
          </nav>
          <nav><a className="active">Home</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a></nav>
          <nav slot="end">
            <Button color="alternative" option="outline"> alternative outline</Button>
          </nav>
          </Tabbar>
          <Container>
          <Block width="250px">
            <BlockHeader>List classic with expender</BlockHeader>
            <BlockContent option="fill">
              <List>
                <ListItem item="my item 1" icon="user_standard" iconColor="primary" description="I have a description">
                </ListItem>
                <ListItem item="my item 2 no description with a long text" icon="user_standard" iconColor="primary">
                </ListItem>
                <ListItem item="Basic Item"> </ListItem>
                <ListGroup item="I have a selected child" icon="action_settings2" iconColor="primary" description="I'm selected when collapsed" one>
                  <ListItem item="my item 1" icon="action_settings2" iconColor="primary" description="I have a description">
                  </ListItem>
                  <ListItem item="my item 2 no description" selected={true} icon="action_settings2" iconColor="primary">
                  </ListItem>
                  <ListItem item="my item 3 no icon" description="I'm here too"> </ListItem>
                </ListGroup>
                <ListGroup item="simple collapse" onDidGroupClick={this.openModal}>
                  <ListItem item="No icon, not selected"> </ListItem>
                </ListGroup>
              </List>
            </BlockContent>
          </Block>
          <Divider option="vertical"></Divider>
          <Block>
            <BlockHeader>
              H3 Buttons and Form
              <div slot="end">
                <Icon option="button" color="alternative">favourites_addto</Icon>
                <Dropdown alignment="right">
                  <Icon slot="trigger" option="button" color="alternative">other_vertical</Icon>
                  <List option="dropdown">
                    <ListItem item="I'm selected"></ListItem>
                    <ListItem item="my item 2 no description  with a long text"></ListItem>
                    <ListItem item="my item 3 no icon"></ListItem>
                  </List>
                </Dropdown>
              </div>
            </BlockHeader>
            <BlockContent>
              <h1>My h1 string with a divider</h1>
              <Divider></Divider>
              <h2>My h2 string with a divider </h2>
              <Divider></Divider>
              <h3>My h3 string with a divider </h3>
              <Divider></Divider>
              <h4>My h4 string with a divider </h4>
              <Divider></Divider>
              <h5>My h5 string with a divider </h5>
              <Divider></Divider>
              <h6>My h6 string with a divider </h6>
              <Divider></Divider>
              <Button option="flat">standard</Button>
              <Button option="flat" color="alternative">alternative</Button>
              <Button option="flat" color="primary">primary</Button>
              <Button option="flat" color="secondary">secondary</Button>
              <Button icon="action_resize">Resize</Button>
              <Button option="outline">Outline</Button>
              <Button option="outline" color="alternative">Outline alternative</Button>
              <Button option="outline" color="primary">Outline primary</Button>
              <Button option="outline" color="secondary">Outline secondary</Button>
              <Button icon="action_resize"></Button>
              <Chip value="Chip 01"></Chip>
              <Chip value="Chip 02" canClose={false} color="primary"></Chip>
              <Link url="http://google.com">Link to Google</Link>
              <Link url="http://google.com" option="external">External Link to Google</Link>
              <Button option="flat">Flat</Button>
              <Button option="flat" color="primary">FlatGreen</Button>
              <Button option="raised">Raised</Button>
              <Button option="raised" color="primary">RaisedGreen</Button>
              <Button option="text">Text</Button>
              <Button option="text" color="primary">Primary</Button>
              <Divider></Divider>
              <RadioGroup value="left">
                <Button value="left" icon="arrow2_left"></Button>
                <Button value="right" icon="arrow2_right"></Button>
              </RadioGroup>
              <RadioGroup value="second">
                <Button value="first" >Check1</Button>
                <Button value="second" >Check2</Button>
                <Button value="third">Check3</Button>
              </RadioGroup>
              <Divider></Divider>
              <FormField label="Input" required={true}>
                <input type="text" />
              </FormField>
              <FormField label="Select" required={true} type="select">
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </FormField>
              <FormField label="Select the an album" required={true} option="stacked">
                <RadioGroup value="second">
                  <Radio value="first" label="Album 1"></Radio>
                  <Radio value="second" label="Album 2"></Radio>
                  <Radio value="third" label="Album 3"></Radio>
                </RadioGroup>
              </FormField>

              <FormField label="This is my custom Checkbox.  It is unique." type="checkbox" required={true}>
                <Checkbox value="checkbox-value"></Checkbox>
              </FormField>
              <FormField  label="Input" required={true} option="stacked">
                <input type="text" />
              </FormField>
              <FormField label="Select" required={true} type="select" option="stacked">
                <select>
                  <option>Stacked Option 1</option>
                  <option>Stacked Option 2</option>
                  <option>Stacked Option 3</option>
                </select>
              </FormField>
              <Divider></Divider>
              <Button option="raised" >Dialog simple</Button>
              <Button option="raised" >Dialog title icon</Button>
              <Button option="raised" >Dialog complex</Button>
          
            </BlockContent>
            <BlockFooter>
                <Button option="raised">Open Snackbar</Button>
            </BlockFooter>
          </Block>
          </Container>
          <Dialog id="dialog-simple-notitle" color="alternative" size="small">
          <DialogContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DialogContent>
          <DialogFooter>
            <Button >OK</Button>
          </DialogFooter>
          </Dialog>
          <Dialog id="dialog-simple-title" color="alternative">
          <DialogHeader>My awesome title</DialogHeader>
          <DialogContent icon="help_wired_flat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DialogContent>
          <DialogFooter>
            <Button >OK</Button>
          </DialogFooter>
          </Dialog>
          <Dialog id="dialog-complex">
          <DialogHeader>My awesome title</DialogHeader>
          <DialogContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DialogContent>
          <DialogFooter>
            <Button >Cancel</Button>
            <Button >OK</Button>
          </DialogFooter>
          </Dialog>
          <Snackbar id="snackbar" type="warning" icon="information_stroke" message="my message" canClose={true} closeText="Dismiss"></Snackbar>
          <Fab icon="action_share" position="top">
            <Button option='minifab' caption="New Work Oder" icon="notification_critical_stroke"></Button>
            <Button option='minifab' caption="New Task" icon="notebook_paper"></Button>
            <Button option='minifab' caption="New User" icon="task"></Button>
            <Button option='minifab' caption="New Work Item" icon="user_add"></Button>
            <Button option='minifab' caption="New Task List" icon="notebook_paper"></Button>
          </Fab>
      </SeApp>
    )
  }
}
