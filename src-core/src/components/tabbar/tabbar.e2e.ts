import { newE2EPage } from '@stencil/core/testing';

describe('TabbarComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-tabbar></se-tabbar>');
    
  });

  it('renders', async() => {
    element = await page.find('se-tabbar');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a primary color by default', async() => {
    element = await page.find('se-tabbar > div');
    expect(element).toHaveClass('tab-primary');
  });
});

describe('NavbarComponent with Alternative Color', () => {
  it('renders with a class equal to alternative', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-tabbar color="alternative"></se-tabbar>');
    const element = await page.find('se-tabbar > div');
    expect(element).toHaveClass('tab-alternative');
  });
});
