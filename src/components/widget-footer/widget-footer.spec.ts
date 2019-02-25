import { WidgetFooter} from "./widget-footer";

describe('WidgetFooter', () => {
	let widgetFooter;

	beforeEach(() => {
		widgetFooter = new WidgetFooter();
	});

	it('should build', () => {
		expect(widgetFooter).toBeTruthy();
	});
});