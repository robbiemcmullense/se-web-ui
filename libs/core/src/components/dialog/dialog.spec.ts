import { DialogComponent} from "./dialog";
import { newSpecPage } from '@stencil/core/testing';

describe('DialogComponent', () => {
	let dialogComponent;

	beforeEach(() => {
		dialogComponent = new DialogComponent();
		dialogComponent.menuInnerEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		dialogComponent.backdropEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
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

	it('should render with a medium class to reflect the default medium size', async() => {
		const page = await newSpecPage({
			components: [DialogComponent],
			html: `<se-dialog></se-dialog>`,
		});
		expect(page.root.shadowRoot.querySelector('.dialog-wrapper.medium')).toBeTruthy();
	});

	it('should render with the large class when the size is large', async() => {
		const page = await newSpecPage({
			components: [DialogComponent],
			html: `<se-dialog size="large"></se-dialog>`,
		});
		expect(page.root.shadowRoot.querySelector('.dialog-wrapper.large')).toBeTruthy();
	});

	it('should call the colorDidChange and openDidChange functions when the component loads', async() => {
		const colorEventSpy = jest.spyOn(dialogComponent, 'assignDialogHeaderColor');
		const openEventSpy = jest.spyOn(dialogComponent, 'openDidChange');
		dialogComponent.componentDidLoad();
		expect(colorEventSpy).toHaveBeenCalled();
		expect(openEventSpy).toHaveBeenCalled();
	});

	it('should call the addAnimation function when openDidChange is called and the dialog is open', async() => {
		dialogComponent.open = true;
		const eventSpy = jest.spyOn(dialogComponent, 'addAnimation');
		dialogComponent.openDidChange();  // use case when the dialog opens
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the removeAnimation function when openDidChange is called', async() => {
		const eventSpy = jest.spyOn(dialogComponent, 'removeAnimation');
		dialogComponent.openDidChange(); // use case when the dialog closes
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the backdropClicked method, emitting the backdrop event when the handleKeyDown event occurs', () => {
		dialogComponent.open = true;
		const event = {key: 'Escape'};
		const eventSpy = jest.spyOn(dialogComponent.backdrop, 'emit');
		dialogComponent.handleKeyDown(event);  // user presses ESC button when dialog is open
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should set the alternative color property to the dialog header when the se-dialog color is set to alternative', () => {
		dialogComponent.color = 'alternative';
		let header = document.createElement('se-dialog-header');
		dialogComponent.el.appendChild(header);
		dialogComponent.componentDidLoad();
		expect(header.color).toEqual('alternative');
	});
});