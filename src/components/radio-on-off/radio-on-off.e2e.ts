import { newE2EPage } from '@stencil/core/testing';

describe('RadioOnOffComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-radio-on-off></se-radio-on-off>');
    const element = await page.find('se-radio-on-off');
    expect(element).toHaveClass('hydrated');
  });
});
