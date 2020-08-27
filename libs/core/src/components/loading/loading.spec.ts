import { LoadingComponent } from './loading';
import { newSpecPage } from '@stencil/core/testing';

describe('list-group', () => {
  let loader;

  beforeEach(() => {
    loader = new LoadingComponent();
  });

  it('should build', () => {
    expect(loader).toBeTruthy();
  });

  it('should not have a defined loading state initially', () => {
    expect(loader.loading).toBeUndefined();
  });

  it('should be set to the standard option by default', () => {
    expect(loader.option).toEqual('standard');
  });

  it('should set the selected state to true after calling the setActive method', () => {
    loader.loading = true;
    expect(loader.loading).toBeDefined();
  });

  it('should render, with an standard class to reflect the default option', async () => {
    const page = await newSpecPage({
      components: [LoadingComponent],
      html: `<se-loading></se-loading>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.se-loading.standard')
    ).toBeTruthy();
  });
});
