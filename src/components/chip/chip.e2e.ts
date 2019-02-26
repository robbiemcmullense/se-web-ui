import { newE2EPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-chip></se-chip>');

    const element = await page.find('se-chip');
    expect(element).toHaveClass('hydrated');
  });

  it('should have a class equal to the color value', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-chip color="accent"></se-chip>');

    const element = await page.find('se-chip');
    expect(element).toHaveClass('accent');
  });

  it('should render HTML with the passed value', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-chip value="My Value"></se-chip>');

    const element = await page.find('se-chip >>> div.value');
    expect(element.innerText).toEqual('My Value');
  });
});
