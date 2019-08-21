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

	// need to see if we can update Jest to include MutationObserver
	xit('should render', async() => {
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

	// need to see if we can update Jest to include MutationObserver
	xit('should call the updateLastItem function when the component loads', async() => {
		const eventSpy = jest.spyOn(breadcrumb, 'updateLastItem');
		breadcrumb.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});
});
