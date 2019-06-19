import { Component, h, Prop, State, Method, Host } from '@stencil/core';
const SHOW_FAB = 'show';

@Component({
	tag: 'se-fab',
	styleUrl: 'fab.scss',
	shadow: true

})
export class FabComponent {

	@State() toggleIcon: boolean = true;

	error_icon = 'notification_error';
	arrow_up = 'arrow4_top';
	/**
	 * Property that determines if an icon is included in the main action button.
	 */
	@Prop() icon: string;
	/**
	 * Property that determines the functionality of the FAB.
	 * The default setting is `speeddial`, which will show/hide a dropdown menu when clicking on the FAB.
	 * The `backtotop` setting returns you to the top of the page you are viewing when clicking on the FAB.
	 */
	@Prop() option: 'speeddial' | 'backtotop' = 'speeddial';
	/**
	 *  Property that determines the position of the component.
	 *  The default setting is `bottom`, rendering a FAB at the bottom right corner.
	 *  The `top` setting renders the FAB at the top right corner.
	 */
	@Prop() position: 'bottom' | 'top' = 'bottom';
	/**
	* Indicates the color of your main action button .
	* The Default setting is `primary`, rendering a green background.
	* The `alternative` setting renders a white background.
	*/
	@Prop() color: 'primary' | 'alternative' = 'primary';
	/**
	 * Use this method to toggle (show/hide) the mini action buttons.
	 */
	@Method()
	async toggleAction() {
		if (this.option == 'speeddial') {
			this.toggleIcon = !this.toggleIcon;
		}
	}

	getIcon() {
		let icon: any;
		switch (this.option) {
			case 'speeddial':
				icon = this.toggleIcon ? this.icon : this.error_icon;
				break;
			case 'backtotop':
				icon = this.arrow_up;
			default:
				break;
		}
		return icon;
	}

	render() {
		return (
			<Host class={`pos-${this.position}`}>
				<se-button color={this.color} class={this.option == 'backtotop' ? 'backtotop' : ''} option='fab' onClick={() => this.toggleAction()} icon={this.getIcon()}></se-button>
				{this.option === 'speeddial' ?
					<div class={['mini-action-button', !this.toggleIcon ? SHOW_FAB : ''].join(' ')}>
						<slot></slot>
					</div> : ''
				}
			</Host>
		)
	}
}
