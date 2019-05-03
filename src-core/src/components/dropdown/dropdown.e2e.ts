import { newE2EPage } from '@stencil/core/testing';

 describe('DropdownComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-dropdown></se-dropdown>');
    element = await page.find('se-dropdown');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('has the "left" class because it is left-aligned by default', async() => {
    expect(element).toHaveClasses(['hydrated', 'left']);
  });

  it('adds a "show" class to a div element with class dropdown-content when open is set to true', async() => {
    await element.callMethod('open');
    await page.waitForChanges();
    const dropdownContent = await page.find('se-dropdown >>> div.dropdown-content');
    expect(dropdownContent).toHaveClasses(['dropdown-content', 'show']);
  });

  it('removes the "show" class to the div element with class dropdown-content when open is set to false', async() => {
    await element.callMethod('close');
    const dropdownContent = await page.find('se-dropdown >>> div.dropdown-content');
    expect(dropdownContent).not.toHaveClass('show');
  });
});