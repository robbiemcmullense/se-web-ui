import { AuthenticationComponent } from './authentication';
import { newSpecPage } from "@stencil/core/testing"; 

describe('AuthenticationComponent', () => {
	let component;

	beforeEach(() => {
		component = new AuthenticationComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

	it('should not be hidden by default', () => {
		expect(component.hide).toBeFalsy();
	});

	it('should populate link, domain, and copyright information from the app info file', () => {
		expect(component.link).toEqual('www.schneider-electric.com');
		expect(component.domain).toEqual('ecostruxure');
		expect(component.copyright).toEqual('This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.');
	});

	it('should render with the ecostruxure icon by default', async() => {
		const page = await newSpecPage({
			components: [AuthenticationComponent],
			html: `<se-authentication></se-authentication>`,
		});
		expect(page.root).toEqualHtml(`
			<se-authentication>
				<mock:shadow-root>
					<div class="se-authentication">
						<div class="content-wrapper">
							<div class="image-container">
								<img class="image-background"></img>
							</div>
							<main>
								<div class="green-bars">
									<div class="dark-green-bar"></div>
									<div class="light-green-bar"></div>
								</div>
							</main>
							<div class="login-container">
								<div class="information">
									<se-icon-ecostruxure size="medium"></se-icon-ecostruxure>
									<h1 class="header-title">
										<span></span>
										<span class="light"></span>
									</h1>
									<p class="version">version</p>
								</div>
								<div class="form">
									<slot></slot>
								</div>
							</div>
							<footer>
								<div class="copyright-note">
									<span>This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.</span>
								</div>
								<div class="footer-logo align-end">
									<se-icon-lifeison></se-icon-lifeison>
								</div>
							</footer>
						</div>
					</div>
				</mock:shadow-root>
			</se-authentication>
		`);
	});

	it('should render without the ecostruxure icon when the domain is set to a custom value', async() => {
		const page = await newSpecPage({
			components: [AuthenticationComponent],
			html: `<se-authentication domain="my domain"></se-authentication>`,
		});
		expect(page.root).toEqualHtml(`
			<se-authentication domain="my domain">
				<mock:shadow-root>
					<div class="se-authentication">
						<div class="content-wrapper">
							<div class="image-container">
								<img class="image-background"></img>
							</div>
							<main>
								<div class="green-bars">
									<div class="dark-green-bar"></div>
									<div class="light-green-bar"></div>
								</div>
							</main>
							<div class="login-container">
								<div class="information">
								<span class="header-title-type">my domain</span>
									<h1 class="header-title">
										<span></span>
										<span class="light"></span>
									</h1>
									<p class="version">version</p>
								</div>
								<div class="form">
									<slot></slot>
								</div>
							</div>
							<footer>
								<div class="copyright-note">
									<span>This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.</span>
								</div>
								<div class="footer-logo align-end">
									<se-icon-lifeison></se-icon-lifeison>
								</div>
							</footer>
						</div>
					</div>
				</mock:shadow-root>
			</se-authentication>
		`);
	});

	it('should not render a domain value or ecostruxure icon when "none" is the domain value', async() => {
		const page = await newSpecPage({
			components: [AuthenticationComponent],
			html: `<se-authentication domain="none"></se-authentication>`,
		});
		expect(page.root).toEqualHtml(`
			<se-authentication domain="none">
				<mock:shadow-root>
					<div class="se-authentication">
						<div class="content-wrapper">
							<div class="image-container">
								<img class="image-background"></img>
							</div>
							<main>
								<div class="green-bars">
									<div class="dark-green-bar"></div>
									<div class="light-green-bar"></div>
								</div>
							</main>
							<div class="login-container">
								<div class="information">
									<h1 class="header-title">
										<span></span>
										<span class="light"></span>
									</h1>
									<p class="version">version</p>
								</div>
								<div class="form">
									<slot></slot>
								</div>
							</div>
							<footer>
								<div class="copyright-note">
									<span>This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.</span>
								</div>
								<div class="footer-logo align-end">
									<se-icon-lifeison></se-icon-lifeison>
								</div>
							</footer>
						</div>
					</div>
				</mock:shadow-root>
			</se-authentication>
		`);
	});

	it('should render with the hide class when the hide option is set to true, and not render the main markup', async() => {
		const page = await newSpecPage({
			components: [AuthenticationComponent],
			html: `<se-authentication hide="true"></se-authentication>`,
		});
		expect(page.root).toEqualHtml(`
			<se-authentication hide="true">
				<mock:shadow-root>
					<div class="se-authentication hide">			
					</div>
				</mock:shadow-root>
			</se-authentication>
		`);
	});
});