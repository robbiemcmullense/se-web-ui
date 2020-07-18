import React, { Component } from 'react';
import {
  SeContainer,
  SeBlock,
  SeTable,
  SeIcon,
  SeCheckbox,
  SeTableGroup,
  SeTableGroupHeader,
  SeTableItem,
  SeTableItemHeader,
  SeBlockHeader,
  SeBlockContent,
  SeFormField,
  SeButton,
} from '@se/web-ui-react';


interface Row {
  selected?: boolean;
  selectable?: boolean;
  expended?: boolean;
  data: {
    title: string;
    info: string;
    extra: string;
  }
}

interface TableProps {
  location: any;
}
interface TableStates {
  rows: Row[];
}

const rows = [
  {
    selectable: true,
    expended: true,
    data: {
      title: 'Test 1',
      info: 'Test 1 - with "detail" section exposed',
      extra: 'Last row item'
    }
  },
  {
    selectable: true,
    data: {
       title: 'Test 2' ,
       info: 'Test 2 - with "detail" section hidden',
       extra: 'Last row item',
    }
  },
  {
    selectable: true,
    data: {
      title: 'Third test row with more in the title' ,
      info: 'Test number 3 - no detail section',
      extra: 'Last row item goes here',
    }
  },
  {
    selectable: true,
    data: {
      title: '4th test' ,
      info: 'Test number four - no detail section',
      extra: 'Last',
    }
  },
  {
    selectable: true,
    selected: true,
    data: {
      title: 'Fith test row' ,
      info: 'Test number five - with a selected prop and checkbox',
      extra: 'Last row item',
    }
  },
  {
    selectable: true,
    data: {
      title: '6th test row' ,
      info: 'Test number 6 - no detail section',
      extra: 'Last item',
    }
  },
  {
    selectable: true,
    data: {
      title: '7th test row' ,
      info: 'Test number 7 - no detail section',
      extra: 'Last item',
    }
  }
];


class Table extends Component<TableProps, TableStates> {
  constructor(props) {
    super(props);
    this.state = { rows: rows };
  }

  selectRow = (index) => {
    rows[index].selected = !rows[index].selected;
    this.setState({
      rows : rows
    })
  }

  toggleRow = (index) => {
    rows[index].expended = !rows[index].expended;
    this.setState({
      rows : rows
    })
  }

  render() {
    return (
      <SeContainer direction="column">
        <SeBlock divider={false}>
          <SeBlockHeader>Table Example</SeBlockHeader>
            <SeTable>
              <SeTableGroupHeader>
                <SeTableItemHeader width="72px"></SeTableItemHeader>
                <SeTableItemHeader width="64px"></SeTableItemHeader>
                <SeTableItemHeader minWidth="100px" flex="1" clickable sort="asc">
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <span>
                      Cool!!!Cool!!!Cool!! !Cool!!! Cool!!! Cool!!! Cool!!! Cool!!!C ool!!!
                    </span>
                    <small>
                      Title
                    </small>
                  </div>
                </SeTableItemHeader>
                <SeTableItemHeader minWidth="600px" flex="3" sort="none">
                  Secondary Info
                </SeTableItemHeader>
                <SeTableItemHeader flex="1" clickable={true}>
                  <SeIcon color="primary">airconditioner_hot_heating</SeIcon> -
                  with a lot of extra text to make it as long as possible
                </SeTableItemHeader>
              </SeTableGroupHeader>
              {this.state.rows.map((row, index) => (
                <SeTableGroup
                  key={index}
                  selectable={row.selectable}
                  >
                     <SeTableItem width="72px">
                        <SeIcon option="button" onClick={()=>{ this.toggleRow(index)}}>{ row.expended ? 'arrow2_up' : 'arrow2_down'}</SeIcon>
                    </SeTableItem>
                    <SeTableItem width="72px">
                      <SeCheckbox selected={row.selected} onDidChange={(e) => { this.selectRow(index)}}></SeCheckbox>
                    </SeTableItem>
                    <SeTableItem  minWidth="100px" flex="1" title={row.data.title}>
                      <div style={{display:'flex', flexDirection:'column'}}>
                        <span>
                          Cool!!!
                        </span>
                        <small>
                          {row.data.title}
                        </small>
                        <small>
                         And more!!
                        </small>
                      </div>
                    </SeTableItem>
                    <SeTableItem minWidth="600px" flex="3" title={row.data.info}>
                      {/* {row.data.info} */}
                      <div style={{display:'flex', flexDirection:'row'}}>
                      <SeFormField
                          option="stacked"
                          padding='none'
                          block>
                          <input type="text" />
                        </SeFormField>
                        <SeButton color="secondary" option="outline">Test</SeButton>
                        </div>
                    </SeTableItem>
                    <SeTableItem flex="1">
                      {row.data.extra}
                    </SeTableItem>
                  {row.expended &&
                    <div slot="detail" >
                      <div style={{ padding: '12px 24px' }}>
                        <h4>{row.data.title}</h4>
                        <p>
                          You can put whatever you want here as long as the outer wrapper
                          has a slot="detail".
                        </p>

                        <p><small>
                          You can put whatever you want here as long as the outer wrapper
                          has a slot="detail".</small>
                        </p>
                        <p>
                          You can put whatever you want here as long as the outer wrapper
                          has a slot="detail".
                        </p>

                      </div>
                    </div>
                  }
                </SeTableGroup>
              ))}
            </SeTable>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default Table;
