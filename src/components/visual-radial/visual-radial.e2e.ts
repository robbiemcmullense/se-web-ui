import { newE2EPage } from '@stencil/core/testing';

describe('VisualRadialComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-visual-radial></se-visual-radial>');
    element = await page.find('se-visual-radial');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders svg and 2 circle elements', async() => {
    let svg = await page.find('se-visual-radial >>> svg');
    let circleOne = await page.find('se-visual-radial >>> circle:first-child');
    let circleTwo = await page.find('se-visual-radial >>> circle:last-child');
    expect(svg).toBeTruthy();
    expect(circleOne).toBeTruthy();
    expect(circleTwo).toBeTruthy();
  });

  it('renders the label and value when provided', async() => {
    await page.$eval('se-visual-radial', (elm: any) => {
      elm.label = 'test label';
      elm.value = '13';
    });
    await page.waitForChanges();

    let label = await page.find('se-visual-radial >>> .radial-label');
    let value = await page.find('se-visual-radial >>> .radial-value');
    expect(label).toEqualText('test label');
    expect(value).toEqualText('13');
  });
});