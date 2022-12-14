import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';
import readme from './readme.md';
import readmeitem from '../breadcrumb-item/readme.md';

storiesOf('Breadcrumb', module).add(
  'Breadcrumb',
  () => {
    const canSelectLast = boolean('canSelectLast', false);
    const breakpoints = {
      none: undefined,
      tablet: 'tablet',
      desktop: 'desktop',
      'wide desktop': 'wide-desktop',
    };
    const breakpoint = select(
      'breakpoint for backlink mode',
      breakpoints,
      undefined
    );
    const textHtmlOne = text('First Breadcrumb Item Text', 'First Breadcrumb');
    const textHtmlTwo = text(
      'Second Breadcrumb Item Text',
      'Second Breadcrumb'
    );
    const textHtmlThree = text(
      'Third Breadcrumb Item Text',
      'Third Breadcrumb'
    );
    const textHtmlLast = text('Last Breadcrumb Item Text', 'Last Breadcrumb');

    return `
      <se-breadcrumb
        can-select-last="${canSelectLast}"
        breakpoint="${breakpoint}"
      >
        <se-breadcrumb-item>${textHtmlOne}</se-breadcrumb-item>
        <se-breadcrumb-item>${textHtmlTwo}</se-breadcrumb-item>
        <se-breadcrumb-item>${textHtmlThree}</se-breadcrumb-item>
        <se-breadcrumb-item>${textHtmlLast}</se-breadcrumb-item>
      </se-breadcrumb>
    `;
  },
  {
    notes: {
      markdown: { 'se-breadcrumb': readme, 'se-breadcrumb-item': readmeitem },
    },
  }
);
