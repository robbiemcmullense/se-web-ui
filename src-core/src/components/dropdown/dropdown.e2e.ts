import { newE2EPage } from '@stencil/core/testing';

 describe('DropdownComponent', () => {
  let page, hostElement, dropdownElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-dropdown></se-dropdown>');
    hostElement = await page.find('se-dropdown');
    dropdownElement = await page.find('se-dropdown >>> .se-dropdown');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('has the "left" class because it is left-aligned by default', async() => {
    expect(dropdownElement).toHaveClass('left');
  });

  it('adds a "show" class to a div hostElement with class dropdown-content when open is set to true', async() => {
    await hostElement.callMethod('open');
    await page.waitForChanges();
    const dropdownContent = await page.find('se-dropdown >>> div.dropdown-content');
    expect(dropdownContent).toHaveClasses(['dropdown-content', 'show']);
  });

  it('removes the "show" class to the div hostElement with class dropdown-content when open is set to false', async() => {
    await hostElement.callMethod('close');
    const dropdownContent = await page.find('se-dropdown >>> div.dropdown-content');
    expect(dropdownContent).not.toHaveClass('show');
  });
});