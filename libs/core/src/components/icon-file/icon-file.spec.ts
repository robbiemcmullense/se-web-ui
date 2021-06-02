import { IconFileComponent } from './icon-file';
import { newSpecPage } from '@stencil/core/testing';

describe('IconFileComponent', () => {

  it('should render with correct text', async () => {
    const page = await newSpecPage({
      components: [IconFileComponent],
      html: `
        <se-icon-file value="PDF"></se-icon-file>`,
    });
    expect(page.root.shadowRoot.querySelector('text')).toBeTruthy();
  });
});
