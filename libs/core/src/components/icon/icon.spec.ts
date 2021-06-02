import { IconComponent } from './icon';
import { newSpecPage } from '@stencil/core/testing';

describe('se-icon', () => {


  it('should render, with an wrapper class', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<se-icon></se-icon>`,
    });
    expect(page.root.shadowRoot.querySelector('.wrapper')).toBeTruthy();
  });
});
