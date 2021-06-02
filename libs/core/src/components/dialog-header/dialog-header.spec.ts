import { DialogHeaderComponent } from './dialog-header';
import { newSpecPage } from '@stencil/core/testing';

describe('DialogHeaderComponent', () => {
  
  it('should render with a flex class', async () => {
    const page = await newSpecPage({
      components: [DialogHeaderComponent],
      html: `<se-dialog-header></se-dialog-header>`,
    });
    expect(page.root.shadowRoot.querySelector('div.flex')).toBeTruthy();
  });
});
