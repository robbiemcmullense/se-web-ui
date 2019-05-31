import { newE2EPage } from '@stencil/core/testing';

 describe('IconEcostruxureComponent', () => {	
  it('renders with a small class', async() => {	
    const page = await newE2EPage();
    await page.setContent('<se-icon-ecostruxure></se-icon-ecostruxure>');	
    const element = await page.find('se-icon-ecostruxure >>> div');	
    expect(element).toHaveClass('small');	
  });	
});