import { Component, Element, Event, EventEmitter, h, Listen, Watch, State, Prop } from "@stencil/core";

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
   * The default setting is `primary`, implementing a green background for the stepper visual items.
   * The `alternative` setting implements a white background for the stepper visual items.  This setting is best used against a gray background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
  /**
   * Defines if the stepper items must be completed sequentially.  The default setting is `false`.
   */
  @Prop() linear: boolean = false;
  /**
   * Set the validated property to true when a form field tied to a required step has the required input data.
   * The default setting is `false`.
   */
  @Prop() validated: boolean = false;
  /**
   * Emits an event to the parent component that a new stepper item has been selected.
   */
  @Event() optionSelected: EventEmitter;

  // changes the active stepper item when clicked on
  @Listen('didClick')
  stepperItemClickedHandler(event) {
    this.stepperItems.forEach((item: any) => {
      const indicator = item.shadowRoot.querySelector('span');
      indicator.classList.remove('se-icon');
      this.setActiveItem(item, false);
      //item.classList.remove('selected');
      if (item.label === event.detail.label) {
        this.index = this.stepperItems.indexOf(item);
      }
      if (this.linear) {
        const isRequired = this.stepperItems[this.index].getAttribute('required');
        const isValidated = this.stepperItems[this.index].getAttribute('validated');
        const disabledIndex = (isRequired && !isValidated) ? this.index + 1 : this.index + 2;
        if (this.stepperItems.indexOf(item) >= disabledIndex) {
          item.disabled = true;
        } else {
          item.disabled = false;
        }
      }
    });
    this.contentItems.forEach((item: any) => {
      item.classList.remove('active');
    });
    for (let item of this.stepperItems) {
      this.setActiveItem(item, true);
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

  // advances the active stepper item by one when a required step is validated
  @Watch('validated')
  validatedStepCompleted() {
    if (this.validated) {
      this.stepperItems.forEach((item: any) => {
        if (this.stepperItems.indexOf(item) == this.index && item.required && this.validated) {
          item.setAttribute('validated', true);
          this.index = this.stepperItems.indexOf(item) + 1;
          const nextItem: HTMLElement = this.stepperItems[this.index].shadowRoot.querySelector('.stepper-item');
          nextItem.click();
          this.addCheckmark(this.index - 1);
          if (this.linear) {
            this.setDisabledItem(this.stepperItems[this.index], false);
            if (!this.stepperItems[this.index].getAttribute('required')) {
              this.setDisabledItem(this.stepperItems[this.index + 1], false);
            }
          }
          this.validated = false;
        }
      });
      if (!this.linear) {
        for (let item of this.stepperItems) {
          let itemIndex = this.stepperItems.indexOf(item);
          if (itemIndex >= this.index) {
            this.setDisabledItem(item, false);
          }
          if (item.getAttribute('required') && itemIndex >= this.index) {
            break;
          }
        }
      }
    }
  }

  addCheckmark(index: number) {
    let indicator = this.stepperItems[index].shadowRoot.querySelector('span');
    indicator.classList.add('se-icon');
  }

  private setActiveItem(item: any, value: boolean) {
    item.active = value;
  }

  private setDisabledItem(item: any, value: boolean) {
    item.disabled = value;
  }

  componentDidLoad() {
    let requiredIndex;
    this.stepperItems = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.contentItems = Array.from(this.el.querySelectorAll('[slot="stepper-item-content"]'));
    this.stepperItems.forEach((item: any) => {
      item.isLast = (item === this.stepperItems[this.stepperItems.length - 1]);
      item.classList.add(this.color);
      item.step = this.stepperItems.indexOf(item) + 1;
      if (item.required && !requiredIndex && requiredIndex !== 0) {
        requiredIndex = this.stepperItems.indexOf(item);
      }
      if (this.linear) {
        const disabledIndex = (requiredIndex == 0) ? this.stepperItems.indexOf(item) > 0 : this.stepperItems.indexOf(item) > 1;
        if (disabledIndex) {
          item.disabled = true;
        }
      }
      if (this.stepperItems.indexOf(item) > requiredIndex) {
        item.disabled = true;
      }
    });
    //this.stepperItems[0].classList.add('selected');
    this.setActiveItem(this.stepperItems[0], true);
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