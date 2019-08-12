import { AppComponent } from './app';
import { newSpecPage } from "@stencil/core/testing"; 

describe('AppComponent', () => {
	let app;

	beforeEach(() => {
		app = new AppComponent();
	});

	it('should build', () => {
		expect(app).toBeTruthy();
	});

	it('should have a technical option by default', () => {
		expect(app.option).toEqual('technical');
	});

	it('should render in with the se-font-technical class by default', async() => {
		const page = await newSpecPage({
			components: [AppComponent],
			html: `<se-app></se-app>`,
		});
		expect(page.root).toEqualHtml(`
			<se-app>
				<div class="se-app-body se-font-technical"></div>
			</se-app>
		`);
	});
});