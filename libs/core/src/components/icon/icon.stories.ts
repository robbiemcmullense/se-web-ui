import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmefile from '../icon-file/readme.md';
import readmeecostruxure from '../icon-ecostruxure/readme.md';
import readmelifeison from '../icon-lifeison/readme.md';
import readmeschneider from '../icon-schneider/readme.md';

import { text, select, boolean } from '@storybook/addon-knobs';

storiesOf('Icons', module)
  .add(
    'standard icons',
    () => {
      const sizeOption = ['nano', 'small', 'medium', 'large', 'xlarge'];
      const colorOption = [
        'standard',
        'alternative',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ];
      const size = select('size', sizeOption, 'large');
      const color = select('color', colorOption, 'primary');
      const icon = text('icon', 'action_search_stroke');
      const mirror = select(
        'mirror',
        ['horizontal', 'vertical', 'both', 'none'],
        'none'
      );
      const rotate = select('rotate', [45, -45, 90, '-90deg', '180deg', 0], 0);

      return `
      <div style="padding: 20px">
        <se-icon size="${size}" color="${color}" mirror="${mirror}" rotate="${rotate}">${icon}</se-icon>
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
    'Button icons',
    () => {
      const sizeOption = ['nano', 'small', 'medium', 'large', 'xlarge'];
      const colorOption = [
        'standard',
        'alternative',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ];
      const hoverOption = [
        'standard',
        'alternative',
        'primary',
        'secondary',
        '',
      ];
      const size = select('size', sizeOption, 'small');
      const color = select('color', colorOption, 'primary');
      const icon = text('icon', 'action_settings1');
      const hoverColor = select('hoverColor', hoverOption, 'none');
      const noHover = boolean('noHover', false);

      return `
      <div style="padding: 20px">
        <se-icon size="${size}" option="button" color="${color}" ${
        hoverColor && `hover-color="${hoverColor}"`
      } ${noHover && `no-hover`}>${icon}</se-icon>
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
    'Icon-file',
    () => {
      const sizeOption = ['nano', 'small', 'medium', 'large', 'xlarge'];
      const colorOption = [
        'standard',
        'alternative',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ];
      const size = select('size', sizeOption, 'large');
      const color = select('color', colorOption, 'standard');
      const value1 = text('value first icon', 'PDF');
      const value2 = text('value second icon', 'DOCX');

      return `
      <div style="padding: 20px">
        <se-icon-file value=${value1} size=${size} color=${color}></se-icon-file>
        <se-icon-file value=${value2} size=${size} color=${color}></se-icon-file>
      </div>
    `;
    },
    {
      notes: {
        markdown: readmefile,
      },
    }
  )
  .add(
    'Ecostruxure icon',
    () => {
      const ecostruxureSizes = ['small', 'medium'];
      const ecostruxureColors = ['standard', 'inherited'];
      const size = select('size', ecostruxureSizes, 'small');
      const color = select('color', ecostruxureColors, 'standard');

      return `
      <div style="padding: 20px">
        <se-icon-ecostruxure size="${size}" color="${color}"></se-icon-ecostruxure>
      </div>
    `;
    },
    {
      notes: {
        markdown: readmeecostruxure,
      },
    }
  )
  .add(
    'Life Is On icon',
    () => {
      const colorOptions = ['standard', 'inherited'];
      const color = select('color', colorOptions, 'standard');

      return `
      <div style="padding: 20px">
        <se-icon-lifeison color="${color}"></se-icon-lifeison>
      </div>
    `;
    },
    {
      notes: {
        markdown: { readmelifeison },
      },
    }
  )
  .add(
    'Schneider icon',
    () => {
      return `
      <se-icon-schneider></se-icon-schneider>
    `;
    },
    {
      notes: {
        markdown: readmeschneider,
      },
    }
  );
