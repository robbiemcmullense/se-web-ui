Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

import { AppComponent } from './app';
import { newSpecPage } from '@stencil/core/testing';

describe('AppComponent', () => {

  it('should render and update the body with the se-font-technical class by default', async () => {
    const page = await newSpecPage({
      components: [AppComponent],
      html: `<se-app></se-app>`,
    });
    expect(page.body.className).toContain(`se-font-technical`);
  });

  it('should render then update body with the se-font-website class when app.option is set to website', async () => {
    const page = await newSpecPage({
      components: [AppComponent],
      html: `<se-app option="website"></se-app>`,
    });
    expect(page.body.className).toContain(`se-font-website`);
  });

  it('should render then update se-app component with class isLight', async () => {
    const page = await newSpecPage({
      components: [AppComponent],
      html: `<se-app option="website"></se-app>`,
    });
    expect(page.root.className).toContain(`isLight`);
  });
});
