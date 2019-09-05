import { ContainerComponent } from './container';
import { newSpecPage } from '@stencil/core/testing';

describe('ContainerComponent', () => {
	let container;

	beforeEach(() => {
		container = new ContainerComponent();
	});

	it('should build', () => {
		expect(container).toBeTruthy();
	});

	it('should have a default option equal to fill', () => {
		expect(container.option).toEqual('fill');
	});

	it('should have a default position equal to relative', () => {
		expect(container.position).toEqual('relative');
	});

	it('should have a default direction equal to row', () => {
		expect(container.direction).toEqual('row');
	});

	it('should have a default display equal to flex', () => {
		expect(container.display).toEqual('flex');
	});

	it('should render with fill-content, flex-display, and row-dir classes by default', async() => {
		const page = await newSpecPage({
			components: [ContainerComponent],
			html: `<se-container></se-container>`,
		});
		expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
	});

	it('should render with a div element that has a wrapper-center class when the option is set to centered', async() => {
		const page = await newSpecPage({
			components: [ContainerComponent],
			html: `<se-container option="centered"></se-container>`,
		});
		expect(page.root.shadowRoot.querySelector('.wrapper-center')).toBeTruthy();
	});

	it('should call the optionDidChange and displayDidChange function when the component loads', async() => {
		const optionEventSpy = jest.spyOn(container, 'optionDidChange');
		const displayEventSpy = jest.spyOn(container, 'displayDidChange');
		container.componentWillLoad();
		expect(optionEventSpy).toHaveBeenCalled();
		expect(displayEventSpy).toHaveBeenCalled();
	});

	it('should call the rowSizeDidChange and columnSizeDidChange function when the component loads', async() => {
		const rowEventSpy = jest.spyOn(container, 'rowSizeDidChange');
		const colEventSpy = jest.spyOn(container, 'columnSizeDidChange');
		container.componentWillLoad();
		expect(rowEventSpy).toHaveBeenCalled();
		expect(colEventSpy).toHaveBeenCalled();
	});

	it('should call the assignBlockClasses when the component loads with option set to widget, setting the color to standard', async() => {
		container.option = 'widget';
		const eventSpy = jest.spyOn(container, 'assignBlockClasses');
		container.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
		expect(container.color).toEqual('standard');
	});

	it('should call the assignBlockClasses when the component loads with option set to card, keeping the color as alternative', async() => {
		container.option = 'card';
		const eventSpy = jest.spyOn(container, 'assignBlockClasses');
		container.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
		expect(container.color).toEqual('alternative');
	});
});