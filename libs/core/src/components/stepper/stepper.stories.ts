import { storiesOf } from '@storybook/html';
import { text, select, boolean } from '@storybook/addon-knobs';

const colorOptions = ['primary', 'alternative'];

storiesOf('Stepper', module)
  .add('Demo', () => {
    const color = select('color', colorOptions, 'primary')
    const linear = boolean('linear', true)
    const step1Label = text('Step 1 Label', 'Step 1')
    const step2Label = text('Step 2 Label', 'Step 2')
    const step3Label = text('Step 3 Label', 'Step 3')
    const step4Label = text('Step 4 Label', 'Step 4')
    const step5Label = text('Step 5 Label', 'Step 5')
    const step1Validated = boolean('Step 1 Validated', false)
    const step2Validated = boolean('Step 2 Validated', false)
    const step3Validated = boolean('Step 3 Validated', false)
    const step4Validated = boolean('Step 4 Validated', false)
    const step5Validated = boolean('Step 5 Validated', false)

    return `
      <div style="width: 100%; height: 100%;">
        <se-stepper color="${color}" linear="${linear}">
          <se-stepper-item label="${step1Label}" validated="${step1Validated}"></se-stepper-item>
          <se-stepper-item label="${step2Label}" validated="${step2Validated}"></se-stepper-item>
          <se-stepper-item label="${step3Label}" validated="${step3Validated}"></se-stepper-item>
          <se-stepper-item label="${step4Label}" validated="${step4Validated}"></se-stepper-item>
          <se-stepper-item label="${step5Label}" validated="${step5Validated}"></se-stepper-item>
        </se-stepper>
      </div>
    `
  })
