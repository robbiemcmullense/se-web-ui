import { newE2EPage } from '@stencil/core/testing';

describe('SidemenuItemComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-sidemenu-item></se-sidemenu-item>');
    element = await page.find('se-sidemenu-item');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('renders with a menuitem-hidden class by default as it is not active', async () => {
    expect(element).toHaveClasses(['hydrated', 'navitem-hidden']);
  });

  it('removes the navitem-hidden class when it is set to active', async () => {
    await page.$eval('se-sidemenu-item', (elm: any) => {
      elm.active = true;
    });
    await page.waitForChanges();
    expect(element).not.toHaveClass('navitem-hidden');
  });
});