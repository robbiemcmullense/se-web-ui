import { newE2EPage } from '@stencil/core/testing';

describe('LabelComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-label></se-label>');

    const element = await page.find('se-label');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the label inner text equal to the value property', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-label value="Label Value"></se-label>');
    
    const element = await page.find('se-label >>> label');
    const spanElement = await page.find('se-label >>> span');
    expect(element.innerText).toEqual('Label Value');
    expect(spanElement).toBeNull();
  });

  it('renders with an asterisk when required is set to true', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-label value="Label Value" required="true"></se-label>');
    
    const element = await page.find('se-label >>> span');
    expect(element).not.toBeNull();
    expect(element.innerHTML).toEqual('*');
  });
});
