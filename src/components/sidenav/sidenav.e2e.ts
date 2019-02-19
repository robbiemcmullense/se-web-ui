import { newE2EPage } from '@stencil/core/testing';

describe('SidenavComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-sidenav></se-sidenav>');
    const element = await page.find('se-sidenav');
    expect(element).toHaveClass('hydrated');
  });
});
