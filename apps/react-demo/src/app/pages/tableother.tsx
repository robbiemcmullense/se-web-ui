import React, { Component } from 'react';
import {
  SeContainer,
  SeBlock,
  SeTable,
  SeIcon,
  SeLink,
  SeTableGroup,
  SeTableGroupHeader,
  SeTableItem,
  SeTableItemHeader,
  SeBlockHeader,
  SeBlockContent,
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


class TableOther extends Component<TableProps, TableStates> {
  constructor(props) {
    super(props);
    // this.state = { rows: rows };
  }

  // selectRow = (index) => {
  //   rows[index].selected = !rows[index].selected;
  //   this.setState({
  //     rows : rows
  //   })
  // }

  // toggleRow = (index) => {
  //   rows[index].expended = !rows[index].expended;
  //   this.setState({
  //     rows : rows
  //   })
  // }

  render() {
    return (
      <SeContainer direction="column">
        <SeBlock divider={false}>
          <SeBlockHeader>Table Example</SeBlockHeader>
          <SeBlockContent option="fill" style={{ maxHeight: '400px' }}>
          <SeTable>
                <SeTableGroupHeader>
                  <SeTableItemHeader width='102px'>Version</SeTableItemHeader>
                  <SeTableItemHeader>Created</SeTableItemHeader>
                  <SeTableItemHeader>Modified</SeTableItemHeader>
                  <SeTableItemHeader width='100px' />
                </SeTableGroupHeader>
                {[1, 2, 3, 4].map(nextVersion => (
                  <SeTableGroup key={nextVersion}>
                    <SeTableItem width='102px'>{'nextVersion.versionNumber'}</SeTableItem>
                    <SeTableItem>{`${'nextVersion.versionCreationTime'.replace(/T.*/, '')} ${
                      'nextVersion.versionCreatorFirstName'
                    } ${'nextVersion.versionCreatorLastName'}`}</SeTableItem>
                    <SeTableItem>{`${'nextVersion.versionCreationTime'.replace(/T.*/, '')} ${
                      'nextVersion.versionCreatorFirstName'
                    } ${'nextVersion.versionCreatorLastName'}`}</SeTableItem>
                    <SeTableItem width='110px'>
                      <SeLink url={'nextVersion.versionStorageURL'}>
                        <SeIcon option='button'>action_delete_stroke</SeIcon>
                      </SeLink>
                      <SeLink url={'nextVersion.versionStorageURL'}>
                        <SeIcon option='button'>action_download_stroke</SeIcon>
                      </SeLink>
                    </SeTableItem>
                  </SeTableGroup>
                ))}
              </SeTable>
          </SeBlockContent>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default TableOther;
