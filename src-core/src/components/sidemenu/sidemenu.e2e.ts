import { newE2EPage } from '@stencil/core/testing';

describe('SidemenuComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-sidemenu><se-sidemenu-item></se-sidemenu-item></se-sidemenu>');
    element = await page.find('se-sidemenu');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should open the sidemenu when the toggle method is called', async() => {
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });
});
