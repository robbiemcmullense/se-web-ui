import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'se-visual-radial',
  styleUrl: 'visual-radial.scss',
  shadow: true,
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
  @Prop() value: string;

  /**
   * Sets the color of the visual "progress bar".
   * The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
   * By default, the progress bar will have a green color.
   */
  @Prop() secolor = 'primary';

  /**
   * Set the percentage of the "progress bar" to be "filled".
   */
  @Prop() percentage: number;

  render() {
    const isHexColor =
      this.secolor && this.secolor.indexOf('#') !== -1 ? true : false;
    const svgSize = this.size === 'small' ? 82 : 164;
    const circleDimensions = this.size === 'small' ? 41 : 82;
    const circleRadius = this.size === 'small' ? 33 : 66;
    const circumference = this.size === 'small' ? 66 * Math.PI : 132 * Math.PI;
    const offset =
      circumference - ((this.percentage || 0) / 100) * circumference;
    return (
      <Host class={!isHexColor ? `color-${this.secolor}` : ''}>
        <div class={['radial-wrapper', this.size].join(' ')}>
          <svg class="radial" height={svgSize} width={svgSize}>
            <circle
              cx={circleDimensions}
              cy={circleDimensions}
              r={circleRadius}
              stroke="currentColor"
              stroke-width="8"
              fill="transparent"
              class="back-circle"
            ></circle>
            <circle
              cx={circleDimensions}
              cy={circleDimensions}
              r={circleRadius}
              stroke={isHexColor ? this.secolor : 'currentColor'}
              stroke-width="8"
              fill="transparent"
              style={{ strokeDashoffset: String(offset) }}
            ></circle>
            Sorry, your browser does not support inline SVG.
          </svg>
          <svg height={svgSize} width={svgSize} class="text">
            <text>
              {this.value ? (
                <tspan
                  class="value"
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  fill="currentColor"
                >
                  {this.value}
                </tspan>
              ) : (
                ''
              )}
              <tspan
                class="label"
                x="50%"
                y={this.value ? '70%' : '53%'}
                text-anchor="middle"
                fill="currentColor"
              >
                {this.label}
              </tspan>
            </text>
          </svg>
        </div>
      </Host>
    );
  }
}
