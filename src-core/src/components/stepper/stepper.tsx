import { Component, Element, h, State, Prop } from "@stencil/core";

@Component({
  tag: "se-stepper",
  styleUrl: "stepper.scss",
  shadow: true
})
export class StepperComponent {
  @Element() el: HTMLElement;
  listEl?: HTMLElement;
  @State() items: HTMLElement[] = [];
  observer: any;
  /**
   * Sets the background color of your stepper.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';

  private updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
    });
  }

  private setColorSchema() {
    this.items = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.items.forEach((item: any) => {
      item.classList.add(this.color);
    });
  }

  componentWillLoad() {
    this.updateLastItem();
    this.setColorSchema();
  }

  componentDidLoad() {
  }

  componentDidUnload() {
    
  }

  render() {
    return (
      <nav class={this.color}>
        <ol ref={el => this.listEl = el}>
          <slot></slot>
        </ol>
      </nav>
    )
  }
}