import { newE2EPage } from '@stencil/core/testing';

 describe('TableItemHeaderComponent', () => {
	let page, element;

	beforeEach(async () => {
		page = await newE2EPage();
    await page.setContent('<se-table-header-item></se-table-header-item>');
    element = await page.find('se-table-item-header');
	});

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});