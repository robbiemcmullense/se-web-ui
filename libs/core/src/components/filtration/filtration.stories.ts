// tslint:disable-next-line: linebreak-style
import { storiesOf } from '@storybook/html';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import readme from './readme.md';

const selectionOptions = ['all', 'multiple'];

storiesOf('Filtration', module)
  .add(
    'Desktop',
    () => {
      const shadow = boolean('Shadow', false);
      const searchable = boolean('searchable', true);
      const validInfo = boolean('Valid Info', false);

      return `
      <se-block color="none" width="300px" color="none">
        <se-container direction="column" style="max-width: 300px">
          <se-filtration shadow=${shadow} item="Single Select" searchable=${searchable}>
            <se-list-item item="Orange"></se-list-item>
            <se-list-item item="Apple" selected>
              <se-icon option="button">action_delete_cross</se-icon>
            </se-list-item>
            <se-list-item item="Pineapple"></se-list-item>
            <se-list-item item="Fig"></se-list-item>
            <se-list-item item="Pear"></se-list-item>
            <se-list-item item="Custard Apple"></se-list-item>
            <se-list-item item="Lemon"></se-list-item>
            <se-list-item item="Mango"></se-list-item>
            <se-list-item item="Grapes"></se-list-item>
            <se-list-item item="Carrot"></se-list-item>
            <se-list-item item="Radish"></se-list-item>
            <se-list-item item="Pumpkin"></se-list-item>
          </se-filtration>
          <se-filtration shadow=${shadow} item="Multi Select" show-select-all search="" searchable=${searchable}>
            <se-list-item>
              <se-checkbox slot="item" size="medium" label="Software" selected="true" id="Software"></se-checkbox>
            </se-list-item>
            <se-list-item>
              <se-checkbox slot="item" size="medium" label="mylongemailaddress.whynot@se.com" selected="true" id="Hardware"></se-checkbox>
            </se-list-item>
            <se-list-item>
              <se-checkbox slot="item" size="medium" label="Infrastructure with some more into it" label-suffix="100" id="Infrastructure"></se-checkbox>
            </se-list-item>
            <se-list-item>
              <se-checkbox slot="item" size="medium" label="Mechanical" label-suffix="10" id="Mechanical"></se-checkbox>
            </se-list-item>
            <se-list-item>
              <se-checkbox slot="item" size="medium" label="Electrical" id="Electrical"></se-checkbox>
            </se-list-item>
            <se-list-item>
              <se-checkbox slot="item" size="medium" label="Information" id="Information"></se-checkbox>
            </se-list-item>
          </se-filtration>
          <se-filtration shadow=${shadow} item="Date Range">
            <se-block color="none" margin="medium">
              <se-form-field option="stacked" block label="Start date" type="input">
                <input type="date" id="startdate" />
                </se-form-field>
                <se-form-field
                  option="stacked"
                  block
                  label="End date"
                  type="input"
                >
                  <input type="date" id="enddate" />
                </se-form-field>
                <se-block-footer>
                  <se-button color="secondary" disabled=${!validInfo} option="outline">Ok</se-button>
                </se-block-footer>
              </se-block>
            </se-filtration>
            <se-filtration shadow=${shadow} item="Search order results">
              <se-block color="none" margin="medium">
                <se-block-header>
                  <div slot="end">
                    <se-dropdown alignment="right">
                      <se-icon slot="trigger" option="button">other_vertical</se-icon>
                      <se-list option="dropdown">
                        <se-list-item item="I'm selected"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                        <se-list-item item="my item 3 no icon"></se-list-item>
                      </se-list>
                    </se-dropdown>
                  </div>
                </se-block-header>
                <se-form-field
                  label="Order number"
                  option="stacked"
                  type="input"
                  block
                >
                  <input id="ordernumber" name="ordernumber" type="text" />
                </se-form-field>
                <se-form-field
                  label="Purchase order number"
                  option="stacked"
                  type="input"
                  block
                >
                  <input
                    id="purchaseordernumber"
                    name="purchaseordernumber"
                    type="text"
                  />
                </se-form-field>
                <se-form-field
                  label="Catalog number"
                  option="stacked"
                  type="input"
                  block
                >
                  <input
                    id="catalognumber"
                    name="catalognumber"
                    type="text"
                  />
                </se-form-field>
                <se-block-footer>
                  <se-button slot="start" color="secondary" option="outline">OK</se-button>
                </se-block-footer>
              </se-block>
            </se-filtration>
        </se-container>
      </se-block>
  `;
    },
    {
      notes: {
        markdown: readme,
      },
      parameters: {
        viewport: {
          disabled: true,
        },
      },
    }
  )
  .add(
    'Mobile',
    () => {
      const validInfo = boolean('Valid Info', false);

      let deleteIcon = '';
      const selectedCategories =
        'Software, Hardware, Infrastructure, Mechanical, Electrical, Information, Telecommunication, Healthcare, Food';
      const dateRange = `start-date: 2020-11-02 | end-date: 2020-11-09`;

      deleteIcon = ``;
      return `
        <se-container direction="column">
        <se-filtration item="Single Select">
          <div slot="selectedItem">Apple</div>
          <se-list option="dropdown" selected-color="primary">
            <se-list-item item="Apple" selected>
            <se-icon option="button">action_delete_cross</se-icon>
            </se-list-item>
            <se-list-item item="Orange"></se-list-item>
            <se-list-item item="Pineapple"></se-list-item>
            <se-list-item item="Fig"></se-list-item>
            <se-list-item item="Pear"></se-list-item>
            <se-list-item item="Custard Apple"></se-list-item>
            <se-list-item item="Lemon"></se-list-item>
            <se-list-item item="Mango"></se-list-item>
          </se-list>
        </se-filtration>
        <se-filtration item="Multi Select">
          <div slot="selectedItem">${selectedCategories}</div>
          <se-list-item item="Software">
            <se-checkbox slot="start" selected="true" id="Software"></se-checkbox>
          </se-list-item>
          <se-list-item item="Hardware">
            <se-checkbox slot="start" selected="true" id="Hardware"></se-checkbox>
          </se-list-item>
          <se-list-item item="Infrastructure">
            <se-checkbox slot="start" id="Infrastructure"></se-checkbox>
          </se-list-item>
          <se-list-item item="Mechanical">
            <se-checkbox slot="start" id="Mechanical"></se-checkbox>
          </se-list-item>
          <se-list-item item="Electrical">
            <se-checkbox slot="start" id="Electrical"></se-checkbox>
          </se-list-item>
          <se-list-item item="Information">
            <se-checkbox slot="start" id="Information"></se-checkbox>
          </se-list-item>
        </se-filtration>
          <se-filtration item="Date Range">
          <se-block color="none" margin="medium">

            <div slot="selectedItem">${dateRange}</div>
            <se-form-field
              option="stacked"
              block
              label="Start date"
              type="input"
            >
              <input type="date" id="startdate" />
            </se-form-field>
            <se-form-field
              option="stacked"
              block
              label="End date"
              type="input"
            >
              <input type="date" id="enddate" />
            </se-form-field>
            <se-button color="secondary" disabled=${!validInfo} option="outline">Ok</se-button>
            </se-block>
          </se-filtration>
          <se-filtration item="Search order results">
            <se-block color="none" margin="medium">
              <se-form-field
                label="Order number"
                option="stacked"
                type="input"
                block
              >
                <input id="ordernumber" name="ordernumber" type="text" />
              </se-form-field>
              <se-form-field
                label="Purchase order number"
                option="stacked"
                type="input"
                block
              >
                <input
                  id="purchaseordernumber"
                  name="purchaseordernumber"
                  type="text"
                />
              </se-form-field>
              <se-form-field
                label="Catalog number"
                option="stacked"
                type="input"
                block
              >
                <input
                  id="catalognumber"
                  name="catalognumber"
                  type="text"
                />
              </se-form-field>
              <se-button color="secondary" option="outline">OK</se-button>
            </se-block>
          </se-filtration>
        </se-container>
  `;
    },
    {
      notes: {
        markdown: readme,
      },
      parameters: {
        viewport: {
          defaultViewport: 'iphonex',
        },
      },
    }
  );
