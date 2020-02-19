import { storiesOf } from '@storybook/html';
import { select, number, boolean } from '@storybook/addon-knobs';

const listOption = ['nav', 'classic', 'treeview', 'headline'];
const iconColorOptions = ["standard",  "alternative",  "primary",  "secondary",  "success",  "warning",  "error"]

storiesOf('List', module)
  .add('Demo', () => {
    const list = select('option', listOption, 'nav');
    const valueOptions = {
      range: true,
      min: 200,
      max: 700,
      step: 50,
    };
    const value = number('Block Width', 300, valueOptions);
    const canCollapse = boolean('can collapse', true)
    const iconColor = select('icon color', iconColorOptions, 'standard')

    return `
        <se-block width="${value}px" option="fill">
        <se-list option="${list}" can-collapse="${canCollapse}">
          <se-list-group item="My Example List">
            <se-list-item item="my classic list item" icon="user_standard" icon-color="primary" description="I have a description"></se-list-item>
            <se-list-item item="you can change my icon color" icon="user_standard" icon-color="${iconColor}"></se-list-item>
            <se-list-item item="Basic Item"></se-list-item>
            <se-list-item item="Check me!" icon="action_settings2" selected="false" role="listitem" class="hydrated"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
            <se-list-item item="Click the button!" icon="action_settings2" role="listitem" class="hydrated"> <se-button class="hydrated">Select</se-button> </se-list-item>
          </se-list-group>
          <se-list-group item="I have a selected child">
            <se-list-item item="my item 1" icon="action_settings2" icon-color="primary" description="I have a description"></se-list-item>
            <se-list-item item="I'm selected" selected="true" icon="action_settings2" icon-color="primary"></se-list-item>
            <se-list-item item="I have no icon" description="I'm here too"></se-list-item>
            <se-list-group icon="action_settings2" item="Second treeview child">
              <se-list-item icon="action_settings2" item="I'm the first treeview grandchild!"></se-list-item>
            </se-list-group>
          </se-list-group>
          <se-list-group item="simple collapse">
            <se-list-item item="No icon, not selected"></se-list-item>
          </se-list-group>
        </se-list>
      </se-block>
    `;
});
