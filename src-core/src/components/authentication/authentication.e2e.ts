import { newE2EPage } from '@stencil/core/testing';

describe('AuthenticationComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-authentication></se-authentication>');  
    element = await page.find('se-authentication');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders an ecostruxure icon by default', async() => {
    let iconElement = await page.find('se-authentication >>> se-icon-ecostruxure');
    expect(iconElement).toBeTruthy();
  });

  it('renders an a span element when the domain is not equal to ecostruxure', async() => {
    await page.$eval('se-authentication', (elm: any) => {
      elm.domain = 'myDomain';
    });
    await page.waitForChanges();

    let ecostruxureElement = await page.find('se-authentication >>> se-icon-ecostruxure');
    let spanElement = await page.find('se-authentication >>> span.header-title-type');
    expect(ecostruxureElement).not.toBeTruthy();
    expect(spanElement).toBeTruthy();
    expect(spanElement.innerText).toEqual('myDomain');
  });

  it('renders a copyright message by default', async() => {
    let copyright = await page.find('se-authentication >>> div.copyright-note');
    expect(copyright.innerText).toEqual('This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.');
  });
});