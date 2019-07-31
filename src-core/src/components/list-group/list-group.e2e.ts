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
		expect(element).toHaveClass('hydrated');
	});

	it('should have hyrdated and classic classes by default', async () => {
    const page = await renderComponent();
    const element = await page.find('se-list-group >>> .se-list-group');
    expect(element).toHaveClass('classic');
  });

	it('renders an arrow2_up icon by default', async() => {
    const page = await renderComponent();
		const iconElm = await page.find('se-list-group >>> se-icon');
		expect(iconElm).toEqualText('arrow2_up');
	});

	it('renders an arrow2_down icon when collapsed', async() => {
    const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
			elm.collapsed = true;
		});
		await page.waitForChanges();
		const iconElm = await page.find('se-list-group >>> se-icon');
		expect(iconElm).toEqualText('arrow2_down');
	});

	it('renders an arrow2_right icon when the option is set to treeview', async() => {
    const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
			elm.option = 'treeview';
		});
		await page.waitForChanges();
		const iconElm = await page.find('se-list-group >>> se-icon');
		expect(iconElm).toEqualText('arrow2_right');
	});

	it('renders an icon element when the option is set to nav', async() => {
    const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
			elm.option = 'nav';
			elm.icon = 'my group test icon';
		});
		await page.waitForChanges();
		const parentElm = await page.find('se-list-group >>> .se-list-group');
		expect(parentElm).toHaveClass('nav');
		const iconElm = await page.find('se-list-group >>> se-icon');
		expect(iconElm).toBeTruthy();
		expect(iconElm).toEqualText('my group test icon');
	});

	it('should add a selected class to the button element when the selected property is true', async() => {
		const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
      elm.selected = true;
		});
    await page.waitForChanges();
    
    const buttonElm = await page.find('se-list-group >>> button');
    expect(buttonElm).toHaveClass('selected');
	});
	
	it('should add a selectedChild class to the button element when the selectedChild property is true', async() => {
		const page = await renderComponent();
		await page.$eval('se-list-group', (elm: any) => {
      elm.selectedChild = true;
		});
    await page.waitForChanges();
    
    const buttonElm = await page.find('se-list-group >>> button');
    expect(buttonElm).toHaveClass('selectedChild');
  });
});

describe('List Group with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-list-group id="my-id"></se-list-group>');

    const element = await page.find('se-list-group');
    expect(element.shadowRoot.querySelector('button')).toHaveAttribute('id');
    expect(element.shadowRoot.querySelector('button').getAttribute('id')).toEqual('wc-my-id');
  });
});

describe('List Group with Child List Items', () => {
  it('emits an event with the group item name and the selected child item name', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-list-group item="Group Title"><se-list-item item="One"></se-list-item><se-list-item item="Two" selected="true"></se-list-item></se-list-group>');
		await page.waitForChanges();
		const eventSpy = await page.spyOnEvent('didGroupClick');
		const element = await page.find('se-list-group >>> button');
		await element.click();
		expect(eventSpy).toHaveReceivedEvent();
  });
});