import { newE2EPage } from '@stencil/core/testing';

describe('ListItemComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-list option="nav"><se-list-item></se-list-item></se-list>'
    );
    element = await page.find('se-list-item');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render a title and description when provided', async () => {
    element.setProperty('item', 'My List Item');
    element.setProperty('description', 'sample list item');
    await page.waitForChanges();

    const titleElm = await page.find('se-list-item >>> .content div');
    const description = await page.find('se-list-item >>> .content small');
    expect(titleElm.innerText).toEqual('My List Item');
    expect(description.innerText).toEqual('sample list item');
  });

  it('should render an se-icon element when the option is set to nav', async () => {
    await element.callMethod('setOption', 'nav');
    await page.waitForChanges();

    const iconElm = await page.find('se-list-item >>> se-icon');
    expect(iconElm).toBeTruthy();
  });

  it('should render the icon equal to the icon property when provided', async () => {
    element.setProperty('icon', 'my test icon');
    await page.waitForChanges();

    const iconElm = await page.find('se-list-item >>> .icon');
    expect(iconElm).toBeTruthy();
    expect(iconElm.innerText).toEqual('my test icon');
  });

  it('should add a selected class to the button element when the selected property is true', async () => {
    element.setProperty('selected', true);
    await page.waitForChanges();
    const buttonElm = await page.find('se-list-item >>> button');
    expect(buttonElm).toHaveClass('selected');
  });
});

describe('List Item with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-list-item id="my-id"></se-list-item>');

    const element = await page.find('se-list-item');
    expect(element.shadowRoot.querySelector('button')).toHaveAttribute('id');
    expect(
      element.shadowRoot.querySelector('button').getAttribute('id')
    ).toEqual('wc-my-id');
  });
});
