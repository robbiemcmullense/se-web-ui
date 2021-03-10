import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmegroup from '../table-group/readme.md';
import readmegroupheader from '../table-group-header/readme.md';
import readmeitem from '../table-item/readme.md';
import readmeitemheader from '../table-item-header/readme.md';
import { select, boolean } from '@storybook/addon-knobs';

const sortOption = ['asc', 'desc', 'none'];

storiesOf('Table', module).add(
  'Table',
  () => {
    const sort = select('Sort Order Example', sortOption, 'asc');

    const selected = boolean('Selected Row Example', true);
    const compact = boolean('Compact', false);
    const showWithDetail = boolean('Show with expended detail section', false);
    const hideCheckboxColumn = boolean('hide checkbox column', false);

    return `
        <se-table compact=${compact}>
            <se-table-group-header>
                <se-table-item-header width="32px"></se-table-item-header>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item-header width="32px"></se-table-item-header>'
                }
                <se-table-item-header sort="${sort}">Title</se-table-item-header>
                <se-table-item-header flex="50%" sort="none">Secondary Info </br> <small> what about a date? </small></se-table-item-header>
                <se-table-item-header clickable="true"><se-icon color="primary">airconditioner_hot_heating</se-icon> - with a lot of extra text to make it as long as possible</se-table-item-header>
            </se-table-group-header>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox selected="false"></se-checkbox></se-table-item>'
                }
                <se-table-item title="best practice is to provide a title in case all content is not visible">Testing 1 with a very long title that continues on</se-table-item>
                <se-table-item flex="50%">1st test</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                ${
                  showWithDetail &&
                  `<div slot="detail">
                    <h4 style="padding:12px 24px">You may put any type of content here</h4>
                    <p style="padding:0 24px 12px;">You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                </div>`
                }
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item title="best practice is to provide a title in case all content is not visible">
                  Group @
                </se-table-item>
                <se-table-item flex="50%">
                  <div style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;word-break: break-word;white-space: pre-wrap;text-overflow: ellipsis;"><b>This has been created with a custom class. It's up to the developer to define the limit of an item, the component will automatically adapt.</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                <div slot="detail" style="display:none">
                    <h4 style="padding:12px 24px">You may put any type of content here</h4>
                    <p style="padding:0 24px 12px;">You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                </div>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item flex="50%">Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
                ${
                  showWithDetail &&
                  `<div slot="detail">
                  <div style="padding: '12px 24px';">
                    <div style="display:flex; padding:4px 16px">
                      <div style="flex:1"><b> Another property</b></div>
                      <div style="flex:4">Some nice value</div>
                    </div>
                    <div style="display:flex; padding:4px 16px">
                      <div style="flex:1"><b> some extra value</b></div>
                      <div style="flex:4">Something that is worth talking about in here!</div>
                    </div>
                    <div style="display:flex; padding:4px 16px">
                      <div style="flex:1"><b>status</b></div>
                      <div style="flex:4">APPROVED</div>
                    </div>
                    <div style="display:flex; padding:4px 16px">
                      <div style="flex:1"><b> comment</b></div>
                      <div style="flex:4">none.</div>
                    </div>
                  </div>
                </div>`
                }
            </se-table-group>
            <se-table-group selectable="true" selected=${selected}>
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  `<se-table-item width="32px"><se-checkbox selected=${selected}></se-checkbox></se-table-item>`
                }
                <se-table-item>Group 2</se-table-item>
                <se-table-item flex="50%">Another test item with a lot more content than the other items so that we can see what happens when there is multiple lines of information that needs to be shown</se-table-item>
                <se-table-item>Last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>Testing 1</se-table-item>
                <se-table-item flex="50%">2nd test</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>Group 2</se-table-item>
                <se-table-item flex="50%">Another test item with a lot more content than the other items</se-table-item>
                <se-table-item>Last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item flex="50%">Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>
                  <se-form-field padding='none' block option="stacked">
                    <input type="date" />
                  </se-form-field>
                </se-table-item>
                <se-table-item flex="50%">Inputs should remain at 40px height</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>Group 2</se-table-item>
                <se-table-item flex="50%">Another test item with a lot more content than the other items</se-table-item>
                <se-table-item>Last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="32px"><se-icon option="button" disabled="true" rotate="180">arrow2_up</se-icon></se-table-item>
                ${
                  !hideCheckboxColumn &&
                  '<se-table-item width="32px"><se-checkbox></se-checkbox></se-table-item'
                }
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item flex="50%">Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
            </se-table-group>
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
);
