import {newE2EPage} from '@stencil/core/testing';

describe('SidemenuComponent', () => {
  let page, element;

  const renderComponent = async (items = '<se-sidemenu-item></se-sidemenu-item>') => {
    page = await newE2EPage();
    await page.setContent(`
      <se-sidemenu>
        ${items}
      </se-sidemenu>
    `);
    return page;
  };

  it('renders', async () => {
    page = await renderComponent();
    element = await page.find('se-sidemenu');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render as many se-list-item components as se-sidemenu-item children', async () => {
    page = await renderComponent('<se-sidemenu-item></se-sidemenu-item><se-sidemenu-item></se-sidemenu-item>');
    const listItems = await page.findAll('se-sidemenu >>> se-list-item');
    expect(listItems.length).toBe(2);
  });

  it('should delegate the se-sidemenu-item "item" property to se-list-item', async ()=>{
    // can't actually test non-standard attributes
  });

  it('should add "selected" class to first se-list-item', async () => {
    page = await renderComponent(`
      <se-sidemenu-item></se-sidemenu-item>
      <se-sidemenu-item></se-sidemenu-item>
    `);
    await page.waitForChanges();
    const listItems = await page.findAll('se-sidemenu >>> se-list-item >>> button');
    expect(listItems[0]).toHaveClass('selected');
    expect(listItems[1]).not.toHaveClass('selected');
  });

  it('should open the sidemenu when the toggle method is called', async () => {
    page = await renderComponent();
    element = await page.find('se-sidemenu');
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });

  // it('should remove an item from the list after sidemenu is removed', async () => {
  //   page = await renderComponent(`
  //     <se-sidemenu-item></se-sidemenu-item>
  //     <se-sidemenu-item id="to-remove"></se-sidemenu-item>
  //     <se-sidemenu-item></se-sidemenu-item>
  //   `);
  //   await page.waitForChanges();
  //   var element = page.document.getElementById("to-remove");
  //   page.document.parentNode.removeChild(element);
  //   await page.waitForChanges();
  //   const listItems = await page.findAll('se-sidemenu >>> se-list-item');
  //   expect(listItems.length).toBe(2);
  // });

});
