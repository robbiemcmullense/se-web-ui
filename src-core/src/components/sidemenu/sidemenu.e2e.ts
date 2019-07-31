import {newE2EPage} from '@stencil/core/testing';

describe('SidemenuComponent', () => {
  let page, element;

  const renderComponent = async(items = '<se-sidemenu-item></se-sidemenu-item>') => {
    page = await newE2EPage();
    await page.setContent(`
      <se-sidemenu>
        ${items}
      </se-sidemenu>
    `);
    return page;
  };

  it('renders', async() => {
    page = await renderComponent();
    element = await page.find('se-sidemenu');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders a lifeIsOn icon', async() => {
    page = await renderComponent();
    element = await page.find('se-sidemenu >>> se-icon-lifeison');
    expect(element).toBeTruthy();
  });

  it('renders a se-link element', async() => {
    page = await renderComponent();
    element = await page.find('se-sidemenu >>> se-link');
    expect(element).toBeTruthy();
    expect(element.innerText).toEqual('www.se.com/en/partners');
  });

  it('should render as many se-list-item components as se-sidemenu-item children', async() => {
    page = await renderComponent('<se-sidemenu-item></se-sidemenu-item><se-sidemenu-item></se-sidemenu-item>');
    const listItems = await page.findAll('se-sidemenu >>> se-list-item');
    expect(listItems[0].shadowRoot.querySelector('button')).toHaveClass('selected');
    expect(listItems[1].shadowRoot.querySelector('button')).not.toHaveClass('selected');
  });

  it('should open the sidemenu when the toggle method is called', async() => {
    page = await renderComponent();
    element = await page.find('se-sidemenu');
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });
});