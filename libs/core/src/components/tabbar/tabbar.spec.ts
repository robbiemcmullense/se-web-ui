import '../../../mock/resize-observer-mock';
import { TabbarComponent } from './tabbar';
import { newSpecPage } from '@stencil/core/testing';

describe('TabbarComponent', () => {
  let tabBar;

  beforeEach(() => {
    tabBar = new TabbarComponent();
  });

  it('should build', () => {
    expect(tabBar).toBeTruthy();
  });

  it('should have a primary color by default', () => {
    expect(tabBar.color).toEqual('primary');
  });

  it('should render with primary and fill classes by default', async () => {
    const page = await newSpecPage({
      components: [TabbarComponent],
      html: `<se-tabbar></se-tabbar>`,
    });
    expect(page.root.querySelector('.tab-primary')).toBeTruthy();
    expect(page.root.querySelector('.fill-space')).toBeTruthy();
  });
});
