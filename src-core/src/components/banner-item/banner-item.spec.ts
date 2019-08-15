import { BannerItemComponent } from './banner-item';
import { newSpecPage } from '@stencil/core/testing';

describe('BannerItemComponent', () => {
	let bannerItem;

	beforeEach(() => {
		bannerItem = new BannerItemComponent();
	});

	it('should build', () => {
		expect(bannerItem).toBeTruthy();
	});

	it('should not have an initially defined image url', () => {
		expect(bannerItem.imageUrl).toBeUndefined();
	});

	it('should not be active by default', () => {
		expect(bannerItem.active).toBeFalsy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BannerItemComponent],
			html: `<se-banner-item></se-banner-item>`,
		});
		expect(page.root).toEqualHtml(`
			<se-banner-item>
				<mock:shadow-root>
					<div class="image-container">
						<img class="image-background"/>
						<div class="background-overlay"></div>
					</div>
					<div class="banner-section-wrapper">
						<slot></slot>
					</div>
				</mock:shadow-root>
			</se-banner-item>
		`);
	});

	it('should call setBlockTransparency twice, when the component loads and when it updates', () => {
		const eventSpy = jest.spyOn(bannerItem, 'setBlockTransparency');
		bannerItem.componentWillLoad();
		bannerItem.componentWillUpdate();
		expect(eventSpy).toHaveBeenCalledTimes(2);
	});

	it('should call setButtonClass twice, when the component loads and when it updates', () => {
		const eventSpy = jest.spyOn(bannerItem, 'setButtonClass');
		bannerItem.componentWillLoad();
		bannerItem.componentWillUpdate();
		expect(eventSpy).toHaveBeenCalledTimes(2);
	});

	it('should emit the didChange event when the item becomes inactive', () => {
		bannerItem.active = true;
		const eventSpy = jest.spyOn(bannerItem.didChange, 'emit');
		bannerItem.activeDidChange();
		expect(eventSpy).toHaveBeenCalled();
	});
});