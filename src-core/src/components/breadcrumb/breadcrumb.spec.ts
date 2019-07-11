import { BreadcrumbComponent } from "./breadcrumb";

describe('BreadcrumbComponent', () => {
	let breadcrumb;

	beforeEach(() => {
		breadcrumb = new BreadcrumbComponent();
	});

	it('should build', () => {
		expect(breadcrumb).toBeTruthy();
	});

	it('should not have an initially defined value', () => {
		expect(breadcrumb.value).toBeUndefined();
	});
});