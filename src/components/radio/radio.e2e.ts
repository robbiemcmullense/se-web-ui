import { newE2EPage } from '@stencil/core/testing';

describe('RadioComponent', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio color="primary"><se-button id="first" value="first">Primary</se-button><se-button id="second" value="second">Secondary</se-button></se-radio>');
    await page.waitForChanges();
  });

  it('renders', async() => {
    const renderedHTML = '<slot></slot>'
    const element = await page.find('se-radio');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });

  it('renders with two se-button components each with a grouped class', async() => {
    const firstButtonElement = await page.find('se-radio se-button#first');
    const lastButtonElement = await page.find('se-radio se-button#second'); 

    expect(firstButtonElement).toHaveClass('grouped');
    expect(firstButtonElement.innerText).toEqual('Primary');
    expect(lastButtonElement).toHaveClass('grouped');
    expect(lastButtonElement.innerText).toEqual('Secondary');
  });

  it('renders with two se-button components each with a primary color and the second button disabled', async() => {
    await page.$eval('se-button#second', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    const firstButtonElement = await page.find('se-radio se-button#first >>> button');
    const secondButtonElement = await page.find('se-radio se-button#second >>> button');

    expect(firstButtonElement).toHaveClasses(['flat', 'primary'])
    expect(secondButtonElement.getProperty('disabled')).toBeTruthy();
  });

  it('can select multiple buttons by default because its default option is checkbox', async() => {
    const firstButtonElement = await page.find('se-radio se-button#first >>> button');
    const secondButtonElement = await page.find('se-radio se-button#second >>> button');

    await firstButtonElement.click();
    expect(firstButtonElement).toHaveClass('selected');

    await secondButtonElement.click();
    expect(secondButtonElement).toHaveClass('selected');
  });


  it('selects only one button at a time when the option is set to radio', async() => {
    await page.$eval('se-radio', (elm: any) => {
      elm.option = 'radio';
    });
    await page.waitForChanges();
    const firstButtonElement = await page.find('se-radio se-button#first >>> button');
    const secondButtonElement = await page.find('se-radio se-button#second >>> button');

    await firstButtonElement.click();
    expect(firstButtonElement).toHaveClass('selected');
    expect(secondButtonElement).toHaveClass('false');

    await secondButtonElement.click();
    expect(firstButtonElement).toHaveClass('false');
    expect(secondButtonElement).toHaveClass('selected');
  });
});