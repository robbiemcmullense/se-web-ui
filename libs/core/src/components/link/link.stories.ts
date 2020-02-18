import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';

const linkOption = ['internal', 'external']

storiesOf('Link', module)
  .add('Link', () => {
    const textHtml = text('Link Text', 'Link to Google')
    const option = select('option', linkOption, 'internal')
    const disabled = boolean('disabled', false)
    const url = text('url', 'http://google.com')

    return `
      <se-link option='${option}' disabled='${disabled}' url='${url}'>${textHtml}</se-link>
    `
  })