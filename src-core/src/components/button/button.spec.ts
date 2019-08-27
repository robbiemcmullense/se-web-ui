import { ButtonComponent } from './button';
import { newSpecPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
	let button;

	beforeEach(() => {
		button = new ButtonComponent();
	});

	it('should create a button component', () => {
		expect(button).toBeTruthy();
	});

	it('should have a "flat" option by default', () => {
		expect(button.option).toEqual('flat');
	});

	it('should have a small size by default', () => {
		expect(button.size).toEqual('small');
	});

	it('should have a "standard" color property by default', () => {
		expect(button.color).toEqual('standard');
	});

	it('should have a "button" type property by default', () => {
		expect(button.type).toEqual('button');
	});

	it('should not have a defined selected state initially', () => {
		expect(button.selected).toBeUndefined();
	});

	it('should not be disabled by default', () => {
		expect(button.disabled).toBeFalsy();
	});

	it('should not have an undefined block value', () => {
		expect(button.block).toBeUndefined();
	});

	it('should set the disabled property to true after calling the setDisabled method', () => {
    button.setDisabled(true);
		expect(button.disabled).toBeTruthy();
	});

	it('should set the disabled property to false after calling the setDisabled method', () => {
    button.setDisabled(false);
		expect(button.disabled).toBeFalsy();
	});

	it('should set the grouped property to true after calling the setGrouped method', () => {
    button.setGrouped(true);
		expect(button.grouped).toBeTruthy();
	});

	it('should have a primary color and the block property set to true when set to the "login" option', () => {
		button.option = 'login';
		button.optionDidChange();
		expect(button.color).toEqual('primary');
		expect(button.block).toBeTruthy();
	});

	it('should have a secondary color and the block property set to true when set to the "signup" option', () => {
		button.option = 'signup';
		button.optionDidChange();
		expect(button.color).toEqual('secondary');
		expect(button.block).toBeTruthy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [ButtonComponent],
			html: `<se-button></se-button>`,
		});
		expect(page.root).toEqualHtml(`
			<se-button>
				<mock:shadow-root>
					<button class="flat small standard" type="button"></button>
				</mock:shadow-root>
			</se-button>
		`);
	});

	it('should render with an icon element when the button has an icon', async() => {
		const page = await newSpecPage({
			components: [ButtonComponent],
			html: `<se-button icon="my icon"></se-button>`,
		});
		expect(page.root).toEqualHtml(`
			<se-button icon="my icon">
				<mock:shadow-root>
					<button class="flat hasIcon small standard" type="button">
						<span class="se-icon">my icon</span>
					</button>
				</mock:shadow-root>
			</se-button>
		`);
	});

	it('should render with an span element that has class equal to text when the button has inner html markup', async() => {
		const page = await newSpecPage({
			components: [ButtonComponent],
			html: `<se-button>label</se-button>`,
		});
		expect(page.root).toEqualHtml(`
			<se-button>
				<mock:shadow-root>
					<button class="flat hasChild small standard" type="button">
						<span class="text"><slot></slot></span>
					</button>
				</mock:shadow-root>
				label
			</se-button>
		`);
	});

	it('should call the optionDidChange function when the componentWillLoad function is called', async() => {
		const eventSpy = jest.spyOn(button, 'optionDidChange');
		button.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the setButtonId function when the componentDidLoad function is called', async() => {
		const eventSpy = jest.spyOn(button, 'setButtonId');
		button.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should emit the didClick event when the button is part of a group', () => {
		button.grouped = true;
		const eventSpy = jest.spyOn(button.didClick, 'emit');
		button.toggle();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should emit the didClick event when the button is a minifab', () => {
		button.option = 'minifab';
		const eventSpy = jest.spyOn(button.didClick, 'emit');
		button.toggle();
		expect(eventSpy).toHaveBeenCalled();
	});
});
