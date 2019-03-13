import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "se-visual-radial",
  styleUrl: "visual-radial.scss",
  shadow: true
})
export class VisualRadialComponent {
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
	 * The default setting is `primary`, which gives the progress bar a green color.
	 */
  @Prop() secolor: string;
	/**
	 * Set the percentage of the "progress bar" to be "filled".
	 */
  @Prop({ mutable: true }) percentage: number;

  @State() offset: number;

  componentDidLoad() {
    let circumference = 132 * Math.PI;
    this.offset = circumference - this.percentage / 100 * circumference;
  }

  render() {
    return [
      <div class="visual-radial-wrapper">
        <svg class="se-visual-radial" height="164" width="164">
          <circle cx="82" cy="82" r="66" stroke="#f7f7f7" stroke-width="8" fill="transparent" />
          <circle cx="82" cy="82" r="66" stroke={this.secolor ? this.secolor : '#3dcd58'} stroke-width="8" fill="transparent" style={{ strokeDashoffset: this.offset }} />
          Sorry, your browser does not support inline SVG.
        </svg>,
        <div class="radial-data">
          <div class="radial-value">{this.value}</div>
          <div class="radial-label">{this.label}</div>
        </div>
      </div>
    ];
  }
}