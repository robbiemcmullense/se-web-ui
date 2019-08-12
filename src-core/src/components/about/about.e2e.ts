import { newE2EPage } from '@stencil/core/testing';

describe('AboutComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-about></se-about>');
    element = await page.find('se-about');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
    await page.compareScreenshot('My About page', {fullPage: false});
  });

  });

  it('renders an ecostruxure icon by default', async() => {
    let iconElement = await page.find('se-about >>> se-icon-ecostruxure');
    expect(iconElement).toBeTruthy();
  });

  it('renders an a span element when the domain is not equal to ecostruxure', async() => {
    await page.$eval('se-about', (elm: any) => {
      elm.domain = 'myDomain';
    });
    await page.waitForChanges();

    let ecostruxureElement = await page.find('se-about >>> se-icon-ecostruxure');
    let spanElement = await page.find('se-about >>> span.header-title-type');
    expect(ecostruxureElement).not.toBeTruthy();
    expect(spanElement).toBeTruthy();
    expect(spanElement.innerText).toEqual('myDomain');
  });

  it('renders a copyright message by default', async() => {
    let copyright = await page.find('se-about >>> div.content-info');
    expect(copyright.innerText).toEqual('This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.');
  });
});
