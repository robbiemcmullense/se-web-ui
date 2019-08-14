import { SidemenuComponent } from "./sidemenu";
import { newSpecPage } from '@stencil/core/testing';

describe('SidemenuComponent', () => {
	let sidemenu;

	beforeEach(() => {
		sidemenu = new SidemenuComponent();
	});

	it('should build', () => {
		expect(sidemenu).toBeTruthy();
	});

	it('should have a label property equal to "Menu" by default', () => {
		expect(sidemenu.label).toEqual('Menu');
	});

	it('should be closed by default', () => {
		expect(sidemenu.open).toBeFalsy();
	});

	it('should open the sidemenu when the toggle method is called', () => {
		sidemenu.toggle();
		expect(sidemenu.open).toBeTruthy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [SidemenuComponent],
			html: `<se-sidemenu></se-sidemenu>`,
		});
		expect(page.root).toEqualHtml(`
			<se-sidemenu>
				<mock:shadow-root>
					<div class="menu-background animated d-flex-row flex"></div>
					<div class="actual-menu animated full-content d-flex-column flex">
						<div class="d-flex flex">
							<div class="listNavItems">
								<div class="d-flex-center flex">
									<span class="menu-sidenav">
										<se-icon size="large" color="primary">test_results_nok</se-icon>
									</span>
									<h3 class="header-title">Menu</h3>
								</div>
								<se-divider></se-divider>
								<se-list option="nav">
								</se-list>
								<se-icon-lifeison color="standard"></se-icon-lifeison>
								<div class="external-link">
									<se-link class="sidemenu-link" url="http://www.se.com/en/partners">www.se.com/en/partners</se-link>
								</div>
							</div>
							<se-divider option="vertical"></se-divider>
							<se-block>
								<slot></slot>
							</se-block>
						</div>
					</div>
				</mock:shadow-root>
			</se-sidemenu>
		`);
	});

	it('should render with 1 sidemenu item', async() => {
		const page = await newSpecPage({
			components: [SidemenuComponent],
			html: `<se-sidemenu><se-sidemenu-item></se-sidemenu-item></se-sidemenu>`,
		});
		expect(page.root).toEqualHtml(`
			<se-sidemenu>
				<mock:shadow-root>
					<div class="menu-background animated d-flex-row flex"></div>
					<div class="actual-menu animated full-content d-flex-column flex">
						<div class="d-flex flex">
							<div class="listNavItems">
								<div class="d-flex-center flex">
									<span class="menu-sidenav">
										<se-icon size="large" color="primary">test_results_nok</se-icon>
									</span>
									<h3 class="header-title">Menu</h3>
								</div>
								<se-divider></se-divider>
								<se-list option="nav">
									<se-list-item class="hide-nav-icon sidemenu-list-item" option="nav"></se-list-item>
								</se-list>
								<se-icon-lifeison color="standard"></se-icon-lifeison>
								<div class="external-link">
									<se-link class="sidemenu-link" url="http://www.se.com/en/partners">www.se.com/en/partners</se-link>
								</div>
							</div>
							<se-divider option="vertical"></se-divider>
							<se-block>
								<slot></slot>
							</se-block>
						</div>
					</div>
				</mock:shadow-root>
				<se-sidemenu-item></se-sidemenu-item>
			</se-sidemenu>
		`);
	});

	it('should render with 1 sidemenu item, along with the menu item content', async() => {
		const page = await newSpecPage({
			components: [SidemenuComponent],
			html: `<se-sidemenu><se-sidemenu-item><div></div></se-sidemenu-item></se-sidemenu>`,
		});
		expect(page.root).toEqualHtml(`
			<se-sidemenu>
				<mock:shadow-root>
					<div class="menu-background animated d-flex-row flex"></div>
					<div class="actual-menu animated full-content d-flex-column flex">
						<div class="d-flex flex">
							<div class="listNavItems">
								<div class="d-flex-center flex">
									<span class="menu-sidenav">
										<se-icon size="large" color="primary">test_results_nok</se-icon>
									</span>
									<h3 class="header-title">Menu</h3>
								</div>
								<se-divider></se-divider>
								<se-list option="nav">
									<se-list-item class="sidemenu-list-item" option="nav"></se-list-item>
								</se-list>
								<se-icon-lifeison color="standard"></se-icon-lifeison>
								<div class="external-link">
									<se-link class="sidemenu-link" url="http://www.se.com/en/partners">www.se.com/en/partners</se-link>
								</div>
							</div>
							<se-divider option="vertical"></se-divider>
							<se-block>
								<slot></slot>
							</se-block>
						</div>
					</div>
				</mock:shadow-root>
				<se-sidemenu-item><div></div></se-sidemenu-item>
			</se-sidemenu>
		`);
	});

	it('should call the addAnimation method when the toggle method is called and the sidemenu is closed', () => {
		sidemenu.menuInnerEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		sidemenu.backdropEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		const eventSpy = jest.spyOn(sidemenu, 'addAnimation');
		sidemenu.toggle();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the removeAnimation method when the toggle method is called and the sidemenu is open', () => {
		sidemenu.open = true;
		sidemenu.menuInnerEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		sidemenu.backdropEl = {classList: {
			add: (value: any) => { return value;},
			remove: (value: any) => { return value;}
		}};
		const eventSpy = jest.spyOn(sidemenu, 'removeAnimation');
		sidemenu.toggle();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should set the selected item to undefined when componentDidUnload is called', () => {
		sidemenu.selectedItem = 'selected item';
		sidemenu.componentDidUnload();
		expect(sidemenu.selectedItem).toBeUndefined();
	});

	it('should set the menuInnerEl width to 250px by default', () => {
		const item = 'my item';
		sidemenu.menuInnerEl = {style: {}};
		sidemenu.setActive(item);
		expect(sidemenu.menuInnerEl.style.width).toEqual('250px');
	});
});