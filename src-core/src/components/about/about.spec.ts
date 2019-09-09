import { AboutComponent } from './about';
import { newSpecPage } from "@stencil/core/testing"; 

describe('AboutComponent', () => {
	let component;

	beforeEach(() => {
		component = new AboutComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

	it('should populate link, domain, and copyright information from the app info file', () => {
		expect(component.link).toEqual('www.schneider-electric.com');
		expect(component.domain).toEqual('ecostruxure');
		expect(component.copyright).toEqual('This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.');
	});

	it('should render with the ecostruxure icon by default', async() => {
		const page = await newSpecPage({
			components: [AboutComponent],
			html: `<se-about></se-about>`,
		});
		expect(page.root).toEqualHtml(`
			<se-about>
				<mock:shadow-root>
					<div class="image-container">
        		<img class="image-background"/>
      		</div>
					<div class="about-section-wrapper">
						<div class="information">
								<se-icon-ecostruxure size="medium" color="inherited"></se-icon-ecostruxure>
							<h1 class="header-title">
								<span></span>
								<span class="light"></span>
							</h1>
							<p class="version">version </p>
						</div>
						<div class="more-information">
							<div class="background-light"></div>
							<div class="content-info">
								<span>This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.</span>
							</div>
						</div>
					</div>
				</mock:shadow-root>
			</se-about>
		`);
	});

	it('should render without the ecostruxure icon when the domain is set to a custom value', async() => {
		const page = await newSpecPage({
			components: [AboutComponent],
			html: `<se-about domain="my domain"></se-about>`,
		});
		expect(page.root).toEqualHtml(`
			<se-about domain="my domain">
				<mock:shadow-root>
					<div class="image-container">
        		<img class="image-background"/>
      		</div>
					<div class="about-section-wrapper">
						<div class="information">
							<span class="header-title-type">my domain</span>
							<h1 class="header-title">
								<span></span>
								<span class="light"></span>
							</h1>
							<p class="version">version </p>
						</div>
						<div class="more-information">
							<div class="background-light"></div>
							<div class="content-info">
								<span>This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.</span>
							</div>
						</div>
					</div>
				</mock:shadow-root>
			</se-about>
		`);
	});

	it('should not render a domain value or ecostruxure icon when "none" is the domain value', async() => {
		const page = await newSpecPage({
			components: [AboutComponent],
			html: `<se-about domain="none"></se-about>`,
		});
		expect(page.root).toEqualHtml(`
			<se-about domain="none">
				<mock:shadow-root>
					<div class="image-container">
        		<img class="image-background"/>
      		</div>
					<div class="about-section-wrapper">
						<div class="information">
							<h1 class="header-title">
								<span></span>
								<span class="light"></span>
							</h1>
							<p class="version">version </p>
						</div>
						<div class="more-information">
							<div class="background-light"></div>
							<div class="content-info">
								<span>This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.</span>
							</div>
						</div>
					</div>
				</mock:shadow-root>
			</se-about>
		`);
	});
});