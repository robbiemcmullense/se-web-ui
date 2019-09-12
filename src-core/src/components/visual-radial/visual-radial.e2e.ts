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
    element.setProperty('label', 'test label');
    element.setProperty('value', '13');
    await page.waitForChanges();

    let label = await page.find('se-visual-radial >>> .radial-label');
    let value = await page.find('se-visual-radial >>> .radial-value');
    expect(label).toEqualText('test label');
    expect(value).toEqualText('13');
  });

  it('renders a height and width with values of 82 when the size is small', async() => {
    element.setProperty('size', 'small');
    await page.waitForChanges();

    let svgElement = await page.find('se-visual-radial >>> .se-visual-radial');
    expect(svgElement.getAttribute('height')).toEqual('82');
    expect(svgElement.getAttribute('width')).toEqual('82');
  });

  it('renders a border color equal to the provided secolor value', async() => {
    element.setProperty('secolor', '#aaa');
    await page.waitForChanges();

    let circleElement = await page.find('se-visual-radial >>> circle:last-child');
    expect(circleElement.getAttribute('stroke')).toEqual('#aaa');
  });
});

describe('Visual Radio Screenshots', () => {
  it('tests the default version of the component, with the large size and a green progress bar', async() => {
    let page = await newE2EPage();
    await page.setContent('<se-visual-radial percentage="30" label="units" value="8"></se-visual-radial>');
    await page.compareScreenshot('green large visual radial component', {fullPage: false});
	});
	
	it('tests the component with the small size and a red colored progress bar', async() => {
    let page = await newE2EPage();
    await page.setContent('<se-visual-radial size="small" percentage="30" secolor="#ee0014" label="label"></se-visual-radial>');
    await page.compareScreenshot('red small visual radial component', {fullPage: false});
  });
});