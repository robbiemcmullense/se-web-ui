import { newE2EPage } from '@stencil/core/testing';

 describe('DividerComponent', () => {
  let page, hostElement, dividerElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-divider></se-divider>');
    hostElement = await page.find('se-divider');
    dividerElement = await page.find('se-divider >>> .se-divider');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');	
  });

  it('should render horizontal and standard classes on the divider div element to reflect the default option and color', async() => {
    expect(dividerElement).toHaveClasses(['horizontal', 'standard']);
  });

  it('should change the classes to vertical and alternative when those properties are set', async() => {	
    await page.$eval('se-divider', (elm: any) => {
      elm.option = 'vertical';
      elm.color = 'alternative';
    });
    await page.waitForChanges();	
    expect(dividerElement).toHaveClasses(['vertical', 'alternative']);	
  });
});