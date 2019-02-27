import { newE2EPage } from '@stencil/core/testing';

describe('ContainerComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-container></se-container>');
    element = await page.find('se-container');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('renders the "fill-content", "relative", and "hydrated" classes by default', async() => {		
    expect(element).toHaveClasses(['fill-content', 'relative', 'hydrated']);	
  });

  it('renders the "centered" and "absolute-content" classes when these properties are specified in the DOM', async() => {	
    await page.$eval('se-container', (elm: any) => {
      elm.mode = 'centered';
      elm.position = 'absolute';
    });
    await page.waitForChanges();	
    expect(element).toHaveClasses(['centered-content', 'absolute']);
  });
});
