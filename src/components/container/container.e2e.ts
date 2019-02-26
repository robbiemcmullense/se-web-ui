import { newE2EPage } from '@stencil/core/testing';

describe('ContainerComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-container></se-container>');

    const element = await page.find('se-container');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the "fill-content" and "relative" classes by default', async () => {	
    const page = await newE2EPage();
    await page.setContent('<se-container></se-container>');
    
    const element = await page.find('se-container');	
    expect(element).toHaveClasses(['fill-content', 'relative']);	
  });

  it('renders the "centered" and "absolute-content" classes when these properties are specified in the DOM', async () => {	
    const page = await newE2EPage();
    await page.setContent('<se-container mode="centered" position="absolute"></se-container>');
    
    const element = await page.find('se-container');	
    expect(element).toHaveClasses(['centered-content', 'absolute']);
  });
});
