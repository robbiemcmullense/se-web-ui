import { WidgetComponent } from "./widget";

describe('WidgetComponent', () => {
	let widget;

	beforeEach(() => {
		widget = new WidgetComponent();
	});

	it('should build', () => {
		expect(widget).toBeTruthy();
	});
});