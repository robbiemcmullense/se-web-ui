import '../../../mock/resize-observer-mock';
import { Carousel } from './carousel';
import { newSpecPage } from '@stencil/core/testing';

describe('Carousel', () => {
  
  it('should render with `content` class by default', async () => {
    const page = await newSpecPage({
      components: [Carousel],
      html: `<se-carousel></se-carousel>`,
    });
    const component = page.root;
    await page.waitForChanges();
    expect(component.shadowRoot.querySelector('.content')).toBeTruthy();
  });
});
