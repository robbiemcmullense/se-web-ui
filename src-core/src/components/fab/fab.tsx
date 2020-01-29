import { Component, h, Prop, State, Method } from '@stencil/core';
import notification_error from "@se/icons/svg/notification_error.svg";
import arrow4_top from "@se/icons/svg/arrow4_top.svg";
const SHOW_FAB = 'show';

@Component({
	tag: 'se-fab',
	styleUrl: 'fab.scss',
	shadow: true
})
export class FabComponent {
	error_icon = notification_error;
	arrow_up = arrow4_top;
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
	@State() toggleIcon: boolean = true;
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
			<div class={['se-fab', `pos-${this.position}`].join(' ')}>
				<se-button color={this.color} icon-only="true" class={this.option == 'backtotop' ? 'backtotop' : ''} option='fab' onClick={() => this.toggleAction()}>
          <se-icon slot="icon" size="medium"><span innerHTML={this.getIcon()}></span></se-icon>
        </se-button>
				{this.option === 'speeddial' ?
					<div class={['mini-action-button', !this.toggleIcon ? SHOW_FAB : ''].join(' ')}>
						<slot></slot>
					</div> : ''}
			</div>
		)
	}
}
