import '../../../mock/resize-observer-mock';
import { TabComponent } from './tab';
import { newSpecPage } from '@stencil/core/testing';

describe('TabbarComponent', () => {

  it('should render with primary and fill classes by default', async () => {
    const page = await newSpecPage({
      components: [TabComponent],
      html: `<se-tab></se-tab>`,
    });
    expect(page.root.querySelector('.tab-primary')).toBeTruthy();
    expect(page.root.querySelector('.fill-space')).toBeTruthy();
  });
});
