import { newE2EPage } from '@stencil/core/testing';

 describe('IconEcostruxureComponent', () => {	
  it('renders', async() => {	
    const page = await newE2EPage();
    await page.setContent('<se-icon-ecostruxure></se-icon-ecostruxure>');	
    const element = await page.find('se-icon-ecostruxure');	
    expect(element).toHaveClass('hydrated');	
  });	
});