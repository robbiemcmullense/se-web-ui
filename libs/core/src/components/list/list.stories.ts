import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, number, boolean } from '@storybook/addon-knobs';

const listOption = ['nav', 'classic', 'treeview', 'headline'];
const iconColorOptions = [
  'standard',
  'alternative',
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
];

storiesOf('List', module)
  .add(
    'all',
    () => {
      return `
    <se-container >
      <se-block width="250px" option="fill" divider>
        <se-block-header>
          <h5>classic</h5>
        </se-block-header>
        <se-list>
          <se-list-item item="my classic list item" icon="user_standard"  description="I have a description"></se-list-item>
          <se-list-item item="my item 2 no description with a long text" icon="user_standard" ></se-list-item>
          <se-list-item item="Basic Item"></se-list-item>
          <se-list-group item="I have a selected child">
            <se-list-item item="my item 1" icon="action_settings2"  description="I have a description"></se-list-item>
            <se-list-item item="my item 2 no description" selected="true" icon="action_settings2" ></se-list-item>
            <se-list-item item="my item 3 no icon" description="I'm here too"></se-list-item>
          </se-list-group>
          <se-list-group item="simple collapse">
            <se-list-item item="No icon, not selected"></se-list-item>
          </se-list-group>
        </se-list>
      </se-block>
      <se-divider option="vertical"></se-divider>
      <se-block width="250px" option="fill" divider>
        <se-block-header>
          <h5>nav</h5>
        </se-block-header>
        <se-list option="nav">
          <se-list-item item="my nav list item" ></se-list-item>
          <se-list-item item="my item 1"></se-list-item>
          <se-list-item item="my item 2 no description but I'm selected" selected="true"></se-list-item>
          <se-list-item item="my item 3 no icon"></se-list-item>
        </se-list>
      </se-block>
      <se-divider option="vertical"></se-divider>
      <se-block width="250px" option="fill" divider>
        <se-block-header>
          <h5>treeview</h5>
        </se-block-header>
        <se-list option="treeview">
          <se-list-item item="First treeview item"></se-list-item>
          <se-list-group item="Treeview Example">
            <se-list-item item="First treeview child"></se-list-item>
            <se-list-group item="Second treeview child">
              <se-list-item item="I'm the first treeview grandchild!"></se-list-item>
              <se-list-item item="I'm the second treeview grandchild!"></se-list-item>
              <se-list-group item="Second treeview child">
                <se-list-item item="I'm the first treeview grandchild!"></se-list-item>
                <se-list-item item="I'm the second treeview grandchild!" selected="true"></se-list-item>
              </se-list-group>
            </se-list-group>
            <se-list-item item="Third treeview child"></se-list-item>
            <se-list-item item="Third treeview child"></se-list-item>
          </se-list-group>
        </se-list>
      </se-block>
      <se-divider option="vertical"></se-divider>
      <se-block width="250px" option="fill" divider>
        <se-block-header>
          <h5>dropdown</h5>
        </se-block-header>
        <se-list option="dropdown">
          <se-list-item item="dropdown item"></se-list-item>
          <se-list-item item="Item 2"></se-list-item>
          <se-list-item item="Item 3"></se-list-item>
          <se-divider></se-divider>
          <se-list-item item="Item separated with a divider"></se-list-item>
        </se-list>
      </se-block>
      <se-divider option="vertical"></se-divider>
      <se-block width="250px" option="fill" divider>
        <se-block-header>
          <h5>headline</h5>
        </se-block-header>
        <se-list option="headline" can-collapse="true">
          <se-list-group item="Headline Example">
            <se-list-item item="Standard color icon" icon="action_doc_new" icon-color="standard"></se-list-item>
            <se-list-item item="Primary color icon" icon="action_doc_add" ></se-list-item>
            <se-list-item item="Disable color icon" icon="action_editor" icon-color="disable"></se-list-item>
          </se-list-group>
          <se-list-group item="Warning and error icon colors">
            <se-list-item item="Warning color icon" icon="general_danger_wired" icon-color="warning"></se-list-item>
            <se-list-item item="Error color icon" icon="notification_error_full_stroke" icon-color="error"></se-list-item>
          </se-list-group>
        </se-list>
      </se-block>
    </se-container>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'responsive',
    () => {
      const list = select('option', listOption, 'nav');
      const valueOptions = {
        range: true,
        min: 200,
        max: 700,
        step: 50,
      };
      const value = number('Block Width', 300, valueOptions);
      const canCollapse = boolean('can collapse', true);
      const iconColor = select('icon color', iconColorOptions, 'standard');

      return `
        <se-block width="${value}px" option="fill">
        <se-list option="${list}" can-collapse="${canCollapse}">
          <se-list-group item="My Example List">
            <se-list-item item="my classic list item" icon="user_standard" description="I have a description"></se-list-item>
            <se-list-item item="you can change my icon color" icon="user_standard" icon-color="${iconColor}"></se-list-item>
            <se-list-item item="Basic Item"></se-list-item>
            <se-list-item item="Check me!" icon="action_settings2" selected="false" role="listitem" class="hydrated"> <se-checkbox label="Check me" class="hydrated"></se-checkbox> </se-list-item>
            <se-list-item item="Click the button!" icon="action_settings2" role="listitem" class="hydrated"> <se-button class="hydrated">Select</se-button> </se-list-item>
          </se-list-group>
          <se-list-group icon="folder" item="I have a selected child">
            <se-list-item item="my item 1" icon="action_settings2" description="I have a description"></se-list-item>
            <se-list-item item="I'm selected" selected="true" icon="action_settings2"></se-list-item>
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
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
