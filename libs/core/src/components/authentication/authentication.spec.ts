import { AuthenticationComponent } from './authentication';
import { newSpecPage } from '@stencil/core/testing';

describe('AuthenticationComponent', () => {
  let component;

  beforeEach(() => {
    component = new AuthenticationComponent();
  });

  it('should build', () => {
    expect(component).toBeTruthy();
  });

  it('should not be hidden by default', () => {
    expect(component.hide).toBeFalsy();
  });

  it('should populate the domain and copyright information from the app info file', () => {
    expect(component.domain).toEqual('ecostruxure');
    expect(component.copyright).toEqual(
      'This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved.'
    );
  });

  it('should render with the ecostruxure icon by default', async () => {
    const page = await newSpecPage({
      components: [AuthenticationComponent],
      html: `<se-authentication></se-authentication>`,
    });
    expect(
      page.root.shadowRoot.querySelector('se-icon-ecostruxure')
    ).toBeTruthy();
  });

  it('should render without the ecostruxure icon when the domain is set to a custom value', async () => {
    const page = await newSpecPage({
      components: [AuthenticationComponent],
      html: `<se-authentication domain="my domain"></se-authentication>`,
    });
    expect(
      page.root.shadowRoot.querySelector('se-icon-ecostruxure')
    ).not.toBeTruthy();
  });

  it('should not render a domain value or ecostruxure icon when "none" is the domain value', async () => {
    const page = await newSpecPage({
      components: [AuthenticationComponent],
      html: `<se-authentication domain="none"></se-authentication>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.header-title-type')
    ).not.toBeTruthy();
  });

  it('should render with the hide class when the hide option is set to true, and not render the main markup', async () => {
    const page = await newSpecPage({
      components: [AuthenticationComponent],
      html: `<se-authentication hide="true"></se-authentication>`,
    });
    expect(page.root.shadowRoot.querySelector('.hide')).toBeTruthy();
  });
});
