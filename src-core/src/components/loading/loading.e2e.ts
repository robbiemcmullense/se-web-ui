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

	it('displays on screen when the loading property is set to true', async() => {
		await page.$eval('se-loading', (elm: any) => {
			elm.loading = true;
		});
		await page.waitForChanges();
		expect(element).toHaveClass('show');
	});
});

describe('Loading Screenshots', () => {
  it('tests the standard version of the loader', async() => {
    let page = await newE2EPage();
    await page.setContent(`
			<div style="width: 200px; height: 200px;">
				<se-loading loading="true"></se-loading>
			</div>
    `);
    await page.compareScreenshot('standard loader component', {fullPage: false});
	});

	it('tests the dialog version of the loader', async() => {
    let page = await newE2EPage();
    await page.setContent(`
			<div style="width: 200px; height: 200px;">
				<se-loading option="dialog" loading="true"></se-loading>
			</div>
    `);
    await page.compareScreenshot('dialog loader component', {fullPage: false});
	});
});