import { Component, Element, h, State, Prop } from "@stencil/core";

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
	bannerIndicatorEl?: HTMLElement;
	@State() items: HTMLElement[] = [];
	@State() selectedItem?: any;
	@State() selectedItemIndex?: number;
	interval: any;

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
		//reset timer to rotate when clicking on arrow button
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

	componentDidLoad() {
		this.items = Array.from(this.el.querySelectorAll('se-banner-item'));
		if (this.items.length) {
			this.items.forEach((item: any) => {
				item.style.width = '' + 100 / this.items.length + '%';
			});
			this.setActiveItem(this.items[0]);
		}
	}

	componentDidUpdate() {
		let listItems = Array.from(this.el.querySelectorAll('li'));
		if (listItems.length) {
			listItems.forEach((listItem: any) => {
				listItem.classList.remove('active');
			});
			listItems[this.selectedItemIndex].classList.add('active');
		}
	}

	componentDidUnload() {
		clearInterval(this.interval);
		this.items.length = 0;
		this.selectedItem = undefined;
		this.selectedItemIndex = undefined;
	}

	render() {
		return [
			<div class="se-banner">
				<div class="banner-items" ref={el => this.bannerIndicatorEl = el} style={{ width: '' + this.items.length * 100 + '%' }}>
					<slot></slot>
				</div>
				{this.items.length > 1 ? [
					<ol class="banner-indicators">
						{this.renderList()}
					</ol>,
					<div class="previous-indicator" onClick={() => this.changeActive('previous')}>
						arrow2_left
					</div>,
					<div class="next-indicator" onClick={() => this.changeActive('next')}>
						arrow2_right
					</div>]
					: ''}
			</div>
		];
	}
}