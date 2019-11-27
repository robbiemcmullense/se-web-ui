import { Component, Element, h, Listen, State, Prop, Method } from "@stencil/core";

@Component({
  tag: "se-stepper",
  styleUrl: "stepper.scss",
  shadow: true
})
export class StepperComponent {
  @Element() el: HTMLElement;
  @State() stepperItems: HTMLElement[] = [];
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

  stepperItemClickedHandler(event) {
    this.stepperItems.forEach((item: any) => {
      let indicator = Array.from(this.el.shadowRoot.querySelectorAll('span'));
      indicator.forEach((item: any) => {
        item.classList.remove('se-icon');
      });
      this.setSelectedItem(item, false);
      this.setSelectedContent(item, false);
      if (item.label === event) {
        this.index = this.stepperItems.indexOf(item);
      }
    });

    for (let item of this.stepperItems) {
      this.setSelectedItem(item, true);
      let itemIndex = this.stepperItems.indexOf(item);
      if (itemIndex < this.index) {
        this.addCheckmark(itemIndex);
      }
      if (itemIndex == this.index) {
        this.setSelectedContent(item, true);
        if (this.linear && this.checkIfValidated(item)) {
          this.setDisabledItem(this.stepperItems[this.index + 1], false);
        }
        break;
      }
    }
  }

  // advances the active stepper item by one when a required step is validated
  @Listen('itemValidated')
  validatedStepCompleted(value: boolean) {
    this.stepperItems.forEach((item: any) => {
      if (this.stepperItems.indexOf(item) == this.index && item.required && item.validated) {
        this.index = value ? this.stepperItems.indexOf(item) + 1 : 0;
        let stepperIndicators = Array.from(this.el.shadowRoot.querySelectorAll('.stepper-item')) as HTMLElement[];
        const nextItem: HTMLElement = stepperIndicators[this.index];
        nextItem.click();
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

  /**
   * Call the `reset` method to reset the stepper to the first step.  This also invalidates any validated steps.
   */
  @Method()
  async reset() {
    this.stepperItems.forEach((item: any) => {
      item.validated = false;
      item.disabled = (this.stepperItems.indexOf(item) == 0) ? false : true;
    });
    const firstItem: HTMLElement = this.stepperItems[0].shadowRoot.querySelector('.stepper-item');
    firstItem.click();
  }

  /**
   * Call the `previous` method to navigate to the previous step from the step that is currently selected.
   */
  @Method()
  async previous() {
    const prevItem: HTMLElement = this.stepperItems[this.index - 1].shadowRoot.querySelector('.stepper-item');
    prevItem.click();
  }

  /**
   * Call the `next` method to navigate to the next step from the step that is currently selected.
   * This will not work if the next step is required and not validated.
   */
  @Method()
  async next() {
    let nextStepValidated;
    this.stepperItems.forEach((item: any) => {
      if (this.stepperItems.indexOf(item) == this.index && (!item.required || item.validated)) {
        nextStepValidated = true;
      }
    });
    if (nextStepValidated) {
      const nextItem: HTMLElement = this.stepperItems[this.index + 1].shadowRoot.querySelector('.stepper-item');
      nextItem.click();
    }
  }

  addCheckmark(index: number) {
    let indicator = Array.from(this.el.shadowRoot.querySelectorAll('span'));
    for (var i = 0; i <= index; i++) {
      indicator[i].classList.add('se-icon');
    }
  }

  private checkIfValidated(item) {
    return item.validated;
  }

  private setSelectedItem(item: any, value: boolean) {
    item.selected = value;
  }

  private setDisabledItem(item: any, value: boolean) {
    item.disabled = value;
  }

  private setSelectedContent(item: any, value: boolean) {
    item.selectedContent = value;
  }

  renderList() {
    return this.stepperItems.map((item: any) => {
      return [
        <div class={["stepper-item-wrapper", item.selected ? "selected" : ''].join(' ')}>
          <div class={["stepper-item", item.disabled ? "disabled" : ''].join(' ')} onClick={() => this.stepperItemClickedHandler(item.label)}>
            <span class="indicator">{item.step}</span>
            <li class="stepper-item-label">{item.label}</li>
          </div>
          {this.stepperItems.indexOf(item) !== this.stepperItems.length - 1 ? <se-divider></se-divider> : ''}
        </div>
      ]
    })
  }

  componentDidLoad() {
    let requiredIndex;
    this.stepperItems = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.stepperItems.forEach((item: any) => {
      item.isLast = (item === this.stepperItems[this.stepperItems.length - 1]);
      item.classList.add(this.color);
      item.step = this.stepperItems.indexOf(item) + 1;
      if (this.linear) {
        item.required = true;
        item.validated = false;
        if (this.stepperItems.indexOf(item) > 0) {
          item.disabled = true;
        }
      } else {
        if (item.required && requiredIndex == undefined) {
          requiredIndex = this.stepperItems.indexOf(item);
        }
        if (this.stepperItems.indexOf(item) > requiredIndex) {
          item.disabled = true;
        }
      }
    });
    this.setSelectedItem(this.stepperItems[0], true);
    this.setSelectedContent(this.stepperItems[0], true);
  }

render() {
  return [
    <nav class={this.color}>
      <ol>
        {this.renderList()}
      </ol>
    </nav>,
    <slot></slot>
  ]
}
}