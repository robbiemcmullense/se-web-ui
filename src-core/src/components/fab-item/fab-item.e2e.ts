import { newE2EPage } from '@stencil/core/testing';

describe('FabComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-fab-item></se-fab-item-item>');
    element = await page.find('se-fab-item');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should have 2 span elements, one with a description class and one with an se-icon class', async() => {
    const description = await page.find('se-fab-item >>> span.description');
    const icon = await page.find('se-fab-item >>> span.se-icon');
    expect(description).toBeTruthy();
    expect(icon).toBeTruthy();
  });

  it('emits the didClick event when the fab item is clicked', async() => {
    const eventSpy = await page.spyOnEvent('didClick');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
  });
});