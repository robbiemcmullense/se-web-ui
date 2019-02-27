import { newE2EPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-chip></se-chip>');
    element = await page.find('se-chip');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should have a class equal to the color value', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.color = 'accent';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('accent');
  });

  it('should render HTML with the passed value', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.value = 'My Value';
    });
    const element = await page.find('se-chip >>> div.value');
    expect(element.innerText).toEqual('My Value');
  });
});
