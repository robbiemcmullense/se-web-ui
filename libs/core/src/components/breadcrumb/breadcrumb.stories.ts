import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

storiesOf('Breadcrumb', module)
  .add('Breadcrumb', () => {
    const urlOne = text('First Breadcrumb URL', '')
    const urlTwo = text('Second Breadcrumb URL', '')
    const urlThree = text('Third Breadcrumb URL', '')
    const textHtmlOne = text('First Breadcrumb Item Text', 'First');
    const textHtmlTwo = text('Second Breadcrumb Item Text', 'Second');
    const textHtmlThree = text('Third Breadcrumb Item Text', 'Third');
    const textHtmlLast = text('Last Breadcrumb Item Text', 'Last');

    return `
      <se-breadcrumb>
        <se-breadcrumb-item href="${urlOne}">${textHtmlOne}</se-breadcrumb-item>
        <se-breadcrumb-item href="${urlTwo}">${textHtmlTwo}</se-breadcrumb-item>
        <se-breadcrumb-item href="${urlThree}">${textHtmlThree}</se-breadcrumb-item>
        <se-breadcrumb-item>${textHtmlLast}</se-breadcrumb-item>
      </se-breadcrumb>
    `
  })