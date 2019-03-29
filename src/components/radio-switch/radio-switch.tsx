import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'se-radio-switch',
  styleUrl: 'radio-switch.scss',
  shadow: true
})
export class RadioSwitchComponent {
	/**
   * Optional property that defines if the switch is disabled.  Set to `false` by default.
   */
	@Prop() disabled: boolean = false;
	/**
	 * Determines whether or not the switch is "on" or "off" when you initialize it.
	 * Sets the switch to the "on" position if `true`.
	 */
	@Prop({mutable:true}) value: boolean;
	@State() selected: boolean;
	/**
	 * Send the state of the switch (true/false) to the parent component when it is toggled.
	 */
	@Event() didChange: EventEmitter;

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
			this.didChange.emit({selected: this.selected});
		}
	}

	componentDidLoad() {
		if (this.value) {
			this.selected = this.value;
			this.el.classList.add('selected');
		}
	}

	render() {
		return (
			<label class="switch-container" data-disabled={this.disabled}>
				<input type="checkbox" checked={this.selected} disabled={this.disabled}/>
				<span class="switch-button" onClick={() => this.emitEvent()} />
			</label>
		);
	}
}