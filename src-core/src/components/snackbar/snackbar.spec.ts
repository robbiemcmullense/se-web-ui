import { SnackbarComponent } from "./snackbar";
import { newSpecPage } from '@stencil/core/testing';

describe('SnackbarComponent', () => {
	let snackbar;

	beforeEach(() => {
		snackbar = new SnackbarComponent();
	});

	it('should build', () => {
		expect(snackbar).toBeTruthy();
	});

	it('should have a type of information by default', () => {
		expect(snackbar.type).toEqual('information');
	});

	it('should have an information circle icon by default', () => {
		expect(snackbar.icon).toEqual('information_circle');
	});

	it('should not be open by default', () => {
		expect(snackbar.open).toBe(false);
	});

	it('should not be closeable by default', () => {
		expect(snackbar.canClose).toBe(false);
	});

	it('should render with the information class and an information circle as that is the default option and icon', async() => {
		const page = await newSpecPage({
			components: [SnackbarComponent],
			html: `<se-snackbar></se-snackbar>`,
		});
		expect(page.root).toEqualHtml(`
			<se-snackbar>
				<mock:shadow-root>
					<div class="information">
						<div class="snackbar">
							<span class="se-icon">information_circle</span>
							<span class="message"></span>
						</div>
					</div>
				</mock:shadow-root>
			</se-snackbar>
		`);
	});

	it('should render with a span element with the close class when the canClose property is true', async() => {
		const page = await newSpecPage({
			components: [SnackbarComponent],
			html: `<se-snackbar can-close="true"></se-snackbar>`,
		});
		expect(page.root).toEqualHtml(`
			<se-snackbar can-close="true">
				<mock:shadow-root>
					<div class="information">
						<div class="snackbar">
							<span class="se-icon">information_circle</span>
							<span class="message"></span>
							<span class="close">dismiss</span>
						</div>
					</div>
				</mock:shadow-root>
			</se-snackbar>
		`);
	});

	it('should call the openDidChange function when the component loads', () => {
		const eventSpy = jest.spyOn(snackbar, 'openDidChange');
		snackbar.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should not have the show-snackbar class by default on the host element, as the open property is false by default', () => {
		snackbar.openDidChange();
		expect(snackbar.el).not.toHaveClass('show-snackbar');
	});

	it('should not have the show-snackbar class by default on the host element, as the open property is false by default', () => {
		snackbar.open = true;
		snackbar.openDidChange();
		expect(snackbar.el).toHaveClass('show-snackbar');
	});

	it('should set the open property to false when the closeSnackbar function is called', () => {
		snackbar.open = true;
		snackbar.closeSnackbar();
		expect(snackbar.open).toBeFalsy();
	});

	it('should emit the didClose event when the snackbar is closed', () => {
		const eventSpy = jest.spyOn(snackbar.didClose, 'emit');
		snackbar.closeSnackbar();
		expect(eventSpy).toHaveBeenCalled();
	});
});