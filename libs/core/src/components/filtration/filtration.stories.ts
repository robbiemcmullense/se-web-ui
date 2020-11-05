// tslint:disable-next-line: linebreak-style
import { storiesOf } from '@storybook/html';
import { select, text, boolean, number } from '@storybook/addon-knobs';

const selectionOptions = ['all', 'multiple'];

storiesOf('Filtration', module)
  .add('Desktop', () => {
    const selectedOption = select(
      'Select Multiple',
      selectionOptions,
      'single'
    );
    const selectedSingle = boolean('Select Single', false);
    const validInfo = boolean('Valid Info', false);
    const validInfoText = `${validInfo ? 'enabled' : 'disabled '}`;
    const shadow = boolean('Shadow', false);

    let deleteIcon = '';

    const selectedMultiple = selectedOption === 'multiple';
    const selectedAll = selectedOption === 'all';

    deleteIcon = selectedSingle
      ? `<se-icon option="button">action_delete_cross</se-icon>`
      : '';

    return `
    <se-container display="block" direction="column">
      <se-block width='400px' margin={$shadow ? 'small' : 'none'} option=${
        shadow ? 'card-old' : 'fill'
      }>
        <!-- Single select -->
        <se-filtration label-select="Single Select">
          <se-list-item item="Apple" selected=${selectedSingle}>
            ${deleteIcon}
          </se-list-item>
          <se-list-item item="Orange"></se-list-item>
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
        <!-- Multi select -->
        <se-filtration label-select="Multi Select">
          <se-list-item item="Select all">
            <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
          </se-list-item>
          <se-list-item item="Software">
            <se-checkbox selected=${
              selectedSingle || selectedMultiple || selectedAll
            } slot="start"></se-checkbox>
          </se-list-item>
          <se-list-item item="Hardware"
            ><se-checkbox selected=${
              selectedMultiple || selectedAll
            } slot="start"></se-checkbox
          ></se-list-item>
          <se-list-item item="Infrastructure"
            ><se-checkbox selected=${
              selectedMultiple || selectedAll
            } slot="start"></se-checkbox
          ></se-list-item>
          <se-list-item item="Mechanical"
            ><se-checkbox selected=${selectedAll} slot="start"></se-checkbox
          ></se-list-item>
          <se-list-item item="Electrical">
            <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
          </se-list-item>
          <se-list-item item="Information">
            <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
          </se-list-item>
          <se-list-item item="Telecommunication">
            <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
          </se-list-item>
          <se-list-item item="Healthcare">
            <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
          </se-list-item>
          <se-list-item item="Food">
            <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
          </se-list-item>
        </se-filtration>
        <!-- Date range -->
        <se-block-header>
          Form Input
        </se-block-header>
        <se-block-content option="fill">
          <se-filtration label-select="Date Range">
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
            <i>&laquo; Button is ${validInfoText}</i>
          </se-filtration>
          <!-- Search order results -->
          <se-filtration label-select="Search order results">
            <se-block margin="medium">
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
        </se-block-content>
      </se-block>
    </se-container>
  `;
  })
  .add('Mobile', () => {
    const selectedOption = select(
      'Select Multiple',
      selectionOptions,
      'single'
    );
    const selectedSingle = boolean('Select Single', false);
    const validInfo = boolean('Valid Info', false);
    const validInfoText = `${validInfo ? 'enabled' : 'disabled '}`;

    let deleteIcon = '';
    const selectedCategories =
      'Software, Hardware, Infrastructure, Mechanical, Electrical, Information, Telecommunication, Healthcare, Food';
    const dateRange = `start-date: 2020-11-02 | end-date: 2020-11-09`;

    const selectedMultiple = selectedOption === 'multiple';
    const selectedAll = selectedOption === 'all';

    deleteIcon = selectedSingle
      ? `<se-icon option="button">action_delete_cross</se-icon>`
      : '';
    return `
    <se-block width='400px' option="fill">
      <se-block-header>
        Mobile version
      </se-block-header>
      <se-block-content>
        <se-container direction="column">
          <se-block option="fill">
            <se-filtration label-select="Single Select">
              <div slot="selectedItem">Apple</div>
              <se-list option="dropdown" selected-color="primary">
                <se-list-item item="Apple" selected=${selectedSingle}>
                  ${deleteIcon}
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
          </se-block>
          <se-block>
            <se-filtration label-select="Multi Select">
            <div slot="selectedItem">${selectedCategories}</div>
              <se-list option="dropdown" selected-color="primary">
                <se-list-item item="Select all">
                  <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
                </se-list-item>
                <se-list-item item="Software">
                  <se-checkbox selected=${
                    selectedSingle || selectedMultiple || selectedAll
                  } slot="start"></se-checkbox>
                </se-list-item>
                <se-list-item item="Hardware"
                  ><se-checkbox selected=${
                    selectedMultiple || selectedAll
                  } slot="start"></se-checkbox
                ></se-list-item>
                <se-list-item item="Infrastructure"
                  ><se-checkbox selected=${
                    selectedMultiple || selectedAll
                  } slot="start"></se-checkbox
                ></se-list-item>
                <se-list-item item="Mechanical"
                  ><se-checkbox selected=${selectedAll} slot="start"></se-checkbox
                ></se-list-item>
                <se-list-item item="Electrical">
                  <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
                </se-list-item>
                <se-list-item item="Information">
                  <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
                </se-list-item>
                <se-list-item item="Telecommunication">
                  <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
                </se-list-item>
                <se-list-item item="Healthcare">
                  <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
                </se-list-item>
                <se-list-item item="Food">
                  <se-checkbox selected=${selectedAll} slot="start"></se-checkbox>
                </se-list-item>
              </se-list>
            </se-filtration>
            <se-block-content option="fill">
              <se-filtration label-select="Date Range">
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
                <i>&laquo; Button is ${validInfoText}</i>
              </se-filtration>
              <se-filtration label-select="Search order results">
                <se-block margin="medium">
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
            </se-block-content>
          </se-block>
        </se-container>
      </se-block-content>
    </se-block>
  `;
  });
