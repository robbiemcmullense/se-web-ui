import { newE2EPage } from '@stencil/core/testing';

describe('NavbarComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-navbar></se-navbar>');
    
  });

  it('renders', async() => {
    element = await page.find('se-navbar');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a primary color by default', async() => {
    element = await page.find('se-navbar nav');
    expect(element).toHaveClass('primary');
  });
});

describe('NavbarComponent with Alternative Color', () => {
  it('renders with a class equal to alternative', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-navbar color="alternative"></se-navbar>');
    const element = await page.find('se-navbar nav');
    expect(element).toHaveClass('alternative');
  });
});
