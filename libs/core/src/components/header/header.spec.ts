import { HeaderComponent } from './header';
import { newSpecPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
  
  it('should render with an ecostruxure icon by default', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<se-header></se-header>`,
    });
    expect(
      page.root.shadowRoot.querySelector('se-icon-ecostruxure')
    ).toBeTruthy();
  });

  it('should render without an ecostruxure icon when a custom domain property is provided', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<se-header domain="my domain"></se-header>`,
    });
    expect(
      page.root.shadowRoot.querySelector('se-icon-ecostruxure')
    ).not.toBeTruthy();
  });

  it('should render with an se-icon element when a sidemenu element is present', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<se-header><se-sidemenu></se-sidemenu></se-header>`,
    });
    expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
  });

  // it('should set the component hasMenu property to true when a sidemenu element is present', () => {
  //   const sidemenu = document.createElement('se-sidemenu');
  //   header.el.appendChild(sidemenu);
  //   header.componentWillLoad();
  //   expect(header.hasMenu).toBeTruthy();
  // });

  // it('should not open menu when disabled', () => {
  //   const sidemenu = document.createElement('se-sidemenu');
  //   header.el.appendChild(sidemenu);
  //   header.componentWillLoad();
  //   header.disabled = true;
  //   header.onClickMenu();
  //   expect(header.elLeftNav.open).toBeFalsy();
  // });

});
