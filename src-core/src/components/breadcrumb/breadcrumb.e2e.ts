import { newE2EPage } from '@stencil/core/testing';

describe('BreadcrumbComponent', () => {
  let page, element;

  const renderComponent = async (items = '<se-breadcrumb-item></se-breadcrumb-item>') => {
    page = await newE2EPage();
    await page.setContent(`
      <se-breadcrumb>
        ${items}
      </se-breadcrumb>
    `);
    return page;
  };

  it('renders', async () => {
    page = await renderComponent();
    element = await page.find('se-breadcrumb');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render as many anchor elements as se-breadcrumb-item children', async () => {
    page = await renderComponent('<se-breadcrumb-item></se-breadcrumb-item><se-breadcrumb-item></se-breadcrumb-item>');
    const listItems = await page.findAll('se-breadcrumb se-breadcrumb-item >>> span');
    expect(listItems.length).toBe(2);
  });

  it('should render an aria-current attribute on the last list item element', async () => {
    page = await renderComponent('<se-breadcrumb-item></se-breadcrumb-item><se-breadcrumb-item></se-breadcrumb-item>');
    const listItems = await page.findAll('se-breadcrumb se-breadcrumb-item >>> span');
    expect(listItems[0].getAttribute('aria-current')).toBeFalsy();
    expect(listItems[1].getAttribute('aria-current')).toBeTruthy();
  });
});