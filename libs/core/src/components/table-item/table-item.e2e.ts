import { newE2EPage } from '@stencil/core/testing';

 describe('TableItemComponent', () => {
	let page, element;

	beforeEach(async () => {
		page = await newE2EPage();
    await page.setContent('<se-table-item></se-table-item>');
    element = await page.find('se-table-item');
	});

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});