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
  it('renders the standard version of the loading component', async() => {
    let page = await newE2EPage();
		await page.setContent('<se-loading loading="true"></se-loading>')
    await page.compareScreenshot('Standard Loading Component', {fullPage: false});
	});
	
	it('renders the dialog version of the loading component', async() => {
    let page = await newE2EPage();
		await page.setContent('<se-loading option="dialog" loading="true"></se-loading>')
    await page.compareScreenshot('Dialog Loading Component', {fullPage: false});
  });
});