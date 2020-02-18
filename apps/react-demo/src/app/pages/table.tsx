import React, { Component } from "react";
import { SeContainer, SeBlock, SeTable, SeIcon, SeCheckbox, SeTableGroup, SeTableGroupHeader, SeTableItem, SeTableItemHeader, SeBlockHeader, SeButton, SeBlockContent, SeList, SeListItem, SeListGroup, SeDivider, SeStepper, SeStepperItem } from '@se/web-ui-react';

import Widget from '../components/widget';

import "./dashboard.scss";

interface DashboardProps{
  location: any;
}


class Dashboard extends Component<DashboardProps> {

  render() {
    console.log('ID', this.props)
    return (
      <SeContainer direction="column">
        <SeBlock divider={false}>
          <SeBlockHeader>Table Example</SeBlockHeader>
          <SeBlockContent option="fill" style={{maxHeight:"350px"}}>
            <SeTable>
              <SeTableGroupHeader>
                  <SeTableItemHeader width="72px"></SeTableItemHeader>
                  <SeTableItemHeader width="64px"></SeTableItemHeader>
                  <SeTableItemHeader sort="asc">Title</SeTableItemHeader>
                  <SeTableItemHeader clickable={true} flex="50%">Secondary Info</SeTableItemHeader>
                  <SeTableItemHeader><SeIcon color="primary">airconditioner_hot_heating</SeIcon> - with a lot of extra text to make it as long as possible</SeTableItemHeader>
              </SeTableGroupHeader>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button">arrow2_up</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem title="best practice is to provide a title in case all content is not visible">Testing 1 with a very long title that continues on</SeTableItem>
                  <SeTableItem flex="50%">2nd test</SeTableItem>
                  <SeTableItem><SeIcon color="primary">airconditioner_hot_heating</SeIcon>Last test</SeTableItem>
                  <div slot="detail" style={{padding:"12px 24px"}}>
                    <h4>You may put any type of content here</h4>
                    <p>You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                  </div>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button">arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem title="best practice is to provide a title in case all content is not visible">Testing 1.5 - with the detail section hidden</SeTableItem>
                  <SeTableItem flex="50%">2nd test</SeTableItem>
                  <SeTableItem><SeIcon color="primary">airconditioner_hot_heating</SeIcon>Last test</SeTableItem>
                  <div slot="detail" style={{display:"none", padding:"12px 24px"}}>
                    <h4>You may put any type of content here</h4>
                    <p>You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                  </div>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Last group with some more info</SeTableItem>
                  <SeTableItem flex="50%">Test item 2</SeTableItem>
                  <SeTableItem>Very last test item</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true} selected={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox selected={true}></SeCheckbox></SeTableItem>
                  <SeTableItem>Group 2</SeTableItem>
                  <SeTableItem flex="50%">Another test item with a lot more content than the other items so that we can see what happens when there is multiple lines of information that needs to be shown</SeTableItem>
                  <SeTableItem>Last test item</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Testing 1</SeTableItem>
                  <SeTableItem flex="50%">2nd test</SeTableItem>
                  <SeTableItem><SeIcon color="primary">airconditioner_hot_heating</SeIcon>Last test</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Group 2</SeTableItem>
                  <SeTableItem flex="50%">Another test item with a lot more content than the other items</SeTableItem>
                  <SeTableItem>Last test item</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Last group with some more info</SeTableItem>
                  <SeTableItem flex="50%">Test item 2</SeTableItem>
                  <SeTableItem>Very last test item</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Testing 1</SeTableItem>
                  <SeTableItem flex="50%">2nd test</SeTableItem>
                  <SeTableItem><SeIcon color="primary">airconditioner_hot_heating</SeIcon>Last test</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Group 2</SeTableItem>
                  <SeTableItem flex="50%">Another test item with a lot more content than the other items</SeTableItem>
                  <SeTableItem>Last test item</SeTableItem>
              </SeTableGroup>
              <SeTableGroup selectable={true}>
                  <SeTableItem width="72px"><SeIcon option="button" disabled={true}>arrow2_down</SeIcon></SeTableItem>
                  <SeTableItem width="64px"><SeCheckbox></SeCheckbox></SeTableItem>
                  <SeTableItem>Last group with some more info</SeTableItem>
                  <SeTableItem flex="50%">Test item 2</SeTableItem>
                  <SeTableItem>Very last test item</SeTableItem>
              </SeTableGroup>
            </SeTable>
          </SeBlockContent>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default Dashboard;
