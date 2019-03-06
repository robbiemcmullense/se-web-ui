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

	it('renders a list item passing the "classic" mode by default', async() => {
		await page.setContent('<se-list><se-list-item item="list title" description="my description"></se-list-item></se-list>');
		const element = await page.find('se-list se-list-item');
		expect(element).toHaveClass('classic');
	});

	it('renders a list group passing the "nav" mode from its parent', async() => {
		await page.setContent('<se-list mode="nav"><se-list-group item="group title"></se-list-group></se-list>');
		const element = await page.find('se-list se-list-group');
		expect(element).toHaveClass('nav');
	});
});
