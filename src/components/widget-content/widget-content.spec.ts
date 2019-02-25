import { WidgetContent} from "./widget-content";

describe('WidgetContent', () => {
	let widgetContent;

	beforeEach(() => {
		widgetContent = new WidgetContent();
	});

	it('should build', () => {
		expect(widgetContent).toBeTruthy();
	});
});