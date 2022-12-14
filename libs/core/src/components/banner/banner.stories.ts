import { storiesOf } from '@storybook/html';
import { number } from '@storybook/addon-knobs';
import readme from './readme.md';

storiesOf('Banner', module).add(
  'Banner',
  () => {
    const duration = number('duration', 6000);

    return `
      <se-banner duration='${duration}'>
        <se-banner-item
          image-url="url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)">
          <se-block color="none" divider="false">
            <se-block-header>Reliable Through the Storm</se-block-header>
            <se-block-content>
              <div>
                And we do it at every level with EcoStruxure.
                Discover how Schneider Electric bold ideas happen with an INNOVATION portfolio
                of IoT enabled, connected products, edge control, and apps, analytics, and services.
              </div>
            </se-block-content>
            <se-block-footer>
              <se-button slot="start" color="secondary">Call to action</se-button>
              <se-button slot="start" option="outline">Secondary button</se-button>
            </se-block-footer>
          </se-block>
        </se-banner-item>
        <se-banner-item
          image-url="url(https://images.unsplash.com/photo-1440098334316-9b3afb87b5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)">
          <se-block outline outline-color="primary" clickable margin="xlarge" corner="4" color="standard">
            <se-block-header>Header 2</se-block-header>
            <se-block-content>Content 2</se-block-content>
            <se-block-footer>Footer 2</se-block-footer>
          </se-block>
        </se-banner-item>
        <se-banner-item
          image-url="url(https://images.freeimages.com/images/large-previews/199/sunflowers-6-1392951.jpg)">
          <se-block>
            <se-block-header>Header 3</se-block-header>
            <se-block-content>Content 3</se-block-content>
            <se-block-footer>Footer 3</se-block-footer>
          </se-block>
        </se-banner-item>
      </se-banner>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
