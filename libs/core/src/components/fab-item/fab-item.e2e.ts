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

  it('should have a span element with a description class', async () => {
    const description = await page.find('se-fab-item >>> span.description');
    expect(description).toBeTruthy();
  });

  it('should render with a se-icon element when the fab item has an icon property', async () => {
    element.setProperty('icon', 'action_delete_cross');
    await page.waitForChanges();
    const icon = await page.find('se-fab-item >>> se-icon');
    expect(icon).toBeTruthy();
  });

  it('emits the didClick event when the fab item is clicked', async () => {
    const eventSpy = await page.spyOnEvent('didClick');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
  });
});
