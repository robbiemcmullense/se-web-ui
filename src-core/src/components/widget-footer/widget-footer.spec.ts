import { WidgetFooter} from "./widget-footer";

describe('WidgetFooter', () => {
	let widgetFooter;

	beforeEach(() => {
		widgetFooter = new WidgetFooter();
	});

	it('should build', () => {
		expect(widgetFooter).toBeTruthy();
	});

	it('should have the "row" direction by default', () => {
		expect(widgetFooter.direction).toEqual('row');
	});
});