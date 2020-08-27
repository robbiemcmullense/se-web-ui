import { DividerComponent } from './divider';
import { newSpecPage } from '@stencil/core/testing';

describe('divider', () => {
  let divider;

  beforeEach(() => {
    divider = new DividerComponent();
  });

  it('should build', () => {
    expect(divider).toBeTruthy();
  });

  it('should be in horizontal mode by default', () => {
    expect(divider.option).toEqual('horizontal');
  });

  it('should be a light color by default', () => {
    expect(divider.color).toEqual('standard');
  });

  it('should render with horizontal and standard classes by default', async () => {
    const page = await newSpecPage({
      components: [DividerComponent],
      html: `<se-divider></se-divider>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.horizontal.standard')
    ).toBeTruthy();
  });
});
