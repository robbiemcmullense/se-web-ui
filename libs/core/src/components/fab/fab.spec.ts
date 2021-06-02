import { FabComponent } from './fab';
import { newSpecPage } from '@stencil/core/testing';

describe('FabComponent', () => {
  
  it('should render in speeddial mode by default, with an element with the mini-action-button class', async () => {
    const page = await newSpecPage({
      components: [FabComponent],
      html: `<se-fab></se-fab>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.mini-action-button')
    ).toBeTruthy();
  });

  it('should render an se-button element with the backtotop class when the option is set to backtotop', async () => {
    const page = await newSpecPage({
      components: [FabComponent],
      html: `<se-fab option="backtotop"></se-fab>`,
    });
    expect(page.root.shadowRoot.querySelector('.backtotop')).toBeTruthy();
  });
});
