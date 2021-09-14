import '../../../mock/resize-observer-mock';
import { TabItemComponent } from './tab-item';
import { newSpecPage } from '@stencil/core/testing';

describe('TabbarComponent', () => {

  it('should render with primary and fill classes by default', async () => {
    const page = await newSpecPage({
      components: [TabItemComponent],
      html: `<se-tabbar></se-tabbar>`,
    });
    expect(page.root.querySelector('.tab-primary')).toBeTruthy();
    expect(page.root.querySelector('.fill-space')).toBeTruthy();
  });
});
