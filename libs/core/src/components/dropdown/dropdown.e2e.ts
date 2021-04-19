import { newE2EPage } from '@stencil/core/testing';

describe('DropdownComponent', () => {
  let page, hostElement, dropdownElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-dropdown></se-dropdown>');
    hostElement = await page.find('se-dropdown');
    dropdownElement = await page.find('se-dropdown >>> .content');
  });

  it('renders', async () => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('adds a "show" class to a div hostElement with class dropdown-content when open is set to true', async () => {
    await hostElement.callMethod('open');
    await page.waitForChanges();
    const dropdownContent = await page.find('se-dropdown >>> .content');
    expect(dropdownContent).toHaveClasses(['content', 'show']);
  });

  it('removes the "show" class to the div hostElement with class dropdown-content when open is set to false', async () => {
    await hostElement.callMethod('close');
    const dropdownContent = await page.find('se-dropdown >>> .content');
    expect(dropdownContent).not.toHaveClass('show');
  });
});

describe('Dropdown Screenshots', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('should render left-aligned by default', async () => {
    await page.setContent(`
      <se-dropdown>
        <se-list option="dropdown">
          <se-list-item item="First"></se-list-item>
          <se-list-item item="Second"></se-list-item>
          <se-list-item item="Third"></se-list-item>
        </se-list>
      </se-dropdown>
    `);
    element = await page.find('se-dropdown');
    await element.callMethod('open');
    await page.compareScreenshot('Left-Aligned Dropdown', { fullPage: false });
  });
});
