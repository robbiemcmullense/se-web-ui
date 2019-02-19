import { newE2EPage } from '@stencil/core/testing';

describe('ContainerComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-container></se-container>');
    const element = await page.find('se-container');
    expect(element).toHaveClass('hydrated');
  });
});
