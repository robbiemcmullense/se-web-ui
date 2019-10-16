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
  observer: any;
  /**
   * Sets the background color of your stepper.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
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
    });
    for (var i=0; i<=this.index; i++) {
      this.items[i].classList.add('active');
      if (i !== this.index) {
        let indicator = this.items[i].shadowRoot.querySelector('span');
        indicator.classList.add('se-icon');
        indicator.innerText = 'notification_ok';
      }
    }
    this.optionSelected.emit();
  }

  componentWillLoad() {
    
  }

  componentDidLoad() {
    this.items = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
      item.classList.add(this.color);
      let element = item.shadowRoot.querySelector('span');
      element.innerText = this.items.indexOf(item) + 1;
    });
    this.items[0].classList.add('active');
  }

  componentDidUnload() {
    
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