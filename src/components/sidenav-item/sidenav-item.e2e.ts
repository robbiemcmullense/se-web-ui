import { newE2EPage } from '@stencil/core/testing';

describe('SidenavItemComponent', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    await page.setContent('<se-sidenav-item></se-sidenav-item>');
    const element = await page.find('se-sidenav-item');
    expect(element).toBeTruthy();
  });

  it('renders with a navitem-hidden class by default as it is not active', async () => {
    await page.setContent('<se-sidenav-item></se-sidenav-item>');
    const element = await page.find('se-sidenav-item');
    expect(element).toHaveClasses(['hydrated', 'navitem-hidden']);
  });

  it('removes the navitem-hidden class when it is set to active', async () => {
    await page.setContent('<se-sidenav-item></se-sidenav-item>');
    const element = await page.find('se-sidenav-item');
    await element.callMethod('setActive', true);
    await page.waitForChanges();
    expect(element).not.toHaveClass('navitem-hidden');
  });
});
