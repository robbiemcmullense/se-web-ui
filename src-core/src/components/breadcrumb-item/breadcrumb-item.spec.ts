import { BreadcrumbItemComponent } from "./breadcrumb-item";
import { newSpecPage } from '@stencil/core/testing';

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

	it('should render with a right-arrowed se-icon by default', async() => {
		const page = await newSpecPage({
			components: [BreadcrumbItemComponent],
			html: `<se-breadcrumb-item></se-breadcrumb-item>`,
		});
		expect(page.root.shadowRoot.querySelector('se-icon').innerText).toEqual('arrow2_right');
	});

	it('should render without an icon because it is the last item', async() => {
		const page = await newSpecPage({
			components: [BreadcrumbItemComponent],
			html: `<se-breadcrumb-item is-last="true"></se-breadcrumb-item>`,
		});
		expect(page.root.shadowRoot.querySelector('se-icon')).toBeFalsy();
	});
});