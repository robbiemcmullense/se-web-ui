import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, boolean } from '@storybook/addon-knobs';

const colorOptions = ['standard', 'alternative', 'primary', 'secondary'];
const sizeOptions = ['small', 'nano'];

storiesOf('Radio Group', module)
  .add(
    'Group of Radio Buttons',
    () => {
      const radioOptions = ['primary', 'secondary'];
      const valueOptions = ['none', 'first', 'second', 'third'];
      const directionOptions = ['column', 'row'];
      const color = select('color', radioOptions, 'standard');
      const direction = select('direction', directionOptions, 'column');
      const disabled = boolean('disabled', false);
      const value = select('value', valueOptions, 'none');

      return `
      <se-radio-group color="${color}" disabled="${disabled}" value="${value}" direction="${direction}">
        <se-radio value="first" label="Radio Label 1"></se-radio>
        <se-radio value="second" label="Radio Label 2"></se-radio>
        <se-radio value="third" label="Radio Label 3"></se-radio>
      </se-radio-group>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Group of Regular Buttons',
    () => {
      const valueOptions = ['none', 'first', 'second', 'third'];
      const color = select('color', colorOptions, 'standard');
      const size = select('size', sizeOptions, 'small');
      const disabled = boolean('disabled', false);
      const value = select('value', valueOptions, 'none');
      const option = select('option', ['flat', 'outline'], 'flat');

      return `
      <div style="padding: 20px;">
        <se-radio-group color="${color}" size="${size}" disabled="${disabled}" value="${value}">
          <se-button value="first" option="${option}">Check1</se-button>
          <se-button value="second" option="${option}">Check2</se-button>
          <se-button value="third" option="${option}">Check3</se-button>
        </se-radio-group>
      </div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Group of Regular Buttons with Icons',
    () => {
      const valueOptions = ['none', 'left', 'up', 'down', 'right'];
      const color = select('color', colorOptions, 'standard');
      const size = select('size', sizeOptions, 'small');
      const disabled = boolean('disabled', false);
      const value = select('value', valueOptions, 'none');

      return `
      <div style="padding: 20px;">
        <se-radio-group color="${color}" size="${size}" disabled="${disabled}" value="${value}">
          <se-button value="left" icon="arrow2_left"></se-button>
          <se-button value="up" icon="arrow2_up"></se-button>
          <se-button value="down" icon="arrow2_down"></se-button>
          <se-button value="right" icon="arrow2_right"></se-button>
        </se-radio-group>
      </div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
