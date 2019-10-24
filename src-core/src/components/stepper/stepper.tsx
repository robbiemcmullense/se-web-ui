import { Component, Element, Event, EventEmitter, h, Listen, State, Prop } from "@stencil/core";


@Component({
  tag: "se-stepper",
  styleUrl: "stepper.scss",
  shadow: true
})
export class StepperComponent {
  @Element() el: HTMLElement;
  @State() items: HTMLElement[] = [];
  @State() index: number = 0;
  /**
   * Sets the background color of your stepper.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
  /**
   * If set to `true`, you are required to complete previous steps before moving onto the next step.
   * Default setting is `false`.
   */
  @Prop() linear: boolean = false;
  /**
   * Indicate to the parent component that a new stepper item has been selected.
   */
  @Event() optionSelected: EventEmitter;

  @Listen('didClick')
  stepperItemClickedHandler(event) {
    this.items.forEach((item: any) => {
      const indicator = item.shadowRoot.querySelector('span');
      indicator.classList.remove('se-icon');
      indicator.innerText = this.items.indexOf(item) + 1;
      item.classList.remove('active');
      if (item.label === event.detail) {
        this.index = this.items.indexOf(item);
      }
      if (this.linear) {
        const stepperItem = item.shadowRoot.querySelector('.stepper-item');
        if (this.items.indexOf(item) >= this.index + 2) {
          stepperItem.classList.add('disabled');
        } else {
          stepperItem.classList.remove('disabled');
        }
      }
    });
    for (var i=0; i<=this.index; i++) {
      this.items[i].classList.add('active');
      if (i !== this.index) {
        let indicator = this.items[i].shadowRoot.querySelector('span');
        indicator.classList.add('se-icon');
        indicator.innerText = 'notification_ok';
      }
    }
    this.optionSelected.emit(event.detail);
  }

  componentDidLoad() {
    this.items = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
      item.classList.add(this.color);
      if (item.shadowRoot) {
        let spanElement = item.shadowRoot.querySelector('span');
        let listItemElement = item.shadowRoot.querySelector('.stepper-item');
        spanElement.innerText = this.items.indexOf(item) + 1;
        if (this.linear && this.items.indexOf(item) > 1) {
          listItemElement.classList.add('disabled');
        }
      }
    });
    this.items[0].classList.add('active');
  }

  render() {
    return (
      <nav class={this.color}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    )
  }
}