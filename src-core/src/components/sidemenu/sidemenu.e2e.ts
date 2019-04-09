import { newE2EPage } from '@stencil/core/testing';

describe('SidemenuComponent', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders', async() => {
    await page.setContent('<se-sidemenu></se-sidemenu>');
    const element = await page.find('se-sidemenu');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should open the sidemenu when the toggle method is called', async() => {
    await page.setContent('<se-sidemenu></se-sidemenu>');
    const element = await page.find('se-sidemenu');
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });
});
