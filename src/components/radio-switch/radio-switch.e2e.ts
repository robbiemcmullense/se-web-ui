import { newE2EPage } from '@stencil/core/testing';

describe('RadioSwitchComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio-switch></se-radio-switch>');
    element = await page.find('se-radio-switch');
  });

  it('renders', async() => {
		expect(element).toBeTruthy();
		expect(element).toHaveClass('hydrated');
	});

	it('renders with a disabled input element when the parent element has disabled=true', async() => {
    await page.$eval('se-radio-switch', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    const inputElm = element.shadowRoot.querySelector('input');
    expect(inputElm.disabled).toBeTruthy();
  });
	
	it('sends an event with the selected state on a click', async() => {
		const eventSpy = await page.spyOnEvent('change');
		await element.click();
		expect(eventSpy).toHaveReceivedEvent();
		expect(eventSpy).toHaveReceivedEventDetail({
			selected: true
		});
	});
});