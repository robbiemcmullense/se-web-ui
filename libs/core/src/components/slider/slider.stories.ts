import { storiesOf } from '@storybook/html';
import { text, boolean, number } from '@storybook/addon-knobs';

const valueOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

storiesOf('Slider', module).add('Demo', () => {
  const value = number('value', 0, valueOptions);
  const minValue = number('min value', 0);
  const maxValue = number('max value', 100);
  const label = text('label', '');
  const disabled = boolean('disabled', false);

  return `
      <div style="padding: 10px;">
        <se-slider
          value="${value}"
          min="${minValue}"
          max="${maxValue}"
          label="${label}"
          disabled="${disabled}"></se-slider>
      </div>
    `;
});
