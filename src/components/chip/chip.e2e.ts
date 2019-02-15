import { newE2EPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-chip></se-chip>');
    const element = await page.find('se-chip');
    expect(element).toHaveClass('hydrated');
  });
});
