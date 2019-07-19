import { newE2EPage } from '@stencil/core/testing';

describe('SidemenuItemComponent', () => {
  let page, hostElement, sidemenuItemElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-sidemenu-item></se-sidemenu-item>');
    hostElement = await page.find('se-sidemenu-item');
    sidemenuItemElement = await page.find('se-sidemenu-item >>> div');
  });

  it('renders', async () => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('renders with a menuitem-hidden class by default as it is not active', async () => {
    expect(sidemenuItemElement).toHaveClass('navitem-hidden');
  });

  it('removes the navitem-hidden class when it is set to active', async () => {
    await page.$eval('se-sidemenu-item', (elm: any) => {
      elm.active = true;
    });
    await page.waitForChanges();
    expect(sidemenuItemElement).not.toHaveClass('navitem-hidden');
  });
});
