import { Component, h, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "se-visual-radial",
  styleUrl: "visual-radial.scss",
  shadow: true
})
export class VisualRadialComponent {
  /**
   * Determines the visual size of your circular progress bar.  The default setting is `large`.
   */
  @Prop() size: 'small' | 'large' = 'large';
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

  @State() offset: number;
  @State() circleDimensions: number;
  @State() circleRadius: number;
  @State() svgSize: number;
  @Watch('size') sizeDidChange() {
    this.svgSize = (this.size == 'small') ? 82 : 164;
    this.circleDimensions = (this.size == 'small') ? 41 : 82;
    this.circleRadius = (this.size == 'small') ? 33 : 66;
    let circumference = (this.size == 'small') ? 66 * Math.PI : 132 * Math.PI;
    this.offset = circumference - this.percentage / 100 * circumference;
  }

  componentDidLoad() {
    if (this.secolor && this.secolor.indexOf('#') == -1) {
			this.secolor = 'var(--se-' + this.secolor + ')';
		}
    this.sizeDidChange();
  }

  render() {
    return (
      <div class={["visual-radial-wrapper", this.size].join(' ')}>
        <svg class="se-visual-radial" height={this.svgSize} width={this.svgSize}>
          <circle cx={this.circleDimensions} cy={this.circleDimensions} r={this.circleRadius} stroke="#f7f7f7" stroke-width="8" fill="transparent"></circle>
          <circle cx={this.circleDimensions} cy={this.circleDimensions} r={this.circleRadius} stroke={this.secolor ? this.secolor : '#3dcd58'} stroke-width="8" fill="transparent" style={{ strokeDashoffset: String(this.offset) }}></circle>
          Sorry, your browser does not support inline SVG.
        </svg>
        <svg height={this.svgSize} width={this.svgSize}>
          <text>
            {this.value ? <tspan class="radial-value" x="50%" y="50%" text-anchor="middle">{this.value}</tspan> : ''}
            <tspan class="radial-label" x="50%" y={this.value ? "70%" : "53%"} text-anchor="middle">{this.label}</tspan>
          </text>
        </svg>
      </div>
    )
  }
}