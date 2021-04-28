import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmegroup from '../table-group/readme.md';
import readmegroupheader from '../table-group-header/readme.md';
import readmeitem from '../table-item/readme.md';
import readmeitemheader from '../table-item-header/readme.md';
import { select, boolean, number } from '@storybook/addon-knobs';

const sortOption = ['asc', 'desc', 'none'];

storiesOf('Table', module).add(
  'Table',
  () => {
    const sort = select('Sort Order Example', sortOption, 'asc');
    const minItems = 20;

    // const selected = boolean('Selected Row Example', true);
    const compact = boolean('Compact', false);
    // const showWithDetail = boolean('Show with expended detail section', false);
    const hideCheckboxColumn = boolean('hide checkbox column', false);

    return `
    <se-block height="400px">
        <se-table compact=${compact} id="myTable">
            <se-table-group-header>
                <se-table-item-header width="32px"></se-table-item-header>
                ${
                  !hideCheckboxColumn
                    ? '<se-table-item-header width="32px"></se-table-item-header>'
                    : ''
                }
                <se-table-item-header sort="${sort}">Title</se-table-item-header>
                <se-table-item-header flex="50%" sort="none">Secondary Info </br> <small> what about a date? </small></se-table-item-header>
                <se-table-item-header clickable="true"><se-icon color="primary">airconditioner_hot_heating</se-icon> - with a lot of extra text to make it as long as possible</se-table-item-header>
                <se-table-item-header width="54px"></se-table-item-header>
            </se-table-group-header>

            ${[...Array(minItems || 0)]
              .map(
                (_, key) =>
                  `
                  <se-table-group selectable="true">
                  <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                  ${
                    !hideCheckboxColumn
                      ? '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item>'
                      : ''
                  }
                  <se-table-item>Last group with some more info</se-table-item>
                  <se-table-item flex="50%">Test item 2</se-table-item>
                  <se-table-item>Very last test item</se-table-item>
                  <se-table-item width="54px">
                    <se-dropdown alignment="right" idContainer="myTable">
                      <se-icon slot="trigger" option="button">
                        other_vertical
                      </se-icon>
                      <se-list option="dropdown">
                        <se-list-item item="My Site 1"></se-list-item>
                        <se-list-item item="My Site 2"></se-list-item>
                        <se-list-item item="My Site 3"></se-list-item>
                      </se-list>
                    </se-dropdown>
                  </se-table-item>
              </se-table-group>
              `
              )
              .join('')}

        </se-table>
        </se-block>
    `;
  },
  {
    notes: {
      markdown: {
        'se-table': readme,
        'se-table-group-header': readmegroupheader,
        'se-table-item-header': readmeitemheader,
        'se-table-group': readmegroup,
        'se-table-item': readmeitem,
      },
    },
  }
);
