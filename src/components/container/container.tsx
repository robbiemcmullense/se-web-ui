import { Component, Prop, Watch } from "@stencil/core";

@Component({
  tag: "se-container",
  styleUrl: "container.scss",
  shadow: true
})
export class ContainerComponent {
  /**
   * Defines the inner appearance of a container.
   * `widget` Add a small spacing all around the container so all widgets are spaced with the same distance. Widget automatically set color property to `standard` (gray)
   * `fill` Default. Take the full space of the container.
   * `centered` center the container so the content does no exceed a max width.
   */
  @Prop() mode: "widget" | "fill" | "centered" | "card" = "fill";
  @Watch('mode') modeDidChange() {
    if(this.mode === 'widget'){
      this.color = 'standard'
    }
  }

  /**
   * In specific case, it can be necessary to define the container with an absolute position (inside an angular router-container ). Most of the time, the default position will work perfectly with flex box.
   * `relative` Default. Perfect to use with flex content.
   * `absolute` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() position: "relative" | "absolute" = "relative";

  /**
   * Defines the direction of the flex element
   * `column` Default. Perfect to use with flex content.
   * `row` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() direction: "column" | "row" = "row";

  /**
   * Defines how to display the element.
   * `flex` Default. Will make all element fitting in the .
   * `block` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() display: "flex" | "block" = "flex";

  /**
   * Define the color of the background of the container. The default is light gray.
   * `standard` Default. Light grey.
   * `alternative` white background.
   */
  @Prop({mutable: true}) color: "standard" | "alternative" = "alternative";


  componentWillLoad() {
    this.modeDidChange();
  }

  hostData() {
    return {
      class: [
        `${this.mode}-content`,
        this.position,
        this.color,
        this.direction,
        this.display
      ].join(" ")
    };
  }

  render() {
    return <slot />
  }
}
