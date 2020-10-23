import { newE2EPage } from '@stencil/core/testing';

describe('ListGroupComponent', () => {
  const renderComponent = async (attributes = '') => {
    const result = await newE2EPage();
    await result.setContent(`<se-list-group ${attributes}></se-list-group>`);
    return result;
  };

  it('renders', async () => {
    const page = await renderComponent();
    const element = await page.find('se-list-group');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders an icon element when the option is set to nav', async () => {
    const page = await renderComponent();
    const element = await page.find('se-list-group');
    element.setProperty('icon', 'my group test icon');
    await page.waitForChanges();
    const iconElm = await page.find('se-list-group >>> se-icon');
    expect(iconElm).toBeTruthy();
  });

  it('should add a selected class to the button element when the selected property is true', async () => {
    const page = await renderComponent();
    const element = await page.find('se-list-group');
    element.setProperty('selected', true);
    await page.waitForChanges();

    const itemElem = await page.find('se-list-group >>> se-list-item');
    const value = await itemElem.getProperty('selected');
    expect(value).toBe(true);
  });
});

describe('List Group with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-list-group id="my-id"></se-list-group>');

    const element = await page.find('se-list-group');
    expect(element.shadowRoot.querySelector('se-list-item')).toHaveAttribute(
      'id'
    );
    expect(
      element.shadowRoot.querySelector('se-list-item').getAttribute('id')
    ).toEqual('group-my-id');
  });
});

describe('List Group with Child List Items', () => {
  it('emits an event with the group item name and the selected child item name', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<se-list-group item="Group Title"><se-list-item item="One"></se-list-item><se-list-item item="Two" selected="true"></se-list-item></se-list-group>'
    );
    await page.waitForChanges();
    const eventSpy = await page.spyOnEvent('didGroupClick');
    const element = await page.find(
      'se-list-group >>>  se-list-item >>> button'
    );
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
  });
});
