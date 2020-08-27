import { newE2EPage } from '@stencil/core/testing';

describe('AuthenticationComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-authentication></se-authentication>');
    element = await page.find('se-authentication');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders an ecostruxure icon by default', async () => {
    const iconElement = await page.find(
      'se-authentication >>> se-icon-ecostruxure'
    );
    expect(iconElement).toBeTruthy();
  });

  it('renders a span element with the class header-title-type when the domain is not equal to ecostruxure', async () => {
    element.setProperty('domain', 'myDomain');
    await page.waitForChanges();

    const ecostruxureElement = await page.find(
      'se-authentication >>> se-icon-ecostruxure'
    );
    const spanElement = await page.find(
      'se-authentication >>> span.header-title-type'
    );
    expect(ecostruxureElement).not.toBeTruthy();
    expect(spanElement).toBeTruthy();
    expect(spanElement.innerText).toEqual('myDomain');
  });

  it('renders a copyright message by default', async () => {
    const copyright = await page.find(
      'se-authentication >>> div.copyright-note > span'
    );
    expect(copyright.innerText).toEqual(
      'This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved.'
    );
  });
});

describe('AuthenticationComponent Screenshots', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders with the Ecostruxure logo', async () => {
    await page.setContent(
      '<se-authentication app-title="My Authentication" version="1.0"></se-authentication>'
    );
    element = await page.find('se-authentication');
    expect(element).toBeTruthy();
    await page.compareScreenshot('Authentication Ecostruxure Component', {
      fullPage: false,
    });
  });

  it('renders with the MySchneider logo', async () => {
    await page.setContent(
      '<se-authentication domain="MySchneider" app-title="My Authentication" version="1.0"></se-authentication>'
    );
    element = await page.find('se-authentication');
    expect(element).toBeTruthy();
    await page.compareScreenshot('Authentication MySchneider Component', {
      fullPage: false,
    });
  });
});
