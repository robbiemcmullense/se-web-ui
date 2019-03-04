import { newE2EPage } from '@stencil/core/testing';

 describe('ListComponent', () => {
	let page;

	beforeEach(async() => {
		page = await newE2EPage();
	});

  it('renders', async() => {
		await page.setContent('<se-list></se-list>');
    const element = await page.find('se-list');
		expect(element).toBeTruthy();
		expect(element).toHaveClass('hydrated');
	});

	it('renders a list item with its title and description', async() => {
		const itemHTML = '<button style="padding-left: 0px"><div class="selectedBar"></div>'
		+ '<div class="nav-content"><div class="nav-text">list title</div><div class="nav-description">my description</div></div>'
		+ '</button><se-divider class="horizontal hydrated light"></se-divider>';

		await page.setContent('<se-list><se-list-item item="list title" description="my description"></se-list-item></se-list>');
		const element = await page.find('se-list se-list-item');
		expect(element.shadowRoot).toEqualHtml(itemHTML);
	});

	it('renders a list group', async() => {
		const groupHTML = '<se-list-item class="classic hydrated" item="group title"></se-list-item><div class="group-item"><slot></slot></div>';

		await page.setContent('<se-list><se-list-group item="group title"></se-list-group></se-list>');
		const element = await page.find('se-list se-list-group');
		expect(element.shadowRoot).toEqualHtml(groupHTML);
	});
});
