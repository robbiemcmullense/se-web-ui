import { newE2EPage } from '@stencil/core/testing';

describe('LabelComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-label value="Label Value"></se-label>');
  });

  it('renders', async() => {
    element = await page.find('se-label');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the label inner text equal to the value property', async() => {
    element = await page.find('se-label >>> label');
    let spanElement = await page.find('se-label >>> span');
    expect(element.innerText).toEqual('Label Value');
    expect(spanElement).toBeNull();
  });

  it('renders with an asterisk when required is set to true', async() => {
    await page.$eval('se-label', (elm: any) => {
      elm.required = true;
    });
    await page.waitForChanges();
    element = await page.find('se-label >>> span');
    expect(element).not.toBeNull();
    expect(element.innerHTML).toEqual('*');
  });
});
