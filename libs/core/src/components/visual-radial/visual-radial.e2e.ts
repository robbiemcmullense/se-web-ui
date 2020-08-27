import { newE2EPage } from '@stencil/core/testing';

describe('VisualRadialComponent', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-visual-radial></se-visual-radial>');
    element = await page.find('se-visual-radial');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('renders the component with a color-primary class by default', async () => {
    expect(element).toHaveClass('color-primary');
  });

  it('renders the component with a color-error class when secolor is set to error', async () => {
    element.setProperty('secolor', 'error');
    await page.waitForChanges();
    expect(element).toHaveClass('color-error');
  });

  it('should not render a color class when the secolor property is a hexadecimal value', async () => {
    element.setProperty('secolor', '#aa4311');
    await page.waitForChanges();
    expect(element).not.toHaveClass('color-primary');
  });

  it('renders with the large class name by default', async () => {
    expect(element.shadowRoot.querySelector('div')).toHaveClass('large');
  });

  it('renders svg and 2 circle elements', async () => {
    const svg = await page.find('se-visual-radial >>> svg');
    const circleOne = await page.find(
      'se-visual-radial >>> circle:first-child'
    );
    const circleTwo = await page.find('se-visual-radial >>> circle:last-child');
    expect(svg).toBeTruthy();
    expect(circleOne).toBeTruthy();
    expect(circleTwo).toBeTruthy();
  });

  it('renders the label and value when provided', async () => {
    element.setProperty('label', 'test label');
    element.setProperty('value', '13');
    await page.waitForChanges();

    const label = await page.find('se-visual-radial >>> .label');
    const value = await page.find('se-visual-radial >>> .value');
    expect(label).toEqualText('test label');
    expect(value).toEqualText('13');
  });

  it('renders a height and width with values of 82 when the size is small', async () => {
    element.setProperty('size', 'small');
    await page.waitForChanges();

    const svgElement = await page.find('se-visual-radial >>> .radial');
    expect(svgElement.getAttribute('height')).toEqual('82');
    expect(svgElement.getAttribute('width')).toEqual('82');
  });

  it('renders a border color equal to the provided secolor value', async () => {
    element.setProperty('secolor', '#aaa');
    await page.waitForChanges();
    const circleElement = await page.find(
      'se-visual-radial >>> circle:last-child'
    );
    expect(circleElement.getAttribute('stroke')).toEqual('#aaa');
  });

  it('renders a color equal to the provided secolor, adding var and se prefix', async () => {
    element.setProperty('secolor', 'error');
    await page.waitForChanges();
    const circleElement = await page.find(
      'se-visual-radial >>> circle:last-child'
    );
    expect(circleElement.getAttribute('stroke')).toEqual('currentColor');
  });
});

describe('Visual Radio Screenshots', () => {
  it('tests the default version of the component, with the large size and a green progress bar', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<se-visual-radial percentage="30" label="units" value="8"></se-visual-radial>'
    );
    await page.compareScreenshot('green large visual radial component', {
      fullPage: false,
    });
  });

  it('tests the component with the small size and a red colored progress bar', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<se-visual-radial size="small" percentage="30" secolor="#ee0014" label="label"></se-visual-radial>'
    );
    await page.compareScreenshot('red small visual radial component', {
      fullPage: false,
    });
  });
});
