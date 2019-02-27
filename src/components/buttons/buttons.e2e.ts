import { newE2EPage } from '@stencil/core/testing';

describe('ButtonsComponent', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders', async() => {
    const renderedHTML = '<slot></slot>'
    await page.setContent('<se-buttons></se-buttons>');
    const element = await page.find('se-buttons');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });

  it('renders with two se-button components each with a grouped class', async() => {
    await page.setContent('<se-buttons><se-button id="first">Primary</se-button><se-button id="second">Secondary</se-button></se-buttons>');
    const firstButtonElement = await page.find('se-buttons se-button#first');
    const lastButtonElement = await page.find('se-buttons se-button#second');
    
    expect(firstButtonElement).toHaveClass('grouped');
    expect(firstButtonElement.innerText).toEqual('Primary');
    expect(lastButtonElement).toHaveClass('grouped');
    expect(lastButtonElement.innerText).toEqual('Secondary');
  });

  it('renders with two se-button components each with a primary color and the second button disabled', async() => {
    const firstRenderedHTML = '<button color="primary" data-mode="checkbox">'
      + '<slot></slot></button>';
    const secondRenderedHTML = '<button color="primary" data-mode="checkbox" disabled>'
      + '<slot></slot></button>';
    await page.setContent('<se-buttons color="primary"><se-button id="first">Primary</se-button><se-button id="second" disabled="true">Disabled</se-button></se-buttons>');
    const firstButtonElement = await page.find('se-buttons se-button#first');
    const secondButtonElement = await page.find('se-buttons se-button#second');

    expect(firstButtonElement.shadowRoot).toEqualHtml(firstRenderedHTML);
    expect(secondButtonElement.shadowRoot).toEqualHtml(secondRenderedHTML);
  });

  it('can select multiple buttons by default because its default mode is checkbox', async() => {
    await page.setContent('<se-buttons><se-button id="first">Primary</se-button><se-button id="second">Secondary</se-button></se-buttons>');
    const firstButtonElement = await page.find('se-buttons se-button#first');
    const secondButtonElement = await page.find('se-buttons se-button#second');
    firstButtonElement.click();
    await page.waitForChanges();
    expect(firstButtonElement).toHaveClass('active');

    secondButtonElement.click();
    await page.waitForChanges();
    expect(secondButtonElement).toHaveClass('active');
  });

  it('can only select one button at a time because its mode is set to radio', async() => {
    await page.setContent('<se-buttons mode="radio"><se-button id="first">Primary</se-button><se-button id="second">Secondary</se-button></se-buttons>');
    const firstButtonElement = await page.find('se-buttons se-button#first');
    const secondButtonElement = await page.find('se-buttons se-button#second');
    firstButtonElement.click();
    await page.waitForChanges();
    expect(firstButtonElement).toHaveClass('active');

    secondButtonElement.click();
    await page.waitForChanges();
    expect(secondButtonElement).toHaveClass('active');
    expect(firstButtonElement).not.toHaveClass('active');
  });
});
