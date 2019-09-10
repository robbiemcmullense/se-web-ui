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

  it('renders with the large class name by default', async() => {
    expect(element.shadowRoot.querySelector('div')).toHaveClass('large');
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

  it('renders a height and width with values of 82 when the size is small', async() => {
    await page.$eval('se-visual-radial', (elm: any) => {
      elm.size = 'small';
    });
    await page.waitForChanges();

    let svgElement = await page.find('se-visual-radial >>> .se-visual-radial');
    expect(svgElement.getAttribute('height')).toEqual('82');
    expect(svgElement.getAttribute('width')).toEqual('82');
  });

  it('renders a color equal to the provided secolor hex value', async() => {
    await page.$eval('se-visual-radial', (elm: any) => {
      elm.secolor = '#aaa';
    });
    await page.waitForChanges();

    let circleElement = await page.find('se-visual-radial >>> circle:last-child');
    expect(circleElement.getAttribute('stroke')).toEqual('#aaa');
  });

  it('renders a color equal to the provided secolor, adding var and se prefix', async() => {
    await page.$eval('se-visual-radial', (elm: any) => {
      elm.secolor = 'error';
    });
    await page.waitForChanges();

    let circleElement = await page.find('se-visual-radial >>> circle:last-child');
    expect(circleElement.getAttribute('stroke')).toEqual('currentColor');
  });
});