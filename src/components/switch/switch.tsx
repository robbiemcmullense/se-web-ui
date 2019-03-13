import { Component, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'se-switch',
  styleUrl: 'switch.scss',
  shadow: true
})

export class SwitchComponent {
	
	@State() selected: boolean;
	/**
	 * Send the state of the switch (true/false) to the parent component when it is toggled.
	 */
	@Event() change: EventEmitter;
	

	emitEvent() {
		this.selected = !this.selected;
		this.change.emit({selected: this.selected});
	}

	render() {
		return (
			<input class="se-switch" type="checkbox" onClick={() => this.emitEvent()} />
		);
	}
}