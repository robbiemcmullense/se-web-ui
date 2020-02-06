import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
	tag: 'se-fab-item',
	styleUrl: 'fab-item.scss',
	shadow: true
})
export class FabItemComponent {
	@Element() el: HTMLElement;
	/**
	 * Property that determines if an icon is included in the floating action button.
	 */
	@Prop() icon: string;
	/**
	 * Send the value of the caption to the parent when clicking on the item.
	 */
	@Event() didClick: EventEmitter<any>;

	toggle() {
		this.didClick.emit(this.el.innerText);
	}

	render() {
		return (
			<div class="se-fab-item" onClick={() => this.toggle()}>
				<span class="description"><slot></slot></span>
				{this.icon ? <se-icon>{this.icon}</se-icon> : <slot name="icon"></slot> }
			</div>
		)
	}
}