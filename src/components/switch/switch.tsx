import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'se-switch',
  styleUrl: 'switch.scss',
  shadow: true
})
export class SwitchComponent {
	/**
   * Optional property that defines if the switch is disabled.  Set to `false` by default.
   */
	@Prop() disabled: boolean = false;
	
	@State() selected: boolean;
	/**
	 * Send the state of the switch (true/false) to the parent component when it is toggled.
	 */
	@Event() change: EventEmitter;

	@Element() el: HTMLElement;
	
	emitEvent() {
		if (!this.disabled) {
			this.selected = !this.selected;
			if (this.selected) {
				this.el.classList.add('selected');
			} else {
				setTimeout(() => {
					this.el.classList.remove('selected');
				}, 200)
			}
			this.change.emit({selected: this.selected});
		}
	}

	render() {
		return (
			<label class="switch-container" data-disabled={this.disabled}>
				<input type="checkbox" disabled={this.disabled}/>
				<span class="switch-button" onClick={() => this.emitEvent()} />
			</label>
		);
	}
}