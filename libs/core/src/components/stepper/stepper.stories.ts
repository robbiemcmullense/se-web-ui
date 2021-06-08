import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmeitem from '../stepper-item/readme.md';
import { text, select, boolean } from '@storybook/addon-knobs';

const colorOptions = ['primary', 'alternative'];

storiesOf('Stepper', module).add(
  'Demo',
  () => {
    const color = select('color', colorOptions, 'primary');
    const linear = boolean('linear', true);
    const block = boolean('block', false);
    const interactive = boolean('interactive', true);
    const addStepper = boolean('Add last step', false);
    const step1Validated = boolean('Step 1 Validated', true);
    const step2Validated = boolean('Step 2 Validated', true);
    const step3Validated = boolean('Step 3 Validated', true);
    const step4Validated = boolean('Step 4 Validated', false);
    const step5Validated = boolean('Step 5 Validated', false);

    return `
      <div style="width: 100%; height: 100%;">
        <se-stepper color="${color}" linear="${linear}" block="${block}" interactive="${interactive}">
          <se-stepper-item label="Step 1" validated="${step1Validated}"></se-stepper-item>
          <se-stepper-item label="Step 2" validated="${step2Validated}"></se-stepper-item>
          <se-stepper-item label="Step 3" validated="${step3Validated}"></se-stepper-item>
          <se-stepper-item label="Step 4" validated="${step4Validated}"></se-stepper-item>
          <se-stepper-item label="Step 5" validated="${step5Validated}"></se-stepper-item>
          ${
            addStepper
              ? '<se-stepper-item label="Step 6" ></se-stepper-item>'
              : ''
          }
        </se-stepper>
      </div>
    `;
  },
  {
    notes: {
      markdown: { 'se-stepper': readme, 'se-stepper-item': readmeitem },
    },
  }
);
