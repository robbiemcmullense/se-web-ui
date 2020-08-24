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
  SeDropdown,
  SeListItem,
  SeList,
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
            <SeTable>
              <SeTableGroupHeader>
                <SeTableItemHeader width='102px'>Version</SeTableItemHeader>
                <SeTableItemHeader minWidth="500px">Created</SeTableItemHeader>
                <SeTableItemHeader minWidth="500px">Modified</SeTableItemHeader>
                <SeTableItemHeader width='110px' />
              </SeTableGroupHeader>

              {[1, 2, 3, 4,5,6,7,8,9,12,13,14,15,16,17,12,44,45,56,67,68,79,89,73,75,857,96,65].map((nextVersion, index) => (
                <SeTableGroup key={index}>
                  <SeTableItem width='102px'>{'nextVersion.versionNumber'}</SeTableItem>
                  <SeTableItem minWidth="500px">{`${'nextVersion.versionCreationTime'.replace(/T.*/, '')} ${
                    'nextVersion.versionCreatorFirstName'
                  } ${'nextVersion.versionCreatorLastName'}`}</SeTableItem>
                  <SeTableItem minWidth="500px">{`${'nextVersion.versionCreationTime'.replace(/T.*/, '')} ${
                    'nextVersion.versionCreatorFirstName'
                  } ${'nextVersion.versionCreatorLastName'}`}</SeTableItem>
                  <SeTableItem width='110px' option="dropdown">
                    <SeIcon option='button'>action_delete_stroke</SeIcon>
                    <SeDropdown alignment="right" verticalAlignment={index > 20 ? 'top' : 'bottom'}>
                      <SeIcon slot="trigger" option="button">action_download_stroke</SeIcon>
                      <SeList option="dropdown">
                        <SeListItem item="My Site 1"></SeListItem>
                        <SeListItem item="My Site 2"></SeListItem>
                        <SeListItem item="My Site 3"></SeListItem>
                      </SeList>
                    </SeDropdown>
                  </SeTableItem>
                </SeTableGroup>
              ))}
            </SeTable>
        </SeBlock>
      </SeContainer>
    );
  }
}

export default TableOther;
