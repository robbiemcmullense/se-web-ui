import { ListItemComponent } from './list-item';
import { newSpecPage } from '@stencil/core/testing';

describe('list-item', () => {


  it('should render, with an element with the se-list-item class', async () => {
    const page = await newSpecPage({
      components: [ListItemComponent],
      html: `<se-list-item></se-list-item>`,
    });
    expect(page.root.shadowRoot.querySelector('.button')).toBeTruthy();
  });

  it('should render, with a small element when there is a defined description property', async () => {
    const page = await newSpecPage({
      components: [ListItemComponent],
      html: `<se-list-item description="my description"></se-list-item>`,
    });
    expect(page.root.shadowRoot.querySelector('small')).toBeTruthy();
  });

  it('should render, with a se-icon element when there is a defined icon property', async () => {
    const page = await newSpecPage({
      components: [ListItemComponent],
      html: `<se-list-item icon="close"></se-list-item>`,
    });
    expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
  });

  it('should render, with a slot element when the option property is set to classic', async () => {
    const page = await newSpecPage({
      components: [ListItemComponent],
      html: `<se-list-item option="classic"></se-list-item>`,
    });
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should render, with an element with the selectedBar class and an se-icon with size medium when option equals nav and selected is true', async () => {
    const page = await newSpecPage({
      components: [ListItemComponent],
      html: `<se-list-item selected="true"></se-list-item>`,
    });
    expect(page.root.shadowRoot.querySelector('.selectedBar')).toBeTruthy();
  });

});
