import { storiesOf } from '@storybook/html';
import { select, boolean } from '@storybook/addon-knobs';

const sortOption = ['asc', 'desc', 'none'];

storiesOf('Table', module)
  .add('Table', () => {

    const sort = select('Sort Order Example', sortOption, 'asc');

    const selected = boolean('Selected Row Example', true);

    return `
        <se-table>
            <se-table-group-header>
                <se-table-item-header width="72px"></se-table-item-header>
                <se-table-item-header width="72px"></se-table-item-header>
                <se-table-item-header sort=${sort}>Title</se-table-item-header>
                <se-table-item-header clickable="true" flex="50%">Secondary Info</se-table-item-header>
                <se-table-item-header><se-icon color="primary">airconditioner_hot_heating</se-icon> - with a lot of extra text to make it as long as possible</se-table-item-header>
            </se-table-group-header>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button">arrow2_up</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox selected="false"></se-checkbox></se-table-item>
                <se-table-item title="best practice is to provide a title in case all content is not visible">Testing 1 with a very long title that continues on</se-table-item>
                <se-table-item flex="50%">1st test</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                <div slot="detail">
                    <h4 style="padding:12px 24px">You may put any type of content here</h4>
                    <p style="padding:0 24px 12px;">You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                </div>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item title="best practice is to provide a title in case all content is not visible">Testing 1.5</se-table-item>
                <se-table-item flex="50%">1st test - with the detail section hidden</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
                <div slot="detail" style="display:none">
                    <h4 style="padding:12px 24px">You may put any type of content here</h4>
                    <p style="padding:0 24px 12px;">You can format whatever details you want e.g. if each/some rows have a + icon to click to expand to expose more info</p>
                </div>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item flex="50%">Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true" selected=${selected}>
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox selected=${selected}></se-checkbox></se-table-item>
                <se-table-item>Group 2</se-table-item>
                <se-table-item flex="50%">Another test item with a lot more content than the other items so that we can see what happens when there is multiple lines of information that needs to be shown</se-table-item>
                <se-table-item>Last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Testing 1</se-table-item>
                <se-table-item flex="50%">2nd test</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Group 2</se-table-item>
                <se-table-item flex="50%">Another test item with a lot more content than the other items</se-table-item>
                <se-table-item>Last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item flex="50%">Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Testing 1</se-table-item>
                <se-table-item flex="50%">2nd test</se-table-item>
                <se-table-item><se-icon color="primary">airconditioner_hot_heating</se-icon>Last test</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Group 2</se-table-item>
                <se-table-item flex="50%">Another test item with a lot more content than the other items</se-table-item>
                <se-table-item>Last test item</se-table-item>
            </se-table-group>
            <se-table-group selectable="true">
                <se-table-item width="72px"><se-icon option="button" disabled="true">arrow2_down</se-icon></se-table-item>
                <se-table-item width="72px"><se-checkbox></se-checkbox></se-table-item>
                <se-table-item>Last group with some more info</se-table-item>
                <se-table-item flex="50%">Test item 2</se-table-item>
                <se-table-item>Very last test item</se-table-item>
            </se-table-group>
        </se-table>
    `;
});
