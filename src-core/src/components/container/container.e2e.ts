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

  it('renders the "fill-content", "flex-display", "relative", and "row" classes based on default properties', async() => {		
    expect(element).toHaveClasses(['fill-content', 'flex-display', 'relative', 'hydrated', 'row']);	
  });

  it('renders the "centered" and "absolute-content" classes when the component has these properties for option and position', async() => {	
    await page.$eval('se-container', (elm: any) => {
      elm.option = 'centered';
      elm.position = 'absolute';
    });
    await page.waitForChanges();	
    expect(element).toHaveClasses(['centered-content', 'absolute']);
  });

  it('renders the "column" and "alternative" classes when the component has these properties for direction and color', async() => {	
    await page.$eval('se-container', (elm: any) => {
      elm.direction = 'column';
      elm.color = 'alternative';
    });
    await page.waitForChanges();	
    expect(element).toHaveClasses(['alternative', 'column']);
  });
});
