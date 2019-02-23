import { newE2EPage } from '@stencil/core/testing';

describe('sidenavItemComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-sidenav-item></se-sidenav-item>');
    const element = await page.find('se-sidenav-item');
    expect(element).toHaveClass('hydrated');
  });
});
