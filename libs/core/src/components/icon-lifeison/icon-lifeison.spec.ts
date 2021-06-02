import { IconLifeisonComponent } from './icon-lifeison';
import { newSpecPage } from '@stencil/core/testing';

describe('IconLifeisonComponent', () => {

  it('should render with the inherited class to reflect the default color', async () => {
    const page = await newSpecPage({
      components: [IconLifeisonComponent],
      html: `<se-icon-lifeison></se-icon-lifeison>`,
    });
    expect(page.root.shadowRoot.querySelector('span.inherited')).toBeTruthy();
  });

  it('should render with the standard class when specified', async () => {
    const page = await newSpecPage({
      components: [IconLifeisonComponent],
      html: `<se-icon-lifeison color="standard"></se-icon-lifeison>`,
    });
    expect(page.root.shadowRoot.querySelector('span.standard')).toBeTruthy();
  });
});
