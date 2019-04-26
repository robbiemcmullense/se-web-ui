import { SnackbarComponent } from "./snackbar";

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
});