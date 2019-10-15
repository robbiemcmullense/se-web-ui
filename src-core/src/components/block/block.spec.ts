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

	it('should have an HTML element reference', () => {
		expect(block.el).toBeTruthy();
	});

	it('should have the basic option by default', () => {
		expect(block.option).toEqual('basic');
	});

	it('should initially be in flex mode', () => {
		expect(block.display).toBe('flex');
	});

	it('should have an alternative color by default', () => {
		expect(block.color).toBe('alternative');
	});

	it('should not be loading by default', () => {
		expect(block.loading).toBeFalsy();
	});

	it('should not be enlarged by default', () => {
		expect(block.enlarged).toBeFalsy();
	});

	it('should render with a block-body class', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block></se-block>`,
		});
		expect(page.root.shadowRoot.querySelector('.block-body')).toBeTruthy();
	});

	it('should render with a se-loading icon when the loading property is set to true', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block loading="true"></se-block>`,
		});
		expect(page.root.shadowRoot.querySelector('se-loading')).toBeTruthy();
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

	it('should set the card option to block-header, block-content, and block-footer elements when se-block has the option set to card', () => {
		block.option = 'card';
		let header = document.createElement('se-block-header');
		let content = document.createElement('se-block-content');
		let footer = document.createElement('se-block-footer');
		block.el.appendChild(header);
		block.el.appendChild(content);
		block.el.appendChild(footer);
		block.componentWillLoad();
		expect(header.option).toEqual('card');
		expect(content.option).toEqual('card');
		expect(footer.option).toEqual('card');
	});

	it('should set the widget option only to block-content elements when se-block has the option set to widget', () => {
		block.option = 'widget';
		let header = document.createElement('se-block-header');
		let content = document.createElement('se-block-content');
		let footer = document.createElement('se-block-footer');
		block.el.appendChild(header);
		block.el.appendChild(content);
		block.el.appendChild(footer);
		block.updateItemMode();
		expect(header.option).toEqual('widget');
		expect(content.option).toEqual('widget');
		expect(footer.option).toEqual('widget');
	});
});