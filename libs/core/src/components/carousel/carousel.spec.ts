import '../../../mock/resize-observer-mock';
import { Carousel } from './carousel';
import { newSpecPage } from '@stencil/core/testing';

describe('Carousel', () => {
  let carousel;

  beforeEach(() => {
    carousel = new Carousel();
  });

  it('should create a carousel component', () => {
    expect(carousel).toBeTruthy();
  });

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
