import { Component, Element, h, State, Prop, Listen } from "@stencil/core";
import arrow2_left from "@se/icons/svg/arrow2_left.svg";
import arrow2_right from "@se/icons/svg/arrow2_right.svg";

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
	activeIndex: number;
	interval: any;
	xStart: any;
	xEnd: any;
	observer: any;

	@Listen('touchstart', {target: 'window'}) handleTouchStart(event: any) {
		clearInterval(this.interval);
		this.xStart = event.touches[0].clientX;
	}

	@Listen('touchmove', {target: 'window'}) handleTouchMove(event: any) {
		this.xEnd = event.touches[0].clientX;
		let xDiff = this.xStart - this.xEnd;
		if (xDiff > 0) {
			this.changeActive('next');
		} else {
			this.changeActive('previous');
		}
	}

	@Listen('resize', {target: 'window'}) windowSizeDidChange() {
		this.setIconSize();
	}

	setActiveItem(item: any): void {
		if (this.items.length) {
			this.items.forEach((item: any) => {
				item.active = false;
				item.isThreeAway = false;
				item.isFourAway = false;
			});
			item.active = true;
			this.activeIndex = this.items.indexOf(item);
			this.items.forEach((item: any) => {
				let diff = Math.abs(this.items.indexOf(item) - this.activeIndex);
				if (diff == 3) {
					item.isThreeAway = true;
				}
			});
			this.assignSelectedItem(item);
		}
	}

	assignSelectedItem(item: any) {
		this.xStart = undefined;
		this.xEnd = undefined;
		this.selectedItem = item;
		this.selectedItemIndex = this.items.indexOf(item);
		this.bannerIndicatorEl.style.right = '' + this.selectedItemIndex * 100 + '%';
		this.setInterval();
	}

	changeActive(index: string) {
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

	setInterval() {
		if (this.duration > 500) {
			this.interval = setInterval(() => {
				// Rotate carousel to the right based on the specified duration.
				// Must be greater than 500ms, as it takes that amount of time to switch slides.
				this.changeActive('next');
			}, this.duration);
		}
	}

	watchItemList() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
					clearInterval(this.interval);
					this.setBannerItemWidth();
					this.setInterval();
        }
        if (mutation.removedNodes.length) {
					clearInterval(this.interval);
					this.setBannerItemWidth();
					this.setActiveItem(this.items[0]);
        }
      });
    });
		this.observer.observe(this.el, {childList: true});
  }

	renderList() {
		return this.items.map((item: any) => {
			return [
				<li class={{ 'active': item.active, 'small-indicator': item.isThreeAway, 'hide': item.isFourAway }} />,
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
				icon.size = 'medium';
			}
		});
	}

	componentWillLoad() {
		this.watchItemList();
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
			<div class="se-banner">
				<div class="banner-items" ref={el => this.bannerIndicatorEl = el} style={{ width: '' + this.items.length * 100 + '%' }}>
					<slot></slot>
				</div>
				{this.items.length > 1 ? [
					<ol class="banner-indicators">
						{this.renderList()}
					</ol>,
					<se-icon class="previous-indicator" color="alternative" onClick={() => this.changeActive('previous')}>
            <span innerHTML={arrow2_left}></span>
					</se-icon>,
					<se-icon class="next-indicator" color="alternative" onClick={() => this.changeActive('next')}>
            <span innerHTML={arrow2_right}></span>
					</se-icon>]
					: ''}
			</div>
		];
	}
}
