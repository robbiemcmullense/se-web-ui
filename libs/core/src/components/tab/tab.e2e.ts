import { newE2EPage } from '@stencil/core/testing';

describe('TabComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-tabbar></se-tabbar>');
  });

  it('renders', async () => {
    element = await page.find('se-tabbar');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a primary color by default', async () => {
    element = await page.find('se-tabbar > div');
    expect(element).toHaveClass('tab-primary');
  });
});

describe('NavbarComponent with Alternative Color', () => {
  it('renders with a class equal to alternative', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-tabbar color="alternative"></se-tabbar>');
    const element = await page.find('se-tabbar > div');
    expect(element).toHaveClass('tab-alternative');
  });
});

describe('Tabbar Screenshots', () => {
  it('tests the default version of the tabbar, with a fill option and primary color', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <se-tabbar>
        <nav slot="start">Left Content</nav>
        <nav>Centered Content</nav>
        <nav slot="end">Right Content</nav>
      </se-tabbar>
    `);
    await page.compareScreenshot('primary fill tabbar component', {
      fullPage: false,
    });
  });

  it('tests the tabbar with the centered option and the alternative color', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <se-tabbar option="centered" color="alternative">
        <nav slot="start">Left Content</nav>
        <nav>Centered Content</nav>
        <nav slot="end">Right Content</nav>
      </se-tabbar>
    `);
    await page.compareScreenshot('alternative centered tabbar component', {
      fullPage: false,
    });
  });
});
