import { Component, Element, h, State } from "@stencil/core";

@Component({
	tag: "se-banner",
	styleUrl: "banner.scss",
	shadow: true
})
export class BannerComponent {

	@Element() el: HTMLElement;
	bannerIndicatorEl?: HTMLElement;
	@State() items: HTMLElement[] = [];
	@State() selectedItem?: any;
	@State() selectedItemIndex?: number;

	private setActiveItem(item: any): void {
		if (this.items.length) {
			this.items.forEach((item: any) => {
				item.setActive(false);
			});

			item.setActive(true);
			this.assignSelectedItem(item);
		}
	}

	private assignSelectedItem(item: any) {
		this.selectedItem = item;
		this.selectedItemIndex = this.items.indexOf(item);
		this.bannerIndicatorEl.style.right = '' + this.selectedItemIndex * 100 + '%';
	}

	private changeActive(index: string) {
		let item = index === 'previous' ? this.items[this.selectedItemIndex - 1] : this.items[this.selectedItemIndex + 1];
		if (item) {
			this.setActiveItem(item);
		}
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

	render() {
		return (
			<div class="se-banner">
				<ol class="banner-indicators">
					{this.renderList()}
				</ol>
				<div class="banner-items"  ref={el => this.bannerIndicatorEl = el} style={{width: '' + this.items.length * 100 + '%'}}>
					<slot></slot>
				</div>
				<div class="previous-indicator" onClick={() => this.changeActive('previous')}>
					arrow2_left
				</div>
				<div class="next-indicator" onClick={() => this.changeActive('next')}>
					arrow2_right
				</div>
			</div>
		);
	}
}