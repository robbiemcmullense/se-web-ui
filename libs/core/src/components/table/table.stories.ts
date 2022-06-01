import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmegroup from '../table-group/readme.md';
import readmegroupheader from '../table-group-header/readme.md';
import readmeitem from '../table-item/readme.md';
import readmeitemheader from '../table-item-header/readme.md';
import { select, boolean, number, text } from '@storybook/addon-knobs';

const sortOption = ['asc', 'desc', 'none'];

storiesOf('Table', module)
  .add(
    'Table',
    () => {
      const sort = select('Sort Order Example', sortOption, 'asc');
      const minItems = 20;

      // const selected = boolean('Selected Row Example', true);
      const compact = boolean('Compact', false);
      // const showWithDetail = boolean('Show with expended detail section', false);
      const hideCheckboxColumn = boolean('hide checkbox column', false);
      const fixedWidth = select('Fixed Width Example', ['default', '200px', '500px', '700px'], 'default');
      const alignItems = text('Align Items', 'center');

      return `
      <se-block height="400px" width="${fixedWidth}">
        <se-table compact=${compact} align-items=${alignItems} id="myTable">
          <se-table-group-header>
            <se-table-item-header width="32px"></se-table-item-header>
              ${
                !hideCheckboxColumn
                  ? '<se-table-item-header width="32px"></se-table-item-header>'
                  : ''
              }
            <se-table-item-header sort="${sort}" resizable=true>Title</se-table-item-header>
            <se-table-item-header flex="50%" sort="none" resizable=true>Secondary Info </br> <small> what about a date? </small></se-table-item-header>
            <se-table-item-header clickable="true" resizable=true>With a lot of extra text to make it as long as possible - <se-icon color="primary">airconditioner_hot_heating</se-icon></se-table-item-header>
            <se-table-item-header width="54px"></se-table-item-header>
          </se-table-group-header>
          <se-table-group selectable="true">
            <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
              ${
                !hideCheckboxColumn
                  ? '<se-table-item><se-checkbox></se-checkbox></se-table-item>'
                  : ''
              }
            <se-table-item>Last group with some more info</se-table-item>
            <se-table-item>Test item 2</se-table-item>
            <se-table-item>Very last test item</se-table-item>
            <se-table-item>
              <se-dropdown alignment="right" idContainer="myTable">
                <se-icon slot="trigger" option="button">
                  other_vertical
                </se-icon>
                <se-list option="dropdown">
                  <se-list-item item="My Site 1"><se-checkbox slot="start"></se-checkbox></se-list-item>
                  <se-list-item item="My Site 2"><se-checkbox slot="start"></se-checkbox></se-list-item>
                  <se-list-item item="My Site 3"><se-checkbox slot="start"></se-checkbox></se-list-item>
                </se-list>
              </se-dropdown>
            </se-table-item>
            <div slot="detail">
              <h4 style="padding:12px 24px">You may put any type of content here</h4>
              <p style="padding:0 24px 12px;">You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
            </div>
          </se-table-group>
            ${[...Array(minItems || 0)]
              .map(
                (_, key) =>
                  `
                  <se-table-group selectable="true">
                  <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                  ${
                    !hideCheckboxColumn
                      ? '<se-table-item><se-checkbox></se-checkbox></se-table-item>'
                      : ''
                  }
                  <se-table-item>Last group with some more info</se-table-item>
                  <se-table-item>Test item 2</se-table-item>
                  <se-table-item>Very last test item</se-table-item>
                  <se-table-item>
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
  )
  .add(
    'Table Sticky',
    () => {
      const sort = select('Sort Order Example', sortOption, 'asc');
      const minItems = 20;

      // const selected = boolean('Selected Row Example', true);
      const compact = boolean('Compact', false);
      const stickyFirstColumn = boolean('Sticky first column', false);

      return `
        <se-table compact=${compact} id="myTable">
            <se-table-group-header>
                <se-table-item-header slot="start" width="32px"><se-checkbox></se-checkbox></se-table-item-header>
                <se-table-item-header slot="${
                  stickyFirstColumn ? 'start' : ''
                }" min-width="200px">column 1</se-table-item-header>
                <se-table-item-header min-width="200px">column 2</se-table-item-header>
                <se-table-item-header min-width="200px">column 3</se-table-item-header>
                <se-table-item-header min-width="200px">column 4</se-table-item-header>
                <se-table-item-header min-width="200px">column 5</se-table-item-header>
                <se-table-item-header min-width="200px">column 6</se-table-item-header>
                <se-table-item-header min-width="200px">column 7</se-table-item-header>
                <se-table-item-header min-width="200px">column 8</se-table-item-header>
                <se-table-item-header min-width="200px">column 9</se-table-item-header>
                <se-table-item-header min-width="200px">column 10</se-table-item-header>
                <se-table-item-header min-width="200px">column 11</se-table-item-header>
                <se-table-item-header min-width="200px">column 12</se-table-item-header>
            </se-table-group-header>

            ${[...Array(minItems || 0)]
              .map(
                (_, key) =>
                  `
                <se-table-group>
                  <se-table-item slot="start"><se-checkbox></se-checkbox></se-table-item>
                  <se-table-item slot="${
                    stickyFirstColumn ? 'start' : ''
                  }">col 1 - info ${key}</se-table-item>
                  <se-table-item>col 2 - info ${key}</se-table-item>
                  <se-table-item>col 3 - info ${key}</se-table-item>
                  <se-table-item>col 4 - info ${key}</se-table-item>
                  <se-table-item>col 5 - info ${key}</se-table-item>
                  <se-table-item>col 6 - info ${key}</se-table-item>
                  <se-table-item>col 7 - info ${key}</se-table-item>
                  <se-table-item>col 8 - info ${key}</se-table-item>
                  <se-table-item>col 9 - info ${key}</se-table-item>
                  <se-table-item>col 10 - info ${key}</se-table-item>
                  <se-table-item>col 11 - info ${key}</se-table-item>
                  <se-table-item>col 12 - info ${key}</se-table-item>
                </se-table-group>
              `
              )
              .join('')}

        </se-table>
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
  )
  .add(
    'Table Flex',
    () => {
      const sort = select('Sort Order Example', sortOption, 'asc');
      const minItems = 20;
      const compact = boolean('Compact', false);
      const fixedWidth = select('Fixed Width Example', ['default', '200px', '500px', '700px'], 'default');

      return `
        <se-block height="400px" width="${fixedWidth}">
          <se-table compact=${compact} id="myTable">
            <se-table-group-header>
              <se-table-item-header width="32px"></se-table-item-header>
              <se-table-item-header sort="${sort}" min-width="200px" flex="2" resizable=true>Title</se-table-item-header>
              <se-table-item-header flex="1" sort="none" resizable=true>Secondary Info </br> <small> what about a date? </small></se-table-item-header>
              <se-table-item-header clickable="true" flex="2">With a lot of extra text to make it as long as possible - <se-icon color="primary">airconditioner_hot_heating</se-icon></se-table-item-header>
              <se-table-item-header width="40px"></se-table-item-header>
            </se-table-group-header>
            ${[...Array(minItems || 0)]
              .map(
                (_, key) =>
                  `
                  <se-table-group selectable="true">
                    <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                    <se-table-item>Last group with some more info</se-table-item>
                    <se-table-item>Test item 2</se-table-item>
                    <se-table-item>Very last test item</se-table-item>
                    <se-table-item><se-icon>folder</se-icon></se-table-item>
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
  )
  .add(
    'Table Without Header',
    () => {
      const sort = select('Sort Order Example', sortOption, 'asc');
      const minItems = 20;
      const compact = boolean('Compact', false);
      const fixedWidth = select('Fixed Width Example', ['default', '200px', '500px', '700px'], 'default');

      return `
        <se-block height="400px" width="${fixedWidth}">
          <se-table compact=${compact} id="myTable">
            ${[...Array(minItems || 0)]
              .map(
                (_, key) =>
                  `
                  <se-table-group selectable="true">
                    <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                    <se-table-item min-width="200px" flex="2">Last group with some more info</se-table-item>
                    <se-table-item flex="1">Test item 2</se-table-item>
                    <se-table-item flex="2">Very last test item</se-table-item>
                    <se-table-item width="40px"><se-icon>folder</se-icon></se-table-item>
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
  )
  .add(
    'Multiple Tables',
    () => {
      const sort = select('Sort Order Example', sortOption, 'asc');
      const minItems = 3;
      const compact = boolean('Compact', false);
      const hideCheckboxColumn = boolean('hide checkbox column', false);
      const fixedWidth = select('Fixed Width Example', ['default', '200px', '500px', '700px'], 'default');

      return `
      <se-block height="800px" width="${fixedWidth}">
        <se-table compact=${compact} id="myTableOne">
          <se-table-group-header>
            <se-table-item-header width="32px"></se-table-item-header>
              ${
                !hideCheckboxColumn
                  ? '<se-table-item-header width="32px"></se-table-item-header>'
                  : ''
              }
            <se-table-item-header sort="${sort}" resizable=true>Title</se-table-item-header>
            <se-table-item-header flex="50%" sort="none" resizable=true>Secondary Info </br> <small> what about a date? </small></se-table-item-header>
            <se-table-item-header clickable="true" resizable=true>With a lot of extra text to make it as long as possible - <se-icon color="primary">airconditioner_hot_heating</se-icon></se-table-item-header>
            <se-table-item-header width="54px"></se-table-item-header>
          </se-table-group-header>
          <se-table-group selectable="true">
            <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
              ${
                !hideCheckboxColumn
                  ? '<se-table-item><se-checkbox></se-checkbox></se-table-item>'
                  : ''
              }
            <se-table-item>Last group with some more info</se-table-item>
            <se-table-item>Test item 2</se-table-item>
            <se-table-item>Very last test item</se-table-item>
            <se-table-item>
              <se-dropdown alignment="right" idContainer="myTable">
                <se-icon slot="trigger" option="button">
                  other_vertical
                </se-icon>
                <se-list option="dropdown">
                  <se-list-item item="My Site 1"><se-checkbox slot="start"></se-checkbox></se-list-item>
                  <se-list-item item="My Site 2"><se-checkbox slot="start"></se-checkbox></se-list-item>
                  <se-list-item item="My Site 3"><se-checkbox slot="start"></se-checkbox></se-list-item>
                </se-list>
              </se-dropdown>
            </se-table-item>
          </se-table-group>
          ${[...Array(minItems || 0)]
            .map(
              (_, key) =>
                `
                <se-table-group selectable="true">
                <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn
                    ? '<se-table-item><se-checkbox></se-checkbox></se-table-item>'
                    : ''
                }
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item>Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
                <se-table-item>
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
            .join('')
          }
        </se-table>
        <se-table compact=${compact} id="myTableTwo">
          <se-table-group-header>
            <se-table-item-header width="32px"></se-table-item-header>
              ${
                !hideCheckboxColumn
                  ? '<se-table-item-header width="32px"></se-table-item-header>'
                  : ''
              }
            <se-table-item-header sort="${sort}" resizable=true>Title</se-table-item-header>
            <se-table-item-header flex="50%" sort="none" resizable=true>Secondary Info </br> <small> what about a date? </small></se-table-item-header>
            <se-table-item-header clickable="true" resizable=true>With a lot of extra text to make it as long as possible - <se-icon color="primary">airconditioner_hot_heating</se-icon></se-table-item-header>
            <se-table-item-header width="54px"></se-table-item-header>
          </se-table-group-header>
          <se-table-group selectable="true">
            <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
              ${
                !hideCheckboxColumn
                  ? '<se-table-item><se-checkbox></se-checkbox></se-table-item>'
                  : ''
              }
            <se-table-item>Last group with some more info</se-table-item>
            <se-table-item>Test item 2</se-table-item>
            <se-table-item>Very last test item</se-table-item>
            <se-table-item>
              <se-dropdown alignment="right" idContainer="myTable">
                <se-icon slot="trigger" option="button">
                  other_vertical
                </se-icon>
                <se-list option="dropdown">
                  <se-list-item item="My Site 1"><se-checkbox slot="start"></se-checkbox></se-list-item>
                  <se-list-item item="My Site 2"><se-checkbox slot="start"></se-checkbox></se-list-item>
                  <se-list-item item="My Site 3"><se-checkbox slot="start"></se-checkbox></se-list-item>
                </se-list>
              </se-dropdown>
            </se-table-item>
          </se-table-group>
          ${[...Array(minItems || 0)]
            .map(
              (_, key) =>
                `
                <se-table-group selectable="true">
                <se-table-item><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn
                    ? '<se-table-item><se-checkbox></se-checkbox></se-table-item>'
                    : ''
                }
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item>Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
                <se-table-item>
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
            .join('')
          }
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