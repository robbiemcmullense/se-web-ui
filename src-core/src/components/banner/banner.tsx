import { Component, Element, h, State, Prop, Listen } from "@stencil/core";

@Component({
	tag: "se-banner",
	styleUrl: "banner.scss",
	shadow: true
})
export class BannerComponent {
	/**
	 * Set the duration (in ms) that the banner will automatically switch slides.
	 * Default is `6000`.
	 */
	@Prop() duration: number = 6000;
	@Element() el: HTMLElement;
	bannerEl?: HTMLElement;
	bannerIndicatorEl?: HTMLElement;
	@State() items: HTMLElement[] = [];
	@State() selectedItem?: any;
	@State() selectedItemIndex?: number;
	interval: any;
	xStart: any;
	xEnd: any;
	direction: string;

	@Listen('touchstart', {target: 'window'})
	handleTouchStart(event: any) {
		clearInterval(this.interval);
		this.xStart = event.touches[0].clientX;
	}

	@Listen('touchmove', {target: 'window'})
	handleTouchMove(event: any) {
		this.xEnd = event.touches[0].clientX;
		let xDiff = this.xStart - this.xEnd;
		if (xDiff > 0) {
			this.changeActive('next');
		} else {
			this.changeActive('previous');
		}
	}

	@Listen('resize', {target: 'window'})
	windowSizeDidChange() {
		this.setIconSize();
	}

	private setActiveItem(item: any): void {
		if (this.items.length) {
			this.items.forEach((item: any) => {
				item.active = false;
			});
			item.active = true;
			this.assignSelectedItem(item);
		}
	}

	private assignSelectedItem(item: any) {
		this.xStart = undefined;
		this.xEnd = undefined;
		this.selectedItem = item;
		this.selectedItemIndex = this.items.indexOf(item);
		this.bannerIndicatorEl.style.right = '' + this.selectedItemIndex * 100 + '%';
		if (this.duration > 500) {
			this.interval = setInterval(() => {
				// Rotate carousel to the right based on the specified duration.
				// Must be greater than 500ms, as it takes that amount of time to switch slides.
				this.changeActive('next')
			}, this.duration);
		}
	}

	private changeActive(index: string) {
		// reset timer to rotate when clicking on arrow button
		clearInterval(this.interval);
		let item;
		if (index === 'previous') {
			item = this.items[this.selectedItemIndex - 1] || this.items[this.items.length - 1];
		}
		if (index === 'next') {
			item = this.items[this.selectedItemIndex + 1] || this.items[0];
		}
		this.setActiveItem(item);
	}

	rotateCarousel() {
		return this.changeActive('next');
	}

	renderList() {
		return this.items.map((item: any) => {
			return [
				<li class={{ 'active': item.active }} />,
			]
		})
	}

	setBannerItemWidth() {
		this.items = Array.from(this.el.querySelectorAll('se-banner-item'));
		if (this.items.length) {
			this.items.forEach((item: any) => {
				item.style.width = '' + 100 / this.items.length + '%';
			});
		}
	}

	setIconSize() {
		let icons = Array.from(this.el.shadowRoot.querySelectorAll('se-icon'));
		icons.forEach((icon: any) => {
			if (window.innerWidth > 1280) {
				icon.size = 'xlarge';
			} else if (window.innerWidth > 767) {
				icon.size = 'large';
			} else {
				icon.size = 'small';
			}
		});
	}

	componentDidLoad() {
		this.setBannerItemWidth();
		this.setActiveItem(this.items[0]);
		this.setIconSize();
	}

	componentDidUpdate() {
		this.setIconSize();
	};

	componentDidUnload() {
		clearInterval(this.interval);
		this.items.length = 0;
		this.selectedItem = undefined;
		this.selectedItemIndex = undefined;
	}

	render() {
		return [
			<div class="se-banner" ref={el => this.bannerEl = el}>
				<div class="banner-items" ref={el => this.bannerIndicatorEl = el} style={{ width: '' + this.items.length * 100 + '%' }}>
					<slot></slot>
				</div>
				{this.items.length > 1 ? [
					<ol class="banner-indicators">
						{this.renderList()}
					</ol>,
					<se-icon class="previous-indicator" onClick={() => this.changeActive('previous')}>
						arrow2_left
					</se-icon>,
					<se-icon class="next-indicator" onClick={() => this.changeActive('next')}>
						arrow2_right
					</se-icon>]
					: ''}
			</div>
		];
	}
}