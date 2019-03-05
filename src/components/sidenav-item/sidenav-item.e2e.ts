import { newE2EPage } from '@stencil/core/testing';

describe('SidenavItemComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-sidenav-item></se-sidenav-item>');
    element = await page.find('se-sidenav-item');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('renders with a navitem-hidden class by default as it is not active', async () => {
    expect(element).toHaveClasses(['hydrated', 'navitem-hidden']);
  });

  it('removes the navitem-hidden class when it is set to active', async () => {
    await page.$eval('se-sidenav-item', (elm: any) => {
      elm.active = true;
    });
    await page.waitForChanges();
    expect(element).not.toHaveClass('navitem-hidden');
  });
});
