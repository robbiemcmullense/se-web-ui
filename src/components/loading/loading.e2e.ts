import { newE2EPage } from '@stencil/core/testing';

 describe('LoadingComponent', () => {
	let page, element;

	beforeEach(async() => {
		page = await newE2EPage();
		await page.setContent('<se-loading></se-loading>');
		element = await page.find('se-loading');
	});

  it('renders', async() => {
		expect(element).toBeTruthy();
		expect(element).toHaveClass('hydrated');
	});

	it('initially does not display on screen', async() => {
		expect(element.loader).toBeFalsy();
	});

	it('renders a list group', async() => {
		await page.$eval('se-loading', (elm: any) => {
			elm.loading = true;
		});
		await page.waitForChanges();
		expect(element).toHaveClass('show');
	});
});
