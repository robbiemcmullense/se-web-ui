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

	it('should render with an se-icon by default', async() => {
		const page = await newSpecPage({
			components: [BreadcrumbItemComponent],
			html: `<se-breadcrumb-item></se-breadcrumb-item>`,
		});
		expect(page.root).toEqualHtml(`
			<se-breadcrumb-item>
				<mock:shadow-root>
					<div>
						<li class="breadcrumb-item"><a><slot></slot></a></li>
						<se-icon size="small">arrow2_right</se-icon>
					</div>
				</mock:shadow-root>
			</se-breadcrumb-item>
		`);
	});

	it('should render without an icon because it is the last item', async() => {
		const page = await newSpecPage({
			components: [BreadcrumbItemComponent],
			html: `<se-breadcrumb-item is-last="true"></se-breadcrumb-item>`,
		});
		expect(page.root).toEqualHtml(`
			<se-breadcrumb-item is-last="true">
				<mock:shadow-root>
					<div class="selected">
						<li aria-current='page' class="breadcrumb-item"><slot></slot></li>
					</div>
				</mock:shadow-root>
			</se-breadcrumb-item>
		`);
	});
});