import { newE2EPage } from '@stencil/core/testing';

describe('accessibility toggle', () => {
  let page, hostElement, toggleElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-accessibility-toggle></se-accessibility-toggle>');
    hostElement = await page.find('se-accessibility-toggle');
    toggleElement = await page.find('se-accessibility-toggle >>> button');
  });

  it('renders', async () => {
    expect(toggleElement).toBeTruthy();
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });
});
