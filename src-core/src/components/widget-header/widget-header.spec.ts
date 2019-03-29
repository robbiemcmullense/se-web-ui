import { WidgetHeader} from "./widget-header";

describe('WidgetHeader', () => {
	let widgetHeader;

	beforeEach(() => {
		widgetHeader = new WidgetHeader();
	});

	it('should build', () => {
		expect(widgetHeader).toBeTruthy();
	});
});