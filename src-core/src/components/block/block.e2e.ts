import { newE2EPage } from '@stencil/core/testing';

describe('BlockComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-block></se-block>');
    element = await page.find('se-block');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should have the basic class since that is the default option', async() => {
    expect(element).toHaveClass('basic');
  });

  it('renders with flex class due to no specified width, along with the default alternative color class', async() => {
    expect(element).toHaveClasses(['alternative', 'flex', 'hydrated']);
  });

  it('renders a standard class when the color property is set to standard', async() => {
    await page.$eval('se-block', (elm: any) => {
      elm.color = 'standard';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('standard');
  });

  it('renders a loading element when the loading property is true', async() => {
    await page.$eval('se-block', (elm: any) => {
      elm.loading = true;
    });
    await page.waitForChanges();

    const loader = await page.find('se-block >>> se-loading')
    expect(loader).toBeTruthy();
  });
});
