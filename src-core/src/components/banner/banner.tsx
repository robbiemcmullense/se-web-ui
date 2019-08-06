import { Component, Element, h, State } from "@stencil/core";

@Component({
	tag: "se-banner",
	styleUrl: "banner.scss",
	shadow: false
})
export class BannerComponent {

	@Element() el: HTMLElement;
	@State() items: HTMLElement[] = [];
	@State() selectedItem?: any;
	@State() selectedItemIndex?: number;

	private setActiveItem(item: any, direction: string): void {
		item.setActive(true);
		if (this.items.length) {
			this.items.forEach((item: any) => {
				item.setActive(false);
			});

			let listItems = Array.from(this.el.querySelectorAll('li'));
			if (listItems.length) {
				listItems.forEach((listItem: any) => {
					listItem.classList.remove('active');
				});
				listItems[this.selectedItemIndex].classList.add('active');
			}
			item.setActive(true);
			if (direction === 'previous') {
				item.classList.add('slideInLeft');
				setTimeout(() => {
					item.classList.remove('slideInLeft');
					item.classList.remove('previous');
				}, 500);
			}
			if (direction === 'next') {
				item.classList.add('slideInRight');
				setTimeout(() => {
					item.classList.remove('slideInRight');
					item.classList.remove('next');
				}, 500);
			}
			this.assignItemClasses(item);
		}
	}

	private assignItemClasses(item: any) {
		this.selectedItem = item;
		this.selectedItemIndex = this.items.indexOf(item);
		let prevItem = this.items[this.selectedItemIndex - 1];
		let nextItem = this.items[this.selectedItemIndex + 1]
		if (prevItem) {
			this.items[this.selectedItemIndex - 1].classList.add('previous');
		}
		if (nextItem) {
			this.items[this.selectedItemIndex + 1].classList.add('next');
		}
	}

	private changeActive(index: string) {
		let item = index === 'previous' ? this.items[this.selectedItemIndex - 1] : this.items[this.selectedItemIndex + 1];
		if (item) {
			this.setActiveItem(item, index);
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
			this.setActiveItem(this.items[0], null);
			let listItemElement = this.el.querySelector('li');
			if (listItemElement) {
				listItemElement.classList.add('active');
			}
		}
	}

	render() {
		return (
			<div class="se-banner">
				<ol class="banner-indicators">
					{this.renderList()}
				</ol>
				<slot></slot>
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