import { newE2EPage } from '@stencil/core/testing';

 describe('IconComponent', () => {	
  it('renders', async () => {	
    const page = await newE2EPage();
    await page.setContent('<se-icon></se-icon>');

    const element = await page.find('se-icon');	
    expect(element).toHaveClass('hydrated');	
  });

  it('renders a class based on the provided size and color', async () => {	
    const page = await newE2EPage();
    await page.setContent('<se-icon size="small" color="warn"></se-icon>');
    
    const element = await page.find('se-icon');	
    expect(element).toHaveClasses(['small', 'warn']);	
  });
});