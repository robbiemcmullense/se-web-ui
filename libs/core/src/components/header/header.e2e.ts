import { newE2EPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-header app-title="Test Application"></se-header>'
    );
  });

  it('renders', async () => {
    element = await page.find('se-header');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('sets the application title to 2 separate span elements within the h1 element', async () => {
    const titleFirstName = await page.find('se-header >>> h1 span:first-child');
    const titleLastName = await page.find('se-header >>> h1 span.light');
    expect(titleFirstName.innerText).toEqual('Test');
    expect(titleLastName.innerHTML).toEqual(' Application');
  });

  it('should render a se-icon-ecostruxure element because the domain is ecostruxure by default', async () => {
    const iconElm = await page.find('se-header >>> se-icon-ecostruxure');
    expect(iconElm).toBeTruthy();
  });

  it('renders a span element with the class header-title-type when the domain is not equal to ecostruxure', async () => {
    element = await page.find('se-header');
    element.setProperty('domain', 'myDomain');
    await page.waitForChanges();

    const ecostruxureElement = await page.find(
      'se-header >>> se-icon-ecostruxure'
    );
    const spanElement = await page.find('se-header >>> span.header-title-type');
    expect(ecostruxureElement).not.toBeTruthy();
    expect(spanElement).toBeTruthy();
    expect(spanElement.innerText).toEqual('myDomain');
  });

});

describe('HeaderComponent with sideMenu', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-header app-title="Test Application"><se-sidemenu></se-sidemenu></se-header>'
    );
  });
  it('should set the component hasMenu property to true when a sidemenu element is present', async () => {
    element = await page.find('se-header');
    expect(element.getProperty('hasMenu')).toBeTruthy();
  });
});

describe('Header Component with Sidenav Child', () => {
  it('should render a se-icon element when an se-sidemenu element exists within the header', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<se-header><se-sidemenu><se-sidemenu-item></se-sidemenu-item></se-sidemenu></se-header>'
    );
    const element = await page.find('se-header >>> se-icon');
    expect(element).toBeTruthy();
  });
});

describe('Header Component Screenshots', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('should render with the Ecostruxure domain by default, along with the provided app title and project property', async () => {
    await page.setContent(
      '<se-header app-title="My App" project="My Project"></se-header>'
    );
    await page.compareScreenshot('Ecostruxure Header', { fullPage: false });
  });

  it('should render with a burger icon, when there is a sidemenu, along with the custom domain name', async () => {
    await page.setContent(`
      <se-header domain="My Domain" app-title="My App" project="My Project">
        <se-sidemenu></se-sidemenu>
      </se-header>
      `);
    await page.compareScreenshot('Custom Domain Header with Sidemenu', {
      fullPage: false,
    });
  });
});
