import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {
  @Element() el: HTMLElement;

  /**
   * Define the mode of a widget. The default widget gives a small padding of the widget.
   * `fill` will remove any spacing.
   * `card` will create a card look and fell with shadow and rounded corner
   */
  @Prop() mode: "fill" | "card";
  /**
   * Define a specific width of a widget. useful to create easy layout under `se-container` which use `flex` by default.
   */
  @Prop() width: string;
  /**
   * Optional property that defines the background color of the widget. default is alternative (white)
   */
  @Prop() color: 'standard' | 'alternative' = 'alternative'

  /**
   * Define a specific height of a widget. useful to create easy layout under `se-container` which use `flex` by default.
   */
  @Prop() height: string;
  /**
   * Display the loading icon if set to `true`.
   */
  @Prop({mutable: true}) loading: boolean = false;


  @Watch("height") heighDidChange() {
    this.updateSize();
  }
  @Watch("width") widthDidChange() {
    this.updateSize();
  }

  componentWillLoad() {
    this.updateSize();
    this.updateItemMode();
  }

  private updateItemMode(){
    if(this.mode === 'card'){
      Array.from(this.el.querySelectorAll('se-widget-header, se-widget-footer')).forEach((item: any) => {
        item.mode = this.mode;
      });
    }
  }

  private updateSize() {
    if (this.width) {
      this.el.style.width = this.width;
    }
    if (this.height) {
      this.el.style.height = this.height;
    }
  }

  hostData() {
    return {
      class: [this.mode, this.color, (!this.width && !this.height) ? 'flex' : ''].join(' ')
    };
  }

  render() {
    return (
      <div class="widget-body">
        {this.loading ? <se-loading loading={this.loading}></se-loading> : ''}
        <slot />
      </div>
    );
  }
}
