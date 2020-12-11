// tslint:disable-next-line: linebreak-style
import { storiesOf } from '@storybook/html';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import readme from './readme.md';
import readmeItem from '../carousel-item/readme.md';

const valueOptions = {
  range: true,
  min: 200,
  max: 500,
  step: 25,
};

storiesOf('Carousel', module)
  .add(
    'Carousel',
    () => {
      const minWidth = number('Item-min-width', 275, valueOptions);
      const minItems = number('Number of items', 15);
      return `
      <se-container position="absolute" color="standard" direction="column" display="flex">
        <se-carousel item-min-width=${minWidth}>
        ${[...Array(minItems || 0)]
          .map(
            (_, key) =>
              `
            <se-carousel-item>
              <se-block margin="medium" outline>
                <se-block-header>
                  Order ${key}
                </se-block-header>
                <se-block-content>
                  <se-form-field padding="none" label="P.O." label-align="left" label-width="80px" no-stacking>81083508</se-form-field>
                  <se-form-field padding="none" label="Date" label-align="left" label-width="80px" no-stacking>27-Feb-2019</se-form-field>
                  <se-form-field padding="none" label="shipTo" label-align="left" label-width="80px" no-stacking>Indianapolis, IN</se-form-field>
                  <se-form-field padding="none" label="service" label-align="left" label-width="80px" no-stacking>delyService</se-form-field>
                </se-block-content>
              </se-block>
            </se-carousel-item>
          `
          )
          .join('')}
        </se-carousel>
      </se-container>
    `;
    },
    {
      notes: {
        markdown: {
          'se-carousel': readme,
          'se-carousel-item': readmeItem,
        },
      },
    }
  )
  .add(
    'Carousel button',
    () => {
      const minWidth = number('Item-min-width', 150, {
        range: true,
        min: 100,
        max: 300,
        step: 25,
      });
      const minItems = number('Number of items', 15);
      return `
      <se-container position="absolute" color="standard" direction="column" display="flex">
        <se-carousel item-min-width=${minWidth} >
        ${[...Array(minItems || 0)]
          .map(
            (_, key) =>
              `
              <se-carousel-item>
                <se-button block>Item ${key}</se-button>
              </se-carousel-item>
          `
          )
          .join('')}
        </se-carousel>
      </se-container>
    `;
    },
    {
      notes: {
        markdown: {
          'se-carousel': readme,
          'se-carousel-item': readmeItem,
        },
      },
    }
  );
