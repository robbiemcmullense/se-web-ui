import { newE2EPage } from '@stencil/core/testing';

describe('TableGroupComponent', () => {
  const renderComponent = async (attributes = '') => {
    const result = await newE2EPage();
    await result.setContent(`<se-table-group ${attributes}></se-table-group>`);
    return result;
  };

  it('renders', async () => {
    const page = await renderComponent();
    const element = await page.find('se-table-group');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});
