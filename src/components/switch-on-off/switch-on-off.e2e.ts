import { newE2EPage } from '@stencil/core/testing';

describe('SwitchOnOffComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-navbar></se-navbar>');
    const element = await page.find('se-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
