import { Component, Element, Event, EventEmitter, h, Listen, Method, State, Prop } from "@stencil/core";


@Component({
  tag: "se-stepper",
  styleUrl: "stepper.scss",
  shadow: true
})
export class StepperComponent {
  @Element() el: HTMLElement;
  @State() stepperItems: HTMLElement[] = [];
  @State() contentItems: HTMLElement[] = [];
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
    this.stepperItems.forEach((item: any) => {
      const indicator = item.shadowRoot.querySelector('span');
      indicator.classList.remove('se-icon');
      indicator.innerText = this.stepperItems.indexOf(item) + 1;
      item.classList.remove('selected');
      if (item.label === event.detail.label) {
        this.index = this.stepperItems.indexOf(item);
      }
      if (this.linear) {
        const stepperItem = item.shadowRoot.querySelector('.stepper-item');
        const disabledIndex = (this.stepperItems[this.index].getAttribute('required')) ? this.index + 1 : this.index + 2;
        if (this.stepperItems.indexOf(item) >= disabledIndex) {
          stepperItem.classList.add('disabled');
        } else {
          stepperItem.classList.remove('disabled');
        }
      }
    });

    this.contentItems.forEach((item: any) => {
      item.classList.remove('active');
    });

    for (let item of this.stepperItems) {
      item.classList.add('selected');
      let itemIndex = this.stepperItems.indexOf(item);
      if (itemIndex !== this.index) {
        this.addCheckmark(itemIndex);
      } else if (itemIndex == this.index) {
        break;
      }
    }
    this.contentItems[this.index].classList.add('active');
    this.optionSelected.emit(event.detail);
  }

  @Method()
  async stepCompleted() {
    let stepValidated;
    this.stepperItems.forEach((item: any) => {
      if (this.stepperItems.indexOf(item) == this.index && item.required && !stepValidated) {
        stepValidated = true;
        this.index = this.stepperItems.indexOf(item) + 1;
        const nextItem: HTMLElement = this.stepperItems[this.index].shadowRoot.querySelector('.stepper-item');
        nextItem.click();
        this.addCheckmark(this.index-1);
        
        if (this.linear) {
          nextItem.classList.remove('disabled');
          if (!this.stepperItems[this.index].getAttribute('required')) {
            this.stepperItems[this.index + 1].shadowRoot.querySelector('.stepper-item').classList.remove('disabled');
          }
        }
      }
    });
    if (stepValidated && !this.linear) {
      for (let item of this.stepperItems) {
        let itemIndex = this.stepperItems.indexOf(item);
        if (itemIndex >= this.index) {
          item.shadowRoot.querySelector('.stepper-item').classList.remove('disabled');
        }
        if (item.getAttribute('required') && this.stepperItems.indexOf(item) >= this.index) {
          break;
        }
      }
    }
  }

  addCheckmark(index: number) {
    let indicator = this.stepperItems[index].shadowRoot.querySelector('span');
    indicator.classList.add('se-icon');
    indicator.innerText = 'notification_ok';
  }

  componentDidLoad() {
    let requiredIndex;
    this.stepperItems = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.contentItems = Array.from(this.el.querySelectorAll('[slot="stepper-item-content"]'));
    this.stepperItems.forEach((item: any) => {
      item.isLast = (item === this.stepperItems[this.stepperItems.length - 1]);
      item.classList.add(this.color);
      if (item.shadowRoot) {
        const spanElement = item.shadowRoot.querySelector('span');
        const listItemElement = item.shadowRoot.querySelector('.stepper-item');
        spanElement.innerText = this.stepperItems.indexOf(item) + 1;
        if (item.required && !requiredIndex && requiredIndex !== 0) {
          requiredIndex = this.stepperItems.indexOf(item);
        }
        if (this.linear) {
          const disabledIndex = (requiredIndex == 0) ? this.stepperItems.indexOf(item) > 0 : this.stepperItems.indexOf(item) > 1;
          if (disabledIndex) {
            listItemElement.classList.add('disabled');
          }
        }
        if (this.stepperItems.indexOf(item) > requiredIndex) {
          listItemElement.classList.add('disabled');
        }
      }
    });
    this.stepperItems[0].classList.add('selected');
    this.contentItems[0].classList.add('active');
  }

  render() {
    return (
      <nav class={this.color}>
        <ol>
          <slot></slot>
        </ol>
        <slot name="stepper-item-content"></slot>
      </nav>
    )
  }
}