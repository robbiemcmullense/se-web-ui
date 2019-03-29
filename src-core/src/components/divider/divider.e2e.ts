import { newE2EPage } from '@stencil/core/testing';

 describe('DividerComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-divider></se-divider>');
    element = await page.find('se-divider');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');	
  });

  it('renders a class based on the provided mode and color', async() => {	
    await page.$eval('se-divider', (elm: any) => {
      elm.option = 'horizontal';
      elm.color = 'light';
    });
    await page.waitForChanges();	
    expect(element).toHaveClasses(['horizontal', 'light']);	
  });
});