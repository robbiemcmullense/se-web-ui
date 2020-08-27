import { newE2EPage } from '@stencil/core/testing';

describe('AboutComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-about></se-about>');
    element = await page.find('se-about');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders an ecostruxure icon by default', async () => {
    const iconElement = await page.find('se-about >>> se-icon-ecostruxure');
    expect(iconElement).toBeTruthy();
  });

  it('renders a span element with the class header-title-type when the domain is not equal to ecostruxure', async () => {
    element.setProperty('domain', 'myDomain');
    await page.waitForChanges();

    const ecostruxureElement = await page.find(
      'se-about >>> se-icon-ecostruxure'
    );
    const spanElement = await page.find('se-about >>> span.header-title-type');
    expect(ecostruxureElement).not.toBeTruthy();
    expect(spanElement).toBeTruthy();
    expect(spanElement.innerText).toEqual('myDomain');
  });

  it('renders a copyright message by default', async () => {
    const copyrightFirst = await page.find(
      'se-about >>> div.copyright-info-first'
    );
    const copyrightLast = await page.find(
      'se-about >>> div.copyright-info-last'
    );
    expect(copyrightFirst.innerText).toEqual(
      'This application is protected by copyright law and international treaties.'
    );
    expect(copyrightLast.innerText).toEqual(
      '© 2020 Schneider Electric Industries SAS. All Rights Reserved.'
    );
  });
});

describe('AboutComponent Screenshots', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders with the Ecostruxure logo', async () => {
    await page.setContent(
      '<se-about app-title="Ecostruxure Application" version="1.0"></se-about>'
    );
    element = await page.find('se-about');
    expect(element).toBeTruthy();
    await page.compareScreenshot('Ecostruxure About Page', { fullPage: false });
  });

  it('renders with the MySchneider logo', async () => {
    await page.setContent(
      '<se-about domain="MySchneider" app-title="MySchneider Application" version="1.0"></se-about>'
    );
    element = await page.find('se-about');
    expect(element).toBeTruthy();
    await page.compareScreenshot('MySchneider About Page', { fullPage: false });
  });
});
