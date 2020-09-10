<template>
  <SeContainer>
    <SeBlock width="250px" option="fill">
      <SeList>
        <SeListItem
          item="my item 1"
          selected="false"
          icon="user_standard"
          icon-color="primary"
          description="I have a description"
        >
        </SeListItem>
        <SeListItem
          item="my item 2 no description with a long text"
          icon="user_standard"
          icon-color="primary"
        >
        </SeListItem>
        <SeListItem item="my item 3 no icon" description="I'm here too">
        </SeListItem>
        <SeListItem item="I'm the selected one!" selected="false"> </SeListItem>
        <SeListItem item="Basic Item" icon="action_settings2"> </SeListItem>
        <SeListGroup
          item="I have a selected child"
          icon="action_settings2"
          icon-color="primary"
          description="I'm selected if collapsed"
        >
          <SeListItem
            item="my item 1"
            selected="false"
            icon="action_settings2"
            icon-color="primary"
            description="I have a description"
          >
          </SeListItem>
          <SeListItem
            item="my item 2 no description"
            icon="action_settings2"
            icon-color="primary"
          >
          </SeListItem>
          <SeListItem
            item="my item 3 no icon"
            icon="action_settings2"
            description="I'm here too"
          >
          </SeListItem>
          <SeListItem item="Check me!" icon="action_settings2" selected="false">
            <SeCheckbox></SeCheckbox>
          </SeListItem>
          <SeListItem item="Click the button!" icon="action_settings2">
            <SeButton>Select</SeButton>
          </SeListItem>
          <SeListGroup item="simple collapse">
            <SeListItem item="No icon, not selected" selected="false">
            </SeListItem>
            <SeListItem
              item="my item 2 no description"
              icon="action_settings2"
              icon-color="primary"
            >
            </SeListItem>
            <SeListItem item="my item 3 no icon" description="I'm here too">
            </SeListItem>
            <SeListItem item="Basic Item" selected="true"> </SeListItem>
          </SeListGroup>
        </SeListGroup>
        <SeListGroup item="simple collapse">
          <SeListItem item="No icon, not selected" selected="false">
          </SeListItem>
          <SeListItem
            item="my item 2 no description"
            icon="action_settings2"
            icon-color="primary"
          >
          </SeListItem>
          <SeListItem item="my item 3 no icon" description="I'm here too">
          </SeListItem>
          <SeListItem item="Basic Item"> </SeListItem>
        </SeListGroup>
      </SeList>
    </SeBlock>
    <SeDivider option="vertical"></SeDivider>
    <SeContainer
      option="card"
      display="grid"
      column-size="400px"
      row-size="400px"
    >
      <SeBlock id="widget0">
        <SeBlockHeader>
          Typography
          <div slot="end">
            <SeDropdown alignment="right">
              <SeIcon slot="trigger" option="button" color="alternative"
                >other_vertical</SeIcon
              >
              <SeList option="dropdown">
                <SeListItem item="I'm selected"></SeListItem>
                <SeListItem
                  item="my item 2 no description  with a long text"
                ></SeListItem>
                <SeListItem item="my item 3 no icon"></SeListItem>
              </SeList>
            </SeDropdown>
            <SeIcon option="button" color="alternative" onclick="toggle(0)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <h1>My h1 string with a divider</h1>
          <SeDivider></SeDivider>
          <h2>My h2 string with a divider</h2>
          <SeDivider></SeDivider>
          <h3>My h3 string with a divider</h3>
          <SeDivider></SeDivider>
          <h4>My h4 string with a divider</h4>
          <SeDivider></SeDivider>
          <h5>My h5 string with a divider</h5>
          <SeDivider></SeDivider>
          <h6>My h6 string with a divider</h6>
          <SeDivider></SeDivider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </SeBlockContent>
        <SeBlockFooter>
          <SeButton onclick="openSnackbar()" option="raised"
            >Open Snackbar</SeButton
          >
        </SeBlockFooter>
      </SeBlock>

      <SeBlock id="widget1">
        <SeBlockHeader>
          Buttons
          <div slot="end">
            <SeIcon option="button" color="alternative" onclick="toggle(1)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <ul>
            <li id="button-info"></li>
            <li id="chip-info"></li>
          </ul>
          <SeButton option="flat">standard</SeButton>
          <SeButton id="flatBtn1" option="flat" color="alternative"
            >alternative</SeButton
          >
          <SeButton option="flat" color="primary">primary</SeButton>
          <SeButton option="flat" color="secondary">secondary</SeButton>
          <SeDropdown alignment="left">
            <SeButton slot="trigger" option="flat">Dropdown</SeButton>
            <SeList option="dropdown">
              <SeListItem item="Click to load" onclick="loader()"></SeListItem>
              <SeListItem item="my item 3 no icon"></SeListItem>
              <SeListItem item="I'm the selected one!"></SeListItem>
              <SeListItem item="Basic Item"></SeListItem>
              <SeListItem item="I'm here"></SeListItem>
              <SeListItem
                item="my item 2 no description  with a long text"
              ></SeListItem>
            </SeList>
          </SeDropdown>
          <SeButton icon="action_resize">Resize</SeButton>
          <SeButton option="outline" onclick="loader()">Outline</SeButton>
          <SeButton option="outline" color="alternative"
            >Outline alternative</SeButton
          >
          <SeButton option="outline" color="primary">Outline primary</SeButton>
          <SeButton option="outline" color="secondary"
            >Outline secondary</SeButton
          >

          <SeButton icon="action_resize"></SeButton>
          <SeChip id="SeChip" value="Chip 01"></SeChip>
          <SeChip value="Chip 02" can-close="false" color="primary"></SeChip>
          <SeLink url="http://google.com">Link to Google</SeLink>
          <SeLink url="http://google.com" type="external"
            >External Link to Google</SeLink
          >
          <SeLink url="http://google.com" disabled="true"
            >Link to Google</SeLink
          >
          <SeLink url="http://google.com" type="external" disabled="true"
            >External Link to Google</SeLink
          >
          <SeButton option="flat">Flat</SeButton>
          <SeButton option="flat" color="primary">FlatGreen</SeButton>
          <SeButton id="raisedBtn" option="raised">Raised</SeButton>
          <SeButton id="raisedBtn2" option="raised" color="primary"
            >RaisedGreen</SeButton
          >
          <SeButton id="textBtn1" option="text">Text</SeButton>
          <SeButton id="textBtn2" option="text" color="primary"
            >Primary</SeButton
          >
          <SeDivider></SeDivider>
          <ul>
            <li id="switch-message">
              the selected state of the on/off switch is: <span></span>
            </li>
            <li id="toggle-switch-message">
              the selected state of the toggle switch is: <span></span>
            </li>
          </ul>
          <SeCheckbox option="onoff" id="switch-el"></SeCheckbox>
          <SeCheckbox id="toggle-switch-el"></SeCheckbox>
          <SeDivider></SeDivider>
          <ul>
            <li id="radio-message">selected radio button: <span></span></li>
          </ul>
          <SeRadioGroup id="RadioGroup1" option="radio">
            <SeButton value="left" icon="arrow2_left"></SeButton>
            <SeButton value="right" icon="arrow2_right"></SeButton>
          </SeRadioGroup>
          <SeCheckbox
            style="margin-left: 20px"
            id="checkbox-primary"
            value="primary"
            label="Primary"
          ></SeCheckbox>
          <SeCheckbox
            id="checkbox-warn"
            value="warn"
            color="secondary"
            label="Secondary"
          ></SeCheckbox>
          <SeDivider></SeDivider>
          <ul>
            <li id="checkbox-button-message">
              selected button checkbox buttons: <span>none</span>
            </li>
          </ul>
          <SeRadioGroup id="btnGroup1" option="radio">
            <SeButton value="first">Check1</SeButton>
            <SeButton value="second">Check2</SeButton>
            <SeButton value="third">Check3</SeButton>
          </SeRadioGroup>
          <SeDivider></SeDivider>
          <SeRadioGroup option="checkbox" color="primary">
            <SeButton value="first">Check1</SeButton>
            <SeButton value="second">Check2</SeButton>
            <SeButton value="third">Check3</SeButton>
          </SeRadioGroup>
        </SeBlockContent>
      </SeBlock>
      <SeBlock id="widget2">
        <SeBlockHeader>
          Forms
          <div slot="end">
            <SeIcon option="button" color="alternative" onclick="toggle(2)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <h4>Inlined</h4>
          <ul>
            <li id="form-field-message">form field value: <span></span></li>
          </ul>

          <SeFormField
            id="checkbox-form"
            label="This is my custom Checkbox.  It is unique."
            type="checkbox"
            required="true"
          >
            <SeCheckbox value="checkbox-value"></SeCheckbox>
          </SeFormField>
          <SeFormField id="input-form" label="Input" required="true">
            <input type="text" />
          </SeFormField>

          <SeFormField
            id="select-form"
            label="Select"
            required="true"
            type="select"
          >
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </SeFormField>
          <h4>Stacked</h4>

          <SeFormField
            id="input-stacked-form"
            label="Input"
            required="true"
            option="stacked"
          >
            <input type="text" />
          </SeFormField>
          <SeFormField
            id="select-form"
            label="Select"
            required="true"
            type="select"
            option="stacked"
          >
            <select>
              <option>Stacked Option 1</option>
              <option>Stacked Option 2</option>
              <option>Stacked Option 3</option>
            </select>
          </SeFormField>
        </SeBlockContent>
      </SeBlock>
      <SeBlock id="widget3">
        <SeBlockHeader>
          Modals
          <div slot="end">
            <SeIcon option="button" color="alternative" onclick="toggle(3)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <SeButton
            onclick="openDialog('dialog-simple-notitle')"
            option="raised"
            >Open Dialog simple</SeButton
          >
          <SeButton onclick="openDialog('dialog-simple-title')" option="raised"
            >Open Dialog title & icon</SeButton
          >
          <SeButton onclick="openDialog('dialog-complex')" option="raised"
            >Open Dialog complex</SeButton
          >
        </SeBlockContent>
      </SeBlock>
      <SeBlock id="widget4">
        <SeBlockHeader>
          Linear chart
          <div slot="end">
            <SeIcon option="button" color="alternative" onclick="toggle(4)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <SeVisualLinear
            id="progBar"
            percentage="33"
            value="8"
            label="Labels"
          ></SeVisualLinear>
          <SeVisualLinear
            secolor="#0011aa"
            percentage="89"
            option="stacked"
            value="59"
            label="Labels"
          >
          </SeVisualLinear>
        </SeBlockContent>
      </SeBlock>
      <SeBlock id="widget5">
        <SeBlockHeader>
          Radial chart
          <div slot="end">
            <SeIcon option="button" color="alternative" onclick="toggle(5)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent>
          <SeVisualRadial percentage="30" label="units"></SeVisualRadial>
          <SeVisualRadial
            percentage="30"
            secolor="#ee0014"
            label="Label"
            value="8"
          ></SeVisualRadial>
        </SeBlockContent>
      </SeBlock>
      <SeBlock id="widget6">
        <SeBlockHeader>
          Tree view
          <div slot="end">
            <SeIcon option="button" color="alternative" onclick="toggle(6)"
              >presentation_mode</SeIcon
            >
          </div>
        </SeBlockHeader>
        <SeBlockContent option="fill">
          <SeList option="treeview">
            <SeListGroup item="Treeview Example">
              <SeListItem item="First treeview child"></SeListItem>
              <SeListGroup option="treeview" item="Second treeview child">
                <SeListItem
                  item="I'm the first treeview grandchild!"
                ></SeListItem>
                <SeListItem
                  item="I'm the second treeview grandchild!"
                  selected="true"
                ></SeListItem>
              </SeListGroup>
              <SeListItem item="Third treeview child"></SeListItem>
            </SeListGroup>
          </SeList>
        </SeBlockContent>
      </SeBlock>
    </SeContainer>
  </SeContainer>
</template>

<script lang="ts">
import {
  SeContainer,
  SeDropdown,
  SeRadioGroup,
  SeChip,
  SeLink,
  SeVisualRadial,
  SeVisualLinear,
  SeFormField,
  SeIcon,
  SeButton,
  SeBlockFooter,
  SeBlock,
  SeBlockContent,
  SeBlockHeader,
  SeList,
  SeTableGroup,
  SeListItem,
  SeDivider,
  SeCheckbox,
} from '@se/web-ui-vue';
export default {
  components: {
    SeContainer,
    SeDropdown,
    SeRadioGroup,
    SeChip,
    SeLink,
    SeVisualRadial,
    SeVisualLinear,
    SeFormField,
    SeIcon,
    SeButton,
    SeBlockFooter,
    SeBlock,
    SeBlockContent,
    SeBlockHeader,
    SeList,
    SeTableGroup,
    SeListItem,
    SeDivider,
    SeCheckbox,
  },
};
</script>
