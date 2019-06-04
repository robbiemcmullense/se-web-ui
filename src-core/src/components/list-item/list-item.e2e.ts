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

  it('should render a slot element by default', async() => {
    const slotElm = await page.find('se-list-item >>> slot');
    expect(slotElm).toBeTruthy();
  });

  it('should not render a slot element when the option is not set to classic', async() => {
    await page.$eval('se-list-item', (elm: any) => {
			elm.option = 'dropdown';
		});
    await page.waitForChanges();
    
    const slotElm = await page.find('se-list-item >>> slot');
    expect(slotElm).not.toBeTruthy();
  });

  it('should render a title and description when provided', async () => {
		await page.$eval('se-list-item', (elm: any) => {

			elm.item = 'My List Item';
			elm.description = 'sample list item';
		});
		await page.waitForChanges();

    const titleElm = await page.find('se-list-item >>> .nav-content div');
    const description = await page.find('se-list-item >>> .nav-content small');
    expect(titleElm.innerText).toEqual('My List Item');
    expect(description.innerText).toEqual(' sample list item');
  });

  it('should render an icon with arrow2_right when the option is set to nav', async () => {
		await page.$eval('se-list-item', (elm: any) => {
			elm.option = 'nav';
		});
		await page.waitForChanges();

    const iconElm = await page.find('se-list-item >>> .se-icon');
    expect(iconElm).toBeTruthy();
    expect(iconElm.innerText).toEqual('arrow2_right');
  });

  it('should render the icon equal to the icon property when provided', async() => {
    await page.$eval('se-list-item', (elm: any) => {
      elm.option = 'nav';
      elm.selected = true;
      elm.icon = 'my test icon';
		});
    await page.waitForChanges();
    
    const iconElm = await page.find('se-list-item >>> .nav-icon span');
    expect(iconElm).toBeTruthy();
    expect(iconElm.innerText).toEqual('my test icon');
  });

  it('should render a color class when selected', async() => {
    await page.$eval('se-list-item', (elm: any) => {
      elm.option = 'nav';
      elm.selected = true;
      elm.iconColor = 'secondary';
      elm.icon = 'my test icon';
		});
    await page.waitForChanges();
    
    const iconElm = await page.find('se-list-item >>> .nav-icon span');
    expect(iconElm).toBeTruthy();
    expect(iconElm).toHaveClasses(['se-icon', 'secondary']);
  });
});

describe('List Item with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-list-item id="my-id"></se-list-item>');

    const element = await page.find('se-list-item');
    expect(element.shadowRoot.querySelector('button')).toHaveAttribute('id');
    expect(element.shadowRoot.querySelector('button').getAttribute('id')).toEqual('wc-my-id');
  });
});