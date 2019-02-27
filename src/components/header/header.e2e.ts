import { newE2EPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-header></se-header>');

    const element = await page.find('se-header');
    expect(element).toHaveClass('hydrated');
  });

  it('sets the application title to both the font-regular and font-lighter elements', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-header app-title="Test Application"></se-header>');
    
    const titleFirstName = await page.find('se-header >>> .font-regular');
    const titleLastName = await page.find('se-header >>> .font-lighter');
    expect(titleFirstName.innerText).toEqual('Test');
    expect(titleLastName.innerHTML).toEqual('&nbsp;Application');
  });

  it('renders an se-ecostruxure component by default', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-header app-title="Test Application"></se-header>');
    
    const iconComponent = await page.find('se-header >>> se-icon-ecostruxure');
    expect(iconComponent).toBeTruthy();
  });

  it('does not renders an se-ecostruxure component when the domain property is changed', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-header app-title="Test Application" domain="testDomain"></se-header>');
    
    const iconComponent = await page.find('se-header >>> se-icon-ecostruxure');
    const domainElement = await page.find('se-header >>> .header-title-type');
    expect(iconComponent).toBeNull();
    expect(domainElement.innerText).toEqual('testDomain');
  });
});
