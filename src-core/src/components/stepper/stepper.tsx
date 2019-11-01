import { Component, Element, Event, EventEmitter, h, Listen, Method, State, Prop } from "@stencil/core";


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
      let disabledIndex;
      const indicator = item.shadowRoot.querySelector('span');
      indicator.classList.remove('se-icon');
      indicator.innerText = this.items.indexOf(item) + 1;
      item.classList.remove('active');
      if (item.label === event.detail) {
        this.index = this.items.indexOf(item);
      }
      if (this.linear) {
        const stepperItem = item.shadowRoot.querySelector('.stepper-item');
        disabledIndex = (this.items[this.index].getAttribute('required')) ? this.index + 1 : this.index + 2;
        if (this.items.indexOf(item) >= disabledIndex) {
          stepperItem.classList.add('disabled');
        } else {
          stepperItem.classList.remove('disabled');
        }
      }
    });
    for (let item of this.items) {
      item.classList.add('active');
      let itemIndex = this.items.indexOf(item);
      if (itemIndex !== this.index) {
        this.addCheckmark(itemIndex);
      } else if (itemIndex == this.index) {
        break;
      }
    }
    this.optionSelected.emit(event.detail);
  }

  @Method()
  async stepCompleted() {
    let removeReq;
    this.items.forEach((item: any) => {
      if (this.items.indexOf(item) == this.index && item.required && !removeReq) {
        removeReq = true;
        this.index = this.items.indexOf(item) + 1;
        this.items[this.index].classList.add('active');
        this.addCheckmark(this.index-1);
        if (this.linear) {
          this.items[this.index].shadowRoot.querySelector('.stepper-item').classList.remove('disabled');
          if (!this.items[this.index].getAttribute('required')) {
            this.items[this.index + 1].shadowRoot.querySelector('.stepper-item').classList.remove('disabled');
          }
        }
      }
    });
    if (removeReq && !this.linear) {
      for (let item of this.items) {
        let itemIndex = this.items.indexOf(item);
        if (itemIndex >= this.index) {
          item.shadowRoot.querySelector('.stepper-item').classList.remove('disabled');
        }
        if (item.getAttribute('required')) {
          break;
        }
      }
    }
  }

  addCheckmark(index: number) {
    let indicator = this.items[index].shadowRoot.querySelector('span');
    indicator.classList.add('se-icon');
    indicator.innerText = 'notification_ok';
  }

  componentDidLoad() {
    let reqIndex, disabledIndex;
    this.items = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
      item.classList.add(this.color);
      if (item.shadowRoot) {
        const spanElement = item.shadowRoot.querySelector('span');
        const listItemElement = item.shadowRoot.querySelector('.stepper-item');
        spanElement.innerText = this.items.indexOf(item) + 1;
        if (item.required && !reqIndex && reqIndex !== 0) {
          reqIndex = this.items.indexOf(item);
        }
        if (this.linear) {
          disabledIndex = (reqIndex == 0) ? this.items.indexOf(item) > 0 : this.items.indexOf(item) > 1;
          if (disabledIndex) {
            listItemElement.classList.add('disabled');
          }
        }
        if (this.items.indexOf(item) > reqIndex) {
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