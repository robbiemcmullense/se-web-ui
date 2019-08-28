import { BlockComponent } from "./block";
import { newSpecPage } from '@stencil/core/testing';

describe('BlockComponent', () => {
	let block;

	beforeEach(() => {
		block = new BlockComponent();
	});

	it('should build', () => {
		expect(block).toBeTruthy();
	});

	it('should have the basic option by default', () => {
		expect(block.option).toEqual('basic');
	});

	it('should initially be in flex mode', () => {
		expect(block.display).toBe('flex');
	});

	it('should have a transparent color by default', () => {
		expect(block.color).toBe('transparent');
	});

	it('should not be loading by default', () => {
		expect(block.loading).toBeFalsy();
	});

	it('should not be enlarged by default', () => {
		expect(block.enlarged).toBeFalsy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block></se-block>`,
		});
		expect(page.root).toEqualHtml(`
			<se-block class="flex">
				<mock:shadow-root>
					<div class="basic block-body transparent">
						<slot></slot>
					</div>
				</mock:shadow-root>
			</se-block>
		`);
	});

	it('should call the updateSize function when the component loads', async() => {
		const eventSpy = jest.spyOn(block, 'updateSize');
		block.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the updateItemMode function when the component option changes', async() => {
		const eventSpy = jest.spyOn(block, 'updateItemMode');
		block.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should have an HTML element reference', () => {
		expect(block.el).toBeTruthy();
	});

	it('should set the element style width, height, minWidth, and minHeight properties when width and height are specified as component properties', () => {
		block.width = '350px';
		block.height = '350px';
		block.componentWillLoad();
		expect(block.el.style.width).toEqual(block.width);
		expect(block.el.style.minWidth).toEqual(block.width);
		expect(block.el.style.height).toEqual(block.height);
		expect(block.el.style.minHeight).toEqual(block.height);
	});

});