import { newE2EPage } from '@stencil/core/testing';

 describe('ListGroupComponent', () => {
	let page;

	beforeEach(async() => {
		page = await newE2EPage();
		await page.setContent('<se-list-group></se-list-group>');
	});

  it('renders', async() => {
    const element = await page.find('se-list-group');
		expect(element).toBeTruthy();
	});

	it('should have hyrdated and classic classes by default', async () => {
    const element = await page.find('se-list-group');
    expect(element).toHaveClasses(['classic', 'hydrated']);
  });

	it('renders an arrow2_up icon by default, along with an element with the group-item class', async() => {
		const iconElm = await page.find('se-list-group >>> .se-icon.medium');
		const groupItemElm = await page.find('se-list-group >>> .group-item');
		expect(iconElm).toEqualText('arrow2_up');
		expect(groupItemElm).toBeTruthy();
	});

	it('renders an arrow2_down icon when collapsed, and does not render an element with the group-item class', async() => {
		await page.$eval('se-list-group', (elm: any) => {
			elm.collapsed = true;
		});
		await page.waitForChanges();
		const iconElm = await page.find('se-list-group >>> .se-icon.medium');
		const groupItemElm = await page.find('se-list-group >>> .group-item');
		expect(iconElm).toEqualText('arrow2_down');
		expect(groupItemElm).not.toBeTruthy();
	});

	it('renders an arrow2_right icon when the mode is set to treeview', async() => {
		await page.$eval('se-list-group', (elm: any) => {
			elm.mode = 'treeview';
		});
		await page.waitForChanges();
		const iconElm = await page.find('se-list-group >>> .se-icon');
		expect(iconElm).toEqualText('arrow2_right');
	});

	it('renders an icon element when the mode is set to nav', async() => {
		await page.$eval('se-list-group', (elm: any) => {
			elm.mode = 'nav';
			elm.icon = 'my group test icon';
		});
		await page.waitForChanges();
		const parentElm = await page.find('se-list-group');
		expect(parentElm).toHaveClass('nav');
		const iconElm = await page.find('se-list-group >>> .nav-icon span');
		expect(iconElm).toBeTruthy();
		expect(iconElm).toEqualText('my group test icon');
	});
});
