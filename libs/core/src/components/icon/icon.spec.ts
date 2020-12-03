import { IconComponent } from './icon';
import { newSpecPage } from '@stencil/core/testing';

describe('se-icon', () => {
  let icon;

  beforeEach(() => {
    icon = new IconComponent();
  });

  it('should build', () => {
    expect(icon).toBeTruthy();
  });

  it('should render, with an wrapper class', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<se-icon></se-icon>`,
    });
    expect(page.root.shadowRoot.querySelector('.wrapper')).toBeTruthy();
  });
});
