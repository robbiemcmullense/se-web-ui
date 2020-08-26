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

	it('should have a alternative color by default', () => {
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
			html: `<se-block loading=true></se-block>`,
		});
		expect(page.root.shadowRoot.querySelector('se-loading')).toBeTruthy();
	});

	it('should render with a clickable-nobar class when the clickable property is set to true', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block clickable=true></se-block>`,
		});
		expect(page.root.shadowRoot.querySelector('.clickable-nobar')).toBeTruthy();
	});

	it('should render with a clickable class when the clickable is true and clickableBar is false', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block clickable="true" clickable-bar=true></se-block>`,
		});
		expect(page.root.shadowRoot.querySelector('.clickable')).toBeTruthy();
	});

	it('should render with a block-grid class on the host element when the display property is set to grid', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block display="grid"></se-block>`,
		});
		expect(page.root).toHaveClass('block-grid');
	});

	it('should render with a grid-horizontal class on the host element when display is grid and enlarged is horizontal', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block display="grid" enlarged="horizontal"></se-block>`,
		});
		expect(page.root).toHaveClass('grid-horizontal');
	});

	it('should render with a grid-horizontal class on the host element when display is grid and enlarged is vertical', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block display="grid" enlarged="vertical"></se-block>`,
		});
		expect(page.root).toHaveClass('grid-vertical');
	});

	it('should render with a grid-horizontal class on the host element when display is grid and enlarged is true', async() => {
		const page = await newSpecPage({
			components: [BlockComponent],
			html: `<se-block display="grid" enlarged="true"></se-block>`,
		});
		expect(page.root).toHaveClass('grid-large');
	});

	it('should set the card option to block-header, block-content, and block-footer elements when se-block has the option set to card', () => {
		block.option = 'card';
		const header = document.createElement('se-block-header');
		const content = document.createElement('se-block-content');
		const footer = document.createElement('se-block-footer');
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
		const header = document.createElement('se-block-header');
		const content = document.createElement('se-block-content');
		const footer = document.createElement('se-block-footer');
		block.el.appendChild(header);
		block.el.appendChild(content);
		block.el.appendChild(footer);
		block.updateItem();
		expect(header.option).toEqual('widget');
		expect(content.option).toEqual('widget');
		expect(footer.option).toEqual('widget');
	});
});
