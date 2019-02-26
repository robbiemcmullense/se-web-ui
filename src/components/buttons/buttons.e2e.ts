import { newE2EPage } from '@stencil/core/testing';

describe('ButtonsComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    const renderedHTML = '<slot></slot>'
    await page.setContent('<se-buttons></se-buttons>');

    const element = await page.find('se-buttons');
    expect(element).toHaveClass('hydrated');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });

  it('renders with two se-button components each with a grouped class', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-buttons><se-button color="primary">Primary</se-button><se-button mode="raised">Raised</se-button></se-buttons>');
    
    const firstButtonElement = await page.find('se-buttons se-button:first-child');
    const lastButtonElement = await page.find('se-buttons se-button:last-child');
    await page.waitForChanges();
    
    expect(firstButtonElement).toHaveClass('grouped');
    expect(lastButtonElement).toHaveClass('grouped');
  });
});
