import { LinkComponent } from './link';
import { newSpecPage } from '@stencil/core/testing';

describe('LinkComponent', () => {

  it('should render with an anchor element', async () => {
    const page = await newSpecPage({
      components: [LinkComponent],
      html: `<se-link></se-link>`,
    });
    expect(page.root.shadowRoot.querySelector('a')).toBeTruthy();
  });

  it('should render with the specified url and the external class when set to the external option', async () => {
    const page = await newSpecPage({
      components: [LinkComponent],
      html: `<se-link option="external" url="google.com"></se-link>`,
    });
    expect(page.root.shadowRoot.querySelector('.external')).toBeTruthy();
    expect(
      page.root.shadowRoot.querySelector('a').getAttribute('href')
    ).toEqual('google.com');
  });

  it('should render with unicolor class when unicolor prop is true', async () => {
    const page = await newSpecPage({
      components: [LinkComponent],
      html: `<se-link unicolor="true" url="google.com"></se-link>`,
    });
    expect(page.root.shadowRoot.querySelector('.unicolor')).toBeTruthy();
  });
});
