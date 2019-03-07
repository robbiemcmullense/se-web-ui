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
		expect(snackbar.type).toBe('information');
	});

	it('should not be open by default', () => {
		expect(snackbar.open).toBe(false);
	});
});