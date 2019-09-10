import { newE2EPage } from '@stencil/core/testing';

describe('VisualLinearComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-visual-linear percentage="50"></se-visual-linear>');
    element = await page.find('se-visual-linear');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('renders the component with a color-primary class by default', async() => {
    expect(element).toHaveClass('color-primary');
  });

  it('renders the component with a color-error class when secolor is set to error', async() => {
    element.setProperty('secolor', 'error');
    await page.waitForChanges();
    expect(element).toHaveClass('color-error');
  });

  it('should not render a color class when the secolor property is a hexadecimal value', async() => {
    element.setProperty('secolor', '#aa4311');
    await page.waitForChanges();
    expect(element).not.toHaveClass('color-primary');
  });

  it('renders svg and 2 rectangle elements', async() => {
    let svg = await page.find('se-visual-linear >>> svg');
    let rectOne = await page.find('se-visual-linear >>> rect:first-child');
    let rectTwo = await page.find('se-visual-linear >>> rect:last-child');
    expect(svg).toBeTruthy();
    expect(rectOne).toBeTruthy();
    expect(rectTwo).toBeTruthy();
  });

  it('renders with inline class as that is the default option', async() => {
    expect(element.shadowRoot.querySelector('div')).toHaveClass('inline');
  });

  it('renders without a flex class because there is a specified width', async() => {
    await page.$eval('se-visual-linear', (elm: any) => {
      elm.option = 'stacked';
    });
    await page.waitForChanges();
    expect(element.shadowRoot.querySelector('div')).toHaveClass('stacked');
  });

  it('renders the label and value when provided', async() => {
    await page.$eval('se-visual-linear', (elm: any) => {
      elm.label = 'test label';
      elm.value = '13';
    });
    await page.waitForChanges();

    let label = await page.find('se-visual-linear >>> .linear-label');
    let value = await page.find('se-visual-linear >>> .linear-value');
    expect(label).toEqualText('test label');
    expect(value).toEqualText('13');
  }); 
});
