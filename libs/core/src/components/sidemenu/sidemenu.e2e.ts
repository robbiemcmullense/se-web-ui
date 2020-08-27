import { newE2EPage } from '@stencil/core/testing';

describe('SidemenuComponent', () => {
  let page, element;

  const renderComponent = async (
    items = '<se-sidemenu-item></se-sidemenu-item>'
  ) => {
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

  it('renders a lifeIsOn icon', async () => {
    page = await renderComponent();
    element = await page.find('se-sidemenu >>> se-icon-lifeison');
    expect(element).toBeTruthy();
  });
  it('renders a default link element as www.se.com', async () => {
    page = await renderComponent();
    element = await page.find('se-sidemenu >>> se-link');
    expect(element).toBeTruthy();
    expect(element.innerText).toEqual('www.se.com');
  });

  it('renders www.partner.com when link is changed', async () => {
    page = await renderComponent();
    const headerCmp = await page.find('se-sidemenu');
    headerCmp.setProperty('link', 'www.partner.com');
    await page.waitForChanges();
    element = await page.find('se-sidemenu >>> se-link');
    expect(element).toBeTruthy();
    expect(element.innerText).toEqual('www.partner.com');
  });

  it('renders no link block if link is null', async () => {
    page = await renderComponent();
    const headerCmp = await page.find('se-sidemenu');
    headerCmp.setProperty('link', '');
    await page.waitForChanges();
    element = await page.find('se-sidemenu >>> se-link');
    expect(element).toBeNull();
  });

  it('should render as many se-list-item components as se-sidemenu-item children', async () => {
    page = await renderComponent(
      '<se-sidemenu-item></se-sidemenu-item><se-sidemenu-item></se-sidemenu-item>'
    );
    const listItems = await page.findAll('se-sidemenu >>> se-list-item');
    expect(listItems.length).toEqual(2);
  });

  it('should open the sidemenu when the toggle method is called', async () => {
    page = await renderComponent();
    element = await page.find('se-sidemenu');
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });
});

describe('Sidemenu Screenshots', () => {
  it('renders with 3 sidemenu items and a width of 250px', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <se-sidemenu class="show-menu">
        <se-sidemenu-item item="Open"></se-sidemenu-item>
        <se-sidemenu-item item="About"></se-sidemenu-item>
        <se-sidemenu-item item="Close"></se-sidemenu-item>
      </se-sidemenu>
    `);
    await page.compareScreenshot('initially opened sidemenu', {
      fullPage: false,
    });
  });

  it('tests the tabbar with the centered option and the alternative color', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <se-sidemenu class="show-menu">
        <se-sidemenu-item item="Open"></se-sidemenu-item>
        <se-sidemenu-item item="About" active="true">
          <div style="position: relative; top: 70px;">HTML Content</div>
        </se-sidemenu-item>
        <se-sidemenu-item item="Close"></se-sidemenu-item>
      </se-sidemenu>
    `);
    const element = await page.find(
      'se-sidemenu >>> se-list-item:nth-child(2)'
    );
    await element.click();
    await page.compareScreenshot('sidemenu with active item and content', {
      fullPage: false,
    });
  });
});
