import { newE2EPage } from '@stencil/core/testing';

 describe('ListGroupComponent', () => {

	const renderComponent = async(attributes = '') => {
		let result = await newE2EPage();
		await result.setContent(`<se-list-group ${attributes}></se-list-group>`);
		return result;
	};

  it('renders', async() => {
    const page = await renderComponent();
    const element = await page.find('se-list-group');
		expect(element).toBeTruthy();
	});

	it('should have hyrdated and classic classes by default', async () => {
    const page = await renderComponent();
    const element = await page.find('se-list-group');
    expect(element).toHaveClasses(['classic', 'hydrated']);
  });

	it('renders an arrow2_up icon by default', async() => {
    const page = await renderComponent();
		const iconElm = await page.find('se-list-group >>> .se-icon.medium');
		expect(iconElm).toEqualText('arrow2_up');
	});

	it('renders an arrow2_down icon when collapsed', async() => {
    const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
			elm.collapsed = true;
		});
		await page.waitForChanges();
		const iconElm = await page.find('se-list-group >>> .se-icon.medium');
		expect(iconElm).toEqualText('arrow2_down');
	});

	it('renders an arrow2_right icon when the option is set to treeview', async() => {
    const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
			elm.option = 'treeview';
		});
		await page.waitForChanges();
		const iconElm = await page.find('se-list-group >>> .se-icon');
		expect(iconElm).toEqualText('arrow2_right');
	});

	it('renders an icon element when the option is set to nav', async() => {
    const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
			elm.option = 'nav';
			elm.icon = 'my group test icon';
		});
		await page.waitForChanges();
		const parentElm = await page.find('se-list-group');
		expect(parentElm).toHaveClass('nav');
		const iconElm = await page.find('se-list-group >>> .nav-icon span');
		expect(iconElm).toBeTruthy();
		expect(iconElm).toEqualText('my group test icon');
	});

   it('should render button with "disabled" attribute when can-collapse is false', async () => {
     const page = await renderComponent('can-collapse="false"');
     const element = await page.find('se-list-group >>> button');
     expect(element).toHaveAttribute('disabled');
   });

   it('should NOT render icon when can-collapse is false', async () => {
     const page = await renderComponent('can-collapse="false"');
     const element = await page.find('se-list-group >>> span.se-icon');
     expect(element).toBeFalsy();
   });

 });
