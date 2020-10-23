import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'se-icon-file',
  styleUrl: 'icon-file.scss',
  shadow: true,
})
export class IconFileComponent {
  /**
   * Text displayed inside the SVG icon. The text cannot be longer than 4 character.
   */
  @Prop() value: string;
  /**
   * Optional property to define if the icon should act as a button (clickable).
   */
  @Prop() option: 'button';
  /**
   * Defines the size of an icon.
   * `nano` sets the size to 14px.
   * `small` sets the size to 24px.(default setting)
   * `medium` sets the size to 32px.
   * `large` sets the size to 52px.
   * `xlarge` sets the size to 62px.
   */
  @Prop() size: 'nano' | 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   */
  @Prop() color:
    | 'standard'
    | 'alternative'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'information';
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;
  render() {
    // Limit text to 4 char
    const text = this.value.slice(0, 4);
    return (
      <se-icon size={this.size} disabled={this.disabled} color={this.color}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="cut-off-text">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="62%"
                fill="black"
                dominant-baseline="middle"
                text-anchor="middle"
                class="text"
              >
                {text}
              </text>
            </mask>
          </defs>
          <path
            d="M810,469L832,469C855,469 875,488 874,512L874,725C874,749 855,768 832,768L810,768L810,875C810,886 800,896 788,896L234,896C222,896 212,886 212,875L212,768L191,768C167,768 148,749 148,725L148,512C148,488 167,469 191,469L213,469L213,149C213,138 223,128 235,128L596,128C602,128 608,130 613,134L803,326C807,330 810,336 810,341L810,469ZM767,469L767,363L596,363C585,363 575,353 575,341L575,171L255,171L255,469L767,469ZM618,201L618,317L735,317L618,201ZM767,853L767,768L255,768L255,853L767,853Z"
            mask="url(#cut-off-text)"
            fill="currentcolor"
          />
        </svg>
      </se-icon>
    );
  }
}
