import { newE2EPage } from '@stencil/core/testing';

 describe('ListGroupComponent', () => {
	let page;

	beforeEach(async() => {
		page = await newE2EPage();
	});

  it('renders', async() => {
		await page.setContent('<se-list-group></se-list-group>');
    const element = await page.find('se-list-group');
		expect(element).toBeTruthy();
		expect(element).toHaveClass('hydrated');
	});

	it('renders with an se-list-item element by default, passing its text property', async() => {
		await page.setContent('<se-list-group item="Item Group"></se-list-group>');
		const element = await page.find('se-list-group >>> se-list-item');
		expect(element).toEqualHtml('<se-list-item class="classic hydrated" item="Item Group"></se-list-item>');
	});

	it('renders with a div element', async() => {
		await page.setContent('<se-list-group></se-list-group>');
		const element = await page.find('se-list-group >>> div');
		expect(element).toEqualHtml('<div class="group-item"><slot /></div>');
	});

	it('renders with 3 child list items', async() => {
		const secondItemHTML = '<button style="padding-left: 20px"><div class="selectedBar"></div>'
			+ '<div class="nav-content"><div class="nav-text">two</div><div class="nav-description"></div></div>'
			+ '</button><se-divider class="horizontal hydrated light"></se-divider>';

		await page.setContent('<se-list-group item="Item Group"><se-list-item item="one"></se-list-item><se-list-item item="two"></se-list-item><se-list-item item="three"></se-list-item></se-list-group>');
		const element = await page.find('se-list-group se-list-item:nth-child(2)');
		expect(element.shadowRoot).toEqualHtml(secondItemHTML);
  });
});
