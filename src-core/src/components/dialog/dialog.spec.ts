import { DialogComponent} from "./dialog";
import { newSpecPage } from '@stencil/core/testing';

describe('DialogComponent', () => {
	let dialogComponent;

	beforeEach(() => {
		dialogComponent = new DialogComponent();
	});

	it('should build', () => {
		expect(dialogComponent).toBeTruthy();
	});

	it('should be medium size by default', () => {
		expect(dialogComponent.size).toEqual('medium');
	});

	it('should be primary color by default', () => {
		expect(dialogComponent.color).toEqual('primary');
	});

	it('should not be open upon load', () => {
		expect(dialogComponent.open).toBeFalsy();
	});

	it('should have a backdrop', () => {
		expect(dialogComponent.canBackdrop).toBeTruthy();
	});

	it('should set open to false when the backdropClicked method is called', () => {
		dialogComponent.open = true;
		dialogComponent.backdropClicked();
		expect(dialogComponent.open).toBeFalsy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [DialogComponent],
			html: `<se-dialog></se-dialog>`,
		});
		expect(page.root).toEqualHtml(`
			<se-dialog>
				<mock:shadow-root>
					<div class="dialog-wrapper medium">
						<div class="dialog-background hide-dialog"></div>
						<div class="dialog hide-dialog"><slot></slot></div>
					</div>
				</mock:shadow-root>
			</se-dialog>
		`);
	});

	it('should call the colorDidChange and openDidChange functions when the component loads', async() => {
		dialogComponent.menuInnerEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		dialogComponent.backdropEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		const colorEventSpy = jest.spyOn(dialogComponent, 'colorDidChange');
		const openEventSpy = jest.spyOn(dialogComponent, 'openDidChange');
		dialogComponent.componentDidLoad();
		expect(colorEventSpy).toHaveBeenCalled();
		expect(openEventSpy).toHaveBeenCalled();
	});

	it('should call the removeAnimation function when openDidChange is called', async() => {
		dialogComponent.menuInnerEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		dialogComponent.backdropEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		const eventSpy = jest.spyOn(dialogComponent, 'removeAnimation');
		dialogComponent.openDidChange();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the addAnimation function when openDidChange is called and the dialog is open', async() => {
		dialogComponent.menuInnerEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		dialogComponent.backdropEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		dialogComponent.open = true;
		const eventSpy = jest.spyOn(dialogComponent, 'addAnimation');
		dialogComponent.openDidChange();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the backdropClicked method, emitting the backdrop event when the handleKeyDown event occurs', () => {
		dialogComponent.open = true;
		const event = {key: 'Escape'};
		const eventSpy = jest.spyOn(dialogComponent.backdrop, 'emit');
		dialogComponent.handleKeyDown(event);
		expect(eventSpy).toHaveBeenCalled();
	});
});
