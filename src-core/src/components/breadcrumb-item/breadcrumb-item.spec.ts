import { BreadcrumbItemComponent } from "./breadcrumb-item";

describe('BreadcrumbItemComponent', () => {
	let breadcrumbItem;

	beforeEach(() => {
		breadcrumbItem = new BreadcrumbItemComponent();
	});

	it('should build', () => {
		expect(breadcrumbItem).toBeTruthy();
	});

	it('should not be selected by default', () => {
		expect(breadcrumbItem.selected).toBeFalsy();
	});

	it('should not have an initially defined value', () => {
		expect(breadcrumbItem.value).toBeUndefined();
	});

	it('should not have an initially defined href', () => {
		expect(breadcrumbItem.href).toBeUndefined();
	});
});