import { Component, h, Host, Prop } from "@stencil/core";

@Component({
	tag: "se-visual-linear",
	styleUrl: "visual-linear.scss",
	shadow: true
})
export class VisualLinearComponent {
	/**
	 * Defines the layout of your component.
	 * `inline` is the default option.  This sets the "progress bar" adjacent to the label.
	 * `stacked` option will render the "progress bar" below the label.
	 */
	@Prop() option: 'inline' | 'stacked' = 'inline';
	/**
	 * Defines the text value of the label in your component.
	 */
	@Prop() label: string;
	/**
	 * Defines the value of your component.
	 */
	@Prop({ mutable: true }) value: string;
	/**
	 * Sets the color of the visual "progress bar".
	 * The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
	 * By default, the progress bar will have a green color.
	 */
	@Prop() secolor: string;
	/**
	 * Set the percentage of the "progress bar" to be "filled".
	 */
	@Prop({ mutable: true }) percentage: number;

	render() {
		return (
			<Host class={this.option}>
				<div class="se-visual-linear">
					<svg height="8">
						<rect class="progress-bar-wrapper" width="100%" height="8"></rect>
						<rect class="progress-bar" width={this.percentage + '%'} height="8" style={{ 'fill': this.secolor }}></rect>
						Sorry, your browser does not support inline SVG.
				</svg>
					<text>
						{this.value ? <tspan class="linear-value">{this.value}</tspan> : ''}
						<tspan x="100%" class="linear-label">{this.label}</tspan>
					</text>
				</div>
			</Host>
		)
	}
}