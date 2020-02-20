import React, { Component } from "react";
import { SeContainer, SeBlock, SeTable, SeIcon, SeCheckbox, SeTableGroup, SeTableGroupHeader, SeTableItem, SeTableItemHeader, SeBlockHeader, SeButton, SeBlockContent, SeList, SeListItem, SeListGroup, SeDivider, SeStepper, SeStepperItem } from '@se/web-ui-react';

import Widget from '../components/widget';

import "./dashboard.scss";

interface DashboardProps{
  location: any;
}


class Dashboard extends Component<DashboardProps> {

  render() {
    const rows = [
      { selectable: true,
        cells: [
          { content: <SeIcon>arrow2_up</SeIcon>,
            width: '72px'},
          { content: <SeCheckbox></SeCheckbox>,
            width: '72px'},
          { content: 'Test 1'},
          { content: 'Test 1 - with "detail" section exposed',
            flex: '50%'},
          { content: 'Last row item'}],
          details: <div slot="detail"><div style={{padding:"12px 24px"}}><h4>Look at this cool detail section</h4><p>You can put whatever you want here as long as the outer wrapper has a slot="detail".</p></div></div>
        },
      { selectable: true,
        cells: [
          { content: <SeIcon>arrow2_down</SeIcon>,
            width: '72px'},
          { content: <SeCheckbox></SeCheckbox>,
            width: '72px' },
          { content: 'Test 2'},
          { content: 'Test 2 - with "detail" section hidden',
            flex: '50%'},
          { content: 'Last row item'}],
          details: <div slot="detail" style={{display:"none"}}><div style={{padding:"12px 24px"}}><h4>You can't see this cool detail section</h4><p>You can put whatever you want here as long as the outer wrapper has a slot="detail".</p></div></div>
        },
        { selectable: true,
          cells: [
            { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
              width: '72px'},
            { content: <SeCheckbox></SeCheckbox>,
              width: '72px' },
            { content: 'Third test row with more in the title'},
            { content: 'Test number 3 - no detail section',
              flex: '50%'},
            { content: 'Last row item goes here'}]},
          { selectable: true,
            cells: [
              { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
                width: '72px'},
              { content: <SeCheckbox></SeCheckbox>,
                width: '72px' },
              { content: '4th test'},
              { content: 'Test number four - no detail section',
                flex: '50%'},
              { content: 'Last'}]},
          { selectable: true,
            selected: true,
            cells: [
              { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
                width: '72px'},
              { content: <SeCheckbox selected={true}></SeCheckbox>,
                width: '72px' },
              { content: 'Fith test row'},
              { content: 'Test number five - with a selected prop and checkbox',
                flex: '50%'},
              { content: 'Last row item'}]},
          { selectable: true,
            cells: [
              { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
                width: '72px'},
              { content: <SeCheckbox></SeCheckbox>,
                width: '72px' },
              { content: '6th test row'},
              { content: 'Test number 6 - no detail section',
                flex: '50%'},
              { content: 'Last item'}]},
          { selectable: true,
            cells: [
              { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
                width: '72px'},
              { content: <SeCheckbox></SeCheckbox>,
                width: '72px' },
              { content: '7th test row'},
              { content: 'Test number 7 - no detail section',
                flex: '50%'},
              { content: 'Last item'}]},
          { selectable: true,
            cells: [
              { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
                width: '72px'},
              { content: <SeCheckbox></SeCheckbox>,
                width: '72px' },
              { content: 'Eigth test row'},
              { content: 'Test number eight - no detail section',
                flex: '50%'},
              { content: 'Last item'}]},
          { selectable: true,
            cells: [
              { content: <SeIcon disabled={true}>arrow2_down</SeIcon>,
                width: '72px'},
              { content: <SeCheckbox></SeCheckbox>,
                width: '72px' },
              { content: 'Last test row'},
              { content: 'Last test row - no detail section',
                flex: '50%'},
              { content: 'Very last item'}]}
    ];
    return (
      <SeContainer direction="column">
        <SeBlock divider={false}>
          <SeBlockHeader>Table Example</SeBlockHeader>
          <SeBlockContent option="fill" style={{maxHeight:"400px"}}>
            <SeTable>
              <SeTableGroupHeader>
                  <SeTableItemHeader width="72px"></SeTableItemHeader>
                  <SeTableItemHeader width="64px"></SeTableItemHeader>
                  <SeTableItemHeader sort="asc">Title</SeTableItemHeader>
                  <SeTableItemHeader clickable={true} flex="50%">Secondary Info</SeTableItemHeader>
                  <SeTableItemHeader><SeIcon color="primary">airconditioner_hot_heating</SeIcon> - with a lot of extra text to make it as long as possible</SeTableItemHeader>
              </SeTableGroupHeader>
                {rows.map((row, index) => 
                    <SeTableGroup selectable={row.selectable} selected={row.selected}>
                      {row.cells.map((cell, index) => 
                        <SeTableItem width={cell.width} flex={cell.flex}>{cell.content}</SeTableItem>
                      )}
                      {row.details}
                    </SeTableGroup>
                  )}
            </SeTable>
          </SeBlockContent>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default Dashboard;
