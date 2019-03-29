import { newE2EPage } from '@stencil/core/testing';

 describe('IconComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-icon></se-icon>');
    element = await page.find('se-icon');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');	
  });

  it('renders a class based on the provided size and color', async() => {	
    await page.$eval('se-icon', (elm: any) => {
      elm.size = 'small';
      elm.color = 'warn';
    });
    await page.waitForChanges();	
    expect(element).toHaveClasses(['small', 'warn']);	
  });
});