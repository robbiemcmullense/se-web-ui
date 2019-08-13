import { RadioGroupComponent } from './radio-group';
import { newSpecPage } from '@stencil/core/testing';

describe('RadioGroupComponent', () => {
	let radioGroup;

	beforeEach(() => {
		radioGroup = new RadioGroupComponent();
	});

	it('should create a Radio Group component', () => {
		expect(radioGroup).toBeTruthy();
	});

	it('should not be disabled by default', () => {
		expect(radioGroup.disabled).toBeFalsy();
	});

	it('should be the standard color by default', () => {
		expect(radioGroup.color).toEqual('standard');
	});

	it('should have a small size by default', () => {
		expect(radioGroup.size).toEqual('small');
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group></se-radio-group>`,
		});
		expect(page.root).toEqualHtml(`
			<se-radio-group>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</se-radio-group>
		`);
	});

	it('calls the updateItemMode function when the component loads', () => {
		const eventSpy = jest.spyOn(radioGroup, 'updateItemMode')
		radioGroup.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('calls the handleEventChange function twice, when a button or radio element is clicked', () => {
		const event = {detail: {value: 'my value'}};
		const eventSpy = jest.spyOn(radioGroup, 'handleEventChange');
		radioGroup.buttonClickedHandler(event, 'se-button');
		radioGroup.radioButtonCheckedHandler(event, 'se-radio');
		expect(eventSpy).toHaveBeenCalledTimes(2);
	});
});
