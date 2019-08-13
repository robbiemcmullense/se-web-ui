import { HeaderComponent } from './header';
import { newSpecPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
	let header;

	beforeEach(() => {
		header = new HeaderComponent();
	});

	it('should build', () => {
		expect(header).toBeTruthy();
	});

	it('should have a domain name set to ecostruxure by default', () => {
		expect(header.domain).toEqual('ecostruxure');
	});

	it('should render with an ecostruxure icon by default', async() => {
		const page = await newSpecPage({
			components: [HeaderComponent],
			html: `<se-header></se-header>`,
		});
		expect(page.root).toEqualHtml(`
			<se-header>
				<mock:shadow-root>
					<div class="d-flex">
						<div class="d-flex-column header-title-wrapper">
							<se-icon-ecostruxure class="header-title-type"></se-icon-ecostruxure>
							<h1 class="header-title no-margin">
								<span></span>
								<span class="light"></span>
							</h1>
						</div>
					</div>
					<div class="padding-container d-flex">
						<slot name="start"></slot>
					</div>
					<div class="fill-space center-header-container">
						<slot></slot>
					</div>
					<div class="padding-container d-flex">
						<slot name="end"></slot>
						<se-icon-schneider class="header-title-type"></se-icon-schneider>
					</div>
				</mock:shadow-root>
			</se-header>
		`);
	});

	it('should render without an ecostruxure icon when a custom domain property is provided', async() => {
		const page = await newSpecPage({
			components: [HeaderComponent],
			html: `<se-header domain="my domain"></se-header>`,
		});
		expect(page.root).toEqualHtml(`
			<se-header domain="my domain">
				<mock:shadow-root>
					<div class="d-flex">
						<div class="d-flex-column header-title-wrapper">
							<span class="header-title-type">my domain</span>
							<h1 class="header-title no-margin">
								<span></span>
								<span class="light"></span>
							</h1>
						</div>
					</div>
					<div class="padding-container d-flex">
						<slot name="start"></slot>
					</div>
					<div class="fill-space center-header-container">
						<slot></slot>
					</div>
					<div class="padding-container d-flex">
						<slot name="end"></slot>
						<se-icon-schneider class="header-title-type"></se-icon-schneider>
					</div>
				</mock:shadow-root>
			</se-header>
		`);
	});
});