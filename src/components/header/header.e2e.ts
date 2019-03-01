import { newE2EPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-header app-title="Test Application"></se-header>');
  });

  it('renders', async() => {
    element = await page.find('se-header');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('sets the application title to both the font-regular and font-lighter elements', async() => {
    const titleFirstName = await page.find('se-header >>> .font-regular');
    const titleLastName = await page.find('se-header >>> .font-lighter');
    expect(titleFirstName.innerText).toEqual('Test');
    expect(titleLastName.innerHTML).toEqual('&nbsp;Application');
  });

  it('renders an se-ecostruxure component by default', async() => {
    const iconComponent = await page.find('se-header >>> se-icon-ecostruxure');
    expect(iconComponent).toBeTruthy();
  });

  it('does not renders an se-ecostruxure component when the domain property is changed', async() => {
    await page.$eval('se-header', (elm: any) => {
      elm.domain = 'testDomain';
    });
    await page.waitForChanges();
    const iconComponent = await page.find('se-header >>> se-icon-ecostruxure');
    const domainElement = await page.find('se-header >>> .header-title-type');
    expect(iconComponent).toBeNull();
    expect(domainElement.innerText).toEqual('testDomain');
  });
});
