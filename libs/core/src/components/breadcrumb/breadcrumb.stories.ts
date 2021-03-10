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
<<<<<<< HEAD
      <se-breadcrumb 
        can-select-last="${canSelectLast}" 
=======
      <se-breadcrumb
        can-select-last="${canSelectLast}"
>>>>>>> 0c80f7977d667920e4d09aae3adeb03c6ca182d1
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
