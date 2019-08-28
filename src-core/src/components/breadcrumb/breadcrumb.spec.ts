import '../mutation-observer-mock';
import { BreadcrumbComponent } from "./breadcrumb";
import { newSpecPage } from '@stencil/core/testing';

describe('BreadcrumbComponent', () => {
	let breadcrumb;

	beforeEach(() => {
		breadcrumb = new BreadcrumbComponent();
	});

	it('should build', () => {
		expect(breadcrumb).toBeTruthy();
	});

	it('should not have any items by default', () => {
		expect(breadcrumb.items.length).toEqual(0);
	});

	it('should have a defined element property', () => {
		expect(breadcrumb.el).toBeDefined();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BreadcrumbComponent],
			html: `<se-breadcrumb></se-breadcrumb>`,
		});
		expect(page.root).toEqualHtml(`
			<se-breadcrumb>
				<mock:shadow-root>
					<nav aria-label="breadcrumb">
						<ol>
							<slot></slot>
						</ol>
					</nav>
				</mock:shadow-root>
			</se-breadcrumb>
		`);
	});

	it('should render with two breadcrumb items', async() => {
		const page = await newSpecPage({
			components: [BreadcrumbComponent],
			html: `<se-breadcrumb><se-breadcrumb-item>First</se-breadcrumb-item><se-breadcrumb-item>Second</se-breadcrumb-item></se-breadcrumb>`,
		});
		expect(page.root).toEqualHtml(`
			<se-breadcrumb>
				<mock:shadow-root>
					<nav aria-label="breadcrumb">
						<ol>
							<slot></slot>
						</ol>
					</nav>
				</mock:shadow-root>
				<se-breadcrumb-item>First</se-breadcrumb-item>
				<se-breadcrumb-item>Second</se-breadcrumb-item>
			</se-breadcrumb>
		`);
	});

	it('should call the updateLastItem function when componentWillLoad is executed', () => {
		const eventSpy = jest.spyOn(breadcrumb, 'updateLastItem');
		breadcrumb.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the watchItemList function when componentWillLoad is executed', () => {
		const eventSpy = jest.spyOn(breadcrumb, 'watchItemList');
		breadcrumb.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should assign a mutation observer for Edge browsers when componentDidLoad is called', () => {
		breadcrumb.observer = {observe: jest.fn()};
		const eventSpy = jest.spyOn(breadcrumb.observer, 'observe');
		Object.defineProperty(window.navigator, 'userAgent', {value: 'Edge'});
		breadcrumb.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should disconnect the mutation observer when componentDidUnload is called', () => {
		breadcrumb.observer = {disconnect: jest.fn()};
		const eventSpy = jest.spyOn(breadcrumb.observer, 'disconnect');
		breadcrumb.componentDidUnload();
		expect(eventSpy).toHaveBeenCalled();
	});
});
