import { newE2EPage } from '@stencil/core/testing';

describe('TableGroupHeaderComponent', () => {
  const renderComponent = async (attributes = '') => {
    const result = await newE2EPage();
    await result.setContent(
      `<se-table-group-header ${attributes}></se-table-group-header>`
    );
    return result;
  };

  it('renders', async () => {
    const page = await renderComponent();
    const element = await page.find('se-table-group-header');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});
