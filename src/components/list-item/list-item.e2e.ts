import { newE2EPage } from '@stencil/core/testing';

 describe('ListItemComponent', () => {
	let page;

	beforeEach(async () => {
		page = await newE2EPage();
		await page.setContent('<se-list-item></se-list-item>');
	});

  it('renders', async () => {
		const element = await page.find('se-list-item');
    expect(element).toBeTruthy();
  });

  it('should have hyrdated and classic classes by default', async () => {
    const element = await page.find('se-list-item');
    expect(element).toHaveClasses(['classic', 'hydrated']);
  });

  it('should render a title and description when provided', async () => {
		await page.$eval('se-list-item', (elm: any) => {

			elm.item = 'My List Item';
			elm.description = 'sample list item';
		});
		await page.waitForChanges();

    const titleElm = await page.find('se-list-item >>> .nav-text');
    const description = await page.find('se-list-item >>> .nav-description');
    expect(titleElm.innerText).toEqual('My List Item');
    expect(description.innerText).toEqual('sample list item');
  });

  it('should render an icon with arrow2_right when the mode is set to nav', async () => {
		await page.$eval('se-list-item', (elm: any) => {
			elm.mode = 'nav';
		});
		await page.waitForChanges();

    const iconElm = await page.find('se-list-item >>> se-icon');
    expect(iconElm).toBeTruthy();
    expect(iconElm.innerText).toEqual('arrow2_right');
  });

  it('should render an icon with arrow2_up when collapsible is set to true', async () => {
    await page.$eval('se-list-item', (elm: any) => {
			elm.collapsible = true;
		});
		await page.waitForChanges();

    const iconElm = await page.find('se-list-item >>> se-icon');
    expect(iconElm).toBeTruthy();
    expect(iconElm.innerText).toEqual('arrow2_up');
  });

  it('should render an icon with arrow2_down when collapsible and collapsed are both set to true', async () => {
    await page.$eval('se-list-item', (elm: any) => {
			elm.collapsible = true;
			elm.collapsed = true;
		});
		await page.waitForChanges();

    const iconElm = await page.find('se-list-item >>> se-icon');
    expect(iconElm).toBeTruthy();
    expect(iconElm.innerText).toEqual('arrow2_down');
  });
});
