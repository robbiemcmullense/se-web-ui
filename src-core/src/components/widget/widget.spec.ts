import { WidgetComponent } from "./widget";

describe('WidgetComponent', () => {
	let widget;

	beforeEach(() => {
		widget = new WidgetComponent();
	});

	it('should build', () => {
		expect(widget).toBeTruthy();
	});

	it('should have an alternative color by default', () => {
		expect(widget.color).toBe('alternative');
	});

	it('should not be loading by default', () => {
		expect(widget.loading).toBe(false);
	});
});