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

  it('should render with `content` and `arrow` classes by default', async () => {
    const page = await newSpecPage({
      components: [Carousel],
      html: `<se-carousel></se-carousel>`,
    });
    const spyDisplayArrow = spyOn(carousel, 'displayArrow');
    page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.content')).toBeTruthy();
    carousel.displayArrow();
    expect(spyDisplayArrow).toHaveBeenCalledTimes(1);
    expect(page.root.shadowRoot.querySelector('.arrow')).toBeTruthy();
  });
});
