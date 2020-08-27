import { AboutComponent } from './about';
import { newSpecPage } from '@stencil/core/testing';

describe('AboutComponent', () => {
  let component;

  beforeEach(() => {
    component = new AboutComponent();
  });

  it('should build', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the domain, and copyright information from the app info file', () => {
    expect(component.domain).toEqual('ecostruxure');
    expect(component.copyright).toEqual(
      'This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved.'
    );
  });

  it('should render with the ecostruxure icon by default', async () => {
    const page = await newSpecPage({
      components: [AboutComponent],
      html: `<se-about></se-about>`,
    });
    expect(
      page.root.shadowRoot.querySelector('se-icon-ecostruxure')
    ).toBeTruthy();
  });

  it('should render without the ecostruxure icon when the domain is set to a custom value', async () => {
    const page = await newSpecPage({
      components: [AboutComponent],
      html: `<se-about domain="my domain"></se-about>`,
    });
    expect(
      page.root.shadowRoot.querySelector('se-icon-ecostruxure')
    ).not.toBeTruthy();
  });

  it('should not render a domain value when "none" is the domain value', async () => {
    const page = await newSpecPage({
      components: [AboutComponent],
      html: `<se-about domain="none"></se-about>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.header-title-type')
    ).not.toBeTruthy();
  });
});
