import { SidemenuItemComponent } from "./sidemenu-item";
import { newSpecPage } from '@stencil/core/testing';

describe('SidemenuItemComponent', () => {
	let sidemenuItem;

	beforeEach(() => {
		sidemenuItem = new SidemenuItemComponent();
	});

	it('should build', () => {
		expect(sidemenuItem).toBeTruthy();
	});

	it('should be inactive by default', () => {
		expect(sidemenuItem.active).toBeFalsy();
	});

	it('should not have a defined item by default', () => {
		expect(sidemenuItem.item).toBeUndefined();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [SidemenuItemComponent],
			html: `<se-sidemenu-item></se-sidemenu-item>`,
		});
		expect(page.root).toEqualHtml(`
			<se-sidemenu-item role="sidenavpanel" class="navitem-hidden">
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</se-sidemenu-item>
		`);
	});

	it('should emit the didClick event when the active property changes from true to false', () => {
		sidemenuItem.active = true;
		const eventSpy = jest.spyOn(sidemenuItem.didClick, 'emit');
		sidemenuItem.activeDidChange();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should not emit the didClick event when the active property changes from false to true', () => {
		const eventSpy = jest.spyOn(sidemenuItem.didClick, 'emit');
		sidemenuItem.activeDidChange();
		expect(eventSpy).not.toHaveBeenCalled();
	});
});