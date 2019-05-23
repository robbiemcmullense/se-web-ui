import { Component, h, Prop, State, Method } from '@stencil/core';
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
 *  Property that determines  icon included in the main action button.
 */
	@Prop() icon: string;

	/**
*  Property that determines  icon included in the main action button.
*/
	@Prop() option: 'speeddial' | 'backtotop' = 'speeddial';

	/**
 *  Property that determines position of main action button.
 *   Default setting is `bottom`, rendering a FAB at bottom right corner.
 * The `top` setting renders  FAB at top right corner.
 */
	@Prop() position: 'bottom' | 'top' = 'bottom';


	/**
* Indicates the color of your main action button .
* Default setting is `primary`, rendering a green background.
* The `alternative` setting renders a white background.
*/
	@Prop() color: 'primary' | 'alternative' = 'primary';


	/**
	 * Method to toggle(show/hide) the mini action buttons.
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
			<div class={['fab-container', this.position].join(" ")}>
				<se-button color={this.color} class={this.option == 'backtotop' ? 'backtotop' : ''} option='fab' onClick={() => this.toggleAction()} icon={this.getIcon()}></se-button>
				{this.option == 'speeddial' ?
					<div class={['mini-action-button', !this.toggleIcon ? SHOW_FAB : ''].join(' ')}>
						<slot></slot>
					</div> : ''
				}
			</div>
		)
	}
}