import { newE2EPage } from '@stencil/core/testing';

describe('SwitchComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-switch></se-switch>');
    element = await page.find('se-switch');
  });

  it('renders', async() => {
		expect(element).toBeTruthy();
		expect(element).toHaveClass('hydrated');
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
