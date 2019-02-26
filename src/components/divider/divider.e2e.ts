import { newE2EPage } from '@stencil/core/testing';

 describe('DividerComponent', () => {	
  it('renders', async () => {	
    const page = await newE2EPage();
    await page.setContent('<se-divider></se-divider>');

    const element = await page.find('se-divider');	
    expect(element).toHaveClass('hydrated');	
  });

  it('renders a class based on the provided mode and color', async () => {	
    const page = await newE2EPage();
    await page.setContent('<se-divider mode="horizontal" color="light"></se-divider>');
    
    const element = await page.find('se-divider');	
    expect(element).toHaveClasses(['horizontal', 'light']);	
  });
});