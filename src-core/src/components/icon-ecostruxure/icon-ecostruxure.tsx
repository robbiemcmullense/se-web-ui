import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-icon-ecostruxure",
  styleUrl: "icon-ecostruxure.scss",
  shadow: true
})
export class IconEcostruxureComponent {
  /**
   * Sets the size of the EcoStruxure icon.  The default setting is `small`.
   */
  @Prop() size: "small" | "medium" = "small";

  hostData() {
    return {
      class: this.size
    };
  }

  render() {
    return ICON_SVG;
  }
}

const ICON_SVG = (
  <svg
    version="1.1"
    id="Calque_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsxlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="88px"
    height="16px"
    viewBox="0 0 88 16"
    enable-background="new 0 0 88 16"
    xmlspace="preserve"
  >
    <pattern
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
      id="Unnamed_Pattern_3"
      viewBox="0 -20 20 20"
      overflow="visible"
    >
      <g>
        <polygon fill="none" points="0,-20 20,-20 20,0 0,0 		" />
        <path d="M16-5c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S16-4.448,16-5" />
        <path d="M16-15c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S16-14.448,16-15" />
        <path d="M6-5c0-0.552-0.448-1-1-1S4-5.552,4-5s0.448,1,1,1S6-4.448,6-5" />
        <path d="M6-15c0-0.552-0.448-1-1-1s-1,0.448-1,1s0.448,1,1,1S6-14.448,6-15" />
      </g>
    </pattern>
    <rect x="-1840" y="-2248.276" display="none" width="753.75" height="120" />
    <rect x="-1050.023" y="-2248.276" display="none" width="157" height="120" />
    <pattern
      id="SVGID_3_"
      xlinkhref="#Unnamed_Pattern_3"
      patternTransform="matrix(1 0 0 -1 3533.9766 7213.6719)"
    />
    <rect x="-1847.023" y="-2058.327" display="none" width="954" height="350" />
    <path
      display="none"
      opacity="0.2"
      d="M195-1215H-3c-9.389,0-17-7.611-17-17v-198c0-9.389,7.611-17,17-17h198
    c9.389,0,17,7.611,17,17v198C212-1222.611,204.389-1215,195-1215z"
    />
    <g>
      <path
        d="M41.749,6.667h0.676V6.025c0-0.494,0.403-0.895,0.901-0.895l0,0c0.498,0,0.901,0.4,0.901,0.895v0.643h1.238
      c0.376,0,0.68,0.302,0.68,0.674l0,0c0,0.373-0.304,0.675-0.68,0.675h-1.277v2.615c0,0.589,0.208,0.884,0.699,0.884
      c0.236,0,0.421-0.068,0.574-0.176c0.21-0.148,0.515-0.102,0.618,0.133c0.04,0.089,0.066,0.193,0.066,0.313
      c0,0.602-0.636,1.093-1.672,1.093c-1.4,0-2.048-0.7-2.048-2.05V8.017h-0.676c-0.376,0-0.681-0.302-0.681-0.675l0,0
      C41.068,6.97,41.373,6.667,41.749,6.667z"
      />
      <path
        d="M50.633,6.595c0.843,0,1.166,0.76,0.739,1.509c-1.27,0.024-2.398,0.479-2.398,1.729v2.032
      c0,0.501-0.408,0.907-0.913,0.907l0,0c-0.505,0-0.914-0.406-0.914-0.907V6.865c0-0.05,0.324-0.197,0.688-0.197
      c0.544,0,1.14,0.271,1.14,1.388v0.159C49.208,7.281,49.688,6.595,50.633,6.595"
      />
      <path
        d="M54.841,12.877c-1.659,0-2.345-1.093-2.345-2.479V7.555c0-0.5,0.408-0.906,0.913-0.906l0,0
      c0.505,0,0.914,0.406,0.914,0.906v2.705c0,0.7,0.57,1.268,1.276,1.268l0,0c0.706,0,1.277-0.568,1.277-1.268V7.575
      c0-0.501,0.408-0.908,0.913-0.908l0,0c0.505,0,0.914,0.406,0.914,0.908v5.018c0,0.062-0.312,0.196-0.688,0.196h-0.113
      c-0.539,0-0.975-0.433-0.975-0.968l0,0C56.486,12.435,55.826,12.877,54.841,12.877"
      />
      <path
        d="M69.37,12.877c-1.659,0-2.345-1.093-2.345-2.479V7.555c0-0.5,0.409-0.906,0.914-0.906l0,0
      c0.504,0,0.913,0.406,0.913,0.906v2.705c0,0.7,0.572,1.268,1.277,1.268l0,0c0.704,0,1.275-0.568,1.275-1.268V7.575
      c0-0.501,0.41-0.908,0.913-0.908l0,0c0.505,0,0.915,0.406,0.915,0.908v5.018c0,0.062-0.312,0.196-0.686,0.196h-0.115
      c-0.539,0-0.975-0.433-0.975-0.968l0,0C71.016,12.435,70.355,12.877,69.37,12.877"
      />
      <path
        d="M77.858,6.595c0.843,0,1.166,0.76,0.737,1.509c-1.27,0.024-2.396,0.479-2.396,1.729v2.032
      c0,0.501-0.409,0.907-0.914,0.907l0,0c-0.504,0-0.913-0.406-0.913-0.907V6.865c0-0.05,0.323-0.197,0.686-0.197
      c0.544,0,1.141,0.271,1.141,1.388v0.159C76.432,7.281,76.912,6.595,77.858,6.595"
      />
      <path
        d="M82.602,11.613c0.958,0,1.489-0.405,1.788-0.883c0.013-0.024,0.882,0.085,0.882,0.785
      c0,0.638-0.973,1.362-2.734,1.362c-2.062,0-3.422-1.216-3.422-3.105c0-1.829,1.387-3.178,3.305-3.178
      c1.866,0,3.149,1.239,3.149,2.994l0,0c0,0.332-0.271,0.602-0.605,0.602h-4.189C80.904,11.085,81.617,11.613,82.602,11.613
        M83.872,9.184c-0.04-0.835-0.596-1.387-1.478-1.387c-0.854,0-1.502,0.576-1.619,1.387H83.872z"
      />
      <g>
        <polygon
          points="85.685,6.906 85.276,6.906 85.276,6.667 86.391,6.667 86.391,6.906 85.983,6.906 85.983,7.956
        85.685,7.956 		"
        />
        <polygon
          points="86.534,6.667 86.956,6.667 87.273,7.553 87.277,7.553 87.579,6.667 88,6.667 88,7.956
        87.72,7.956 87.72,7.042 87.716,7.042 87.383,7.956 87.151,7.956 86.818,7.052 86.813,7.052 86.813,7.956 86.534,7.956 		"
        />
      </g>
      <path
        d="M35.567,7.832l0.4-1.376h3.652c0.45-1.996,0.095-3.847-1.184-5.058c-2.59-2.453-8.009-1.619-12.047,2.038
      c-0.629,0.567-1.162,1.182-1.647,1.81h2.199l-0.512,1.379h-2.626c-0.25,0.435-0.486,0.866-0.666,1.305h3.114l-0.499,1.38h-3.06
      c-0.524,2.107-0.189,4.074,1.126,5.323c2.558,2.421,7.961,1.57,11.996-2.086c0.707-0.635,1.289-1.322,1.816-2.028h-2.824
      l0.43-1.376h3.302c0.242-0.438,0.464-0.87,0.639-1.31H35.567z M34.758,5.24c-0.234,0-0.333,0.035-0.426,0.136
      c-0.038,0.038-0.054,0.08-0.067,0.159L33.08,9.791c-0.278,1.492-2.214,2.983-4.74,2.983h-1.374h-2.136l0.609-2.187h2.256
      c0.229,0,0.41-0.082,0.56-0.24c0.055-0.063,0.127-0.159,0.137-0.258l0.936-3.718c0.277-1.495,1.942-3.145,4.466-3.145h3.592
      L36.929,5.24H34.758z"
      />
      <g>
        <line x1="7.771" y1="12.025" x2="7.771" y2="12.025" />
        <path
          d="M0.806,3.221h5.862c0.416,0,0.753,0.333,0.753,0.746v0.001c0,0.412-0.337,0.747-0.753,0.747h-4.37
        c-0.149,0-0.269,0.119-0.269,0.267v1.801c0,0.147,0.119,0.267,0.269,0.267h4.37c0.416,0,0.753,0.335,0.753,0.747l0,0
        c0,0.414-0.337,0.748-0.753,0.748h-4.37c-0.149,0-0.269,0.12-0.269,0.267v2.202c0,0.147,0.119,0.267,0.269,0.267h4.37
        c0.416,0,0.753,0.334,0.753,0.747l0,0c0,0.413-0.337,0.747-0.753,0.747H0.806C0.36,12.772,0,12.415,0,11.973V4.02
        C0,3.579,0.36,3.221,0.806,3.221z"
        />
        <path
          d="M11.382,12.772c-2.737,0-3.153-2.006-3.153-3.02c0-1.42,0.773-3.088,3.177-3.088
        c1.786,0,2.738,1.127,2.738,1.747c0,0.383-0.345,0.642-0.702,0.642c-0.299,0-0.477-0.18-0.548-0.282
        c-0.369-0.529-0.714-0.958-1.5-0.958c-1.226,0-1.583,1.127-1.583,1.927c0,0.327,0.06,0.811,0.309,1.217
        c0.227,0.36,0.632,0.698,1.274,0.698c0.655,0,1.107-0.361,1.297-0.642c0.382-0.564,0.476-0.756,0.857-0.756
        c0.454,0,0.679,0.417,0.679,0.654C14.228,11.51,13.406,12.772,11.382,12.772"
        />
        <path
          d="M18.062,12.772c-2.392,0-3.201-1.667-3.201-3.054c0-1.589,1.011-3.054,3.165-3.054
        c2.178,0,3.167,1.487,3.167,3.054C21.192,11.432,20.038,12.772,18.062,12.772 M18.025,7.78c-0.929,0-1.559,0.699-1.559,1.939
        c0,1.262,0.63,1.938,1.559,1.938s1.56-0.688,1.56-1.938C19.585,8.467,18.954,7.78,18.025,7.78"
        />
      </g>
      <path
        d="M64.104,9.723l2.009-1.994c0.104-0.103,0.104-0.273,0-0.377L65.677,6.92c-0.34-0.336-0.896-0.336-1.234,0
      l-1.582,1.57l-1.58-1.57c-0.34-0.336-0.895-0.336-1.234,0l-0.436,0.432c-0.105,0.104-0.105,0.274,0,0.377l2.009,1.994l-2.009,1.994
      c-0.105,0.104-0.105,0.273,0,0.377l0.436,0.433c0.339,0.337,0.894,0.337,1.234,0l1.58-1.569l1.582,1.569
      c0.339,0.337,0.894,0.337,1.234,0l0.436-0.433c0.104-0.104,0.104-0.273,0-0.377L64.104,9.723z"
      />
    </g>
    <polygon
      display="none"
      fill="#FFFFFF"
      points="-1740,-1725 -1760,-1745 -1720,-1745 "
    />
  </svg>
);
