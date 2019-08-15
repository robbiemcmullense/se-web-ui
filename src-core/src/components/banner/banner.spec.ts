import { BannerComponent } from './banner';
import { newSpecPage } from '@stencil/core/testing';

describe('BannerComponent', () => {
	let banner;

	beforeEach(() => {
		banner = new BannerComponent();
	});

	it('should build', () => {
		expect(banner).toBeTruthy();
	});

	it('should have an empty items array by default', () => {
		expect(banner.items.length).toEqual(0);
	});

	it('should not have a selected item by default', () => {
		expect(banner.selectedItem).toBeUndefined();
	});

	it('should not have a selected item index by default', () => {
		expect(banner.selectedItemIndex).toBeUndefined();
	});

	it('should have a duration property equal to 6000 by default', () => {
		expect(banner.duration).toEqual(6000);
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BannerComponent],
			html: `<se-banner></se-banner>`,
		});
		expect(page.root).toEqualHtml(`
			<se-banner>
				<mock:shadow-root>
					<div class="se-banner">
						<div class="banner-items" style="width: 0%;">
							<slot></slot>
						</div>
					</div>
				</mock:shadow-root>
			</se-banner>
		`);
	});

	it('should render with two banner item element', async() => {
		const page = await newSpecPage({
			components: [BannerComponent],
			html: `<se-banner><se-banner-item></se-banner-item><se-banner-item></se-banner-item></se-banner>`,
		});
		expect(page.root).toEqualHtml(`
			<se-banner>
				<mock:shadow-root>
					<div class="se-banner">
						<div class="banner-items" style="width: 200%; right: 0%;">
							<slot></slot>
						</div>
						<ol class="banner-indicators">
							<li class="active"></li>
							<li></li>
						</ol>
						<div class="previous-indicator">arrow2_left</div>
						<div class="next-indicator">arrow2_right</div>
					</div>
				</mock:shadow-root>
				<se-banner-item></se-banner-item>
				<se-banner-item></se-banner-item>
			</se-banner>
		`);
	});

	it('should call the changeActive function when the rotateCarousel method is executed', () => {
		const eventSpy = jest.spyOn(banner, 'changeActive');
		banner.rotateCarousel();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should set the selectedItem and selectedItemIndex to undefined when componentDidUnload is called', () => {
		banner.selectedItem = 'selected item';
		banner.selectedItemIndex = 2;
		banner.componentDidUnload();
		expect(banner.selectedItem).toBeUndefined();
		expect(banner.selectedItemIndex).toBeUndefined();
	});
});