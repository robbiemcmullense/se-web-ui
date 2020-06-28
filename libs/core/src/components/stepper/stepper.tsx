import { Component, Element, h, Listen, State, Prop, Method } from "@stencil/core";

@Component({
  tag: "se-stepper",
  styleUrl: "stepper.scss",
  shadow: true
})
export class StepperComponent {
  @Element() el: HTMLElement;
  @State() stepperItems: HTMLSeStepperItemElement[] = [];
  @State() selectedItem: HTMLSeStepperItemElement;
  @State() validatedChanged: boolean;
  /**
   * Sets the background color of your stepper.
   * The default setting is `primary`, implementing a green background for the stepper visual items.
   * The `alternative` setting implements a white background for the stepper visual items.  This setting is best used against a gray background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
  /**
   * Defines if the stepper items must be completed sequentially.
   * The default setting is `true`, each stepper item must be validated before advancing to the next step.
   * `false` allows each step to be selected in any order.
   */
  @Prop() linear = true;
  /**
   * Defines if the stepper items is interactive or not.
   * The default setting is `true`, each stepper item can be interacted with. `linear` keeps its same interaction limitation.
   * `false` disabled the interactivness. It overrides the individual stepper item `interactive` property.
   */
  @Prop() interactive = true;
  /**
   * Call the `reset` method to reset the stepper to the indicated step.  This also invalidates any validated steps.
   * It no step parameter is provided, it will reset to the first stepper item.
   */
  @Method()
  async reset(step = 1) {
    if (step >= this.getItemStep(this.selectedItem)) {
      return; // don't advance the stepper when clicking the reset button
    }
    this.stepperItems.forEach((item: HTMLSeStepperItemElement) => {
      if (this.getItemStep(item) >= step) {
        item.validated = false;
      }
    });
    this.selectStep(this.stepperItems[step-1]);
  }
  /**
   * Call the `previous` method to navigate to the previous step from the step that is currently selected.
   */
  @Method()
  async previous() {
    // do not trigger this method when the first stepper item is the active item
    if (this.getItemStep(this.selectedItem) > 1) {
      const index = this.stepperItems.indexOf(this.selectedItem);
      this.selectStep(this.stepperItems[index - 1]);
    }
  }
  /**
   * Call the `next` method to navigate to the next step from the step that is currently selected.
   * This will not work in linear mode if the next step is not validated.
   */
  @Method()
  async next(validate: boolean) {
    if (validate) {
      this.selectedItem.validated = true;
    }
    if (!this.linear || this.selectedItem.validated) {
      const index = this.stepperItems.indexOf(this.selectedItem);
      this.selectStep(this.stepperItems[index + 1]);
    }
  }

  selectStep(item: any) {
    this.selectedItem.active = false;
    this.selectedItem = item;
    this.selectedItem.active = true;
  }

  @Listen('didValidate') itemValidated(value) {
    this.validatedChanged = value;
  }

  getItemStep(item: any) {
    return this.stepperItems.indexOf(item) + 1;
  }

  checkIfPreviousItemValidated(item: any) {
    if (this.getItemStep(item) > 1 && this.linear) {
      return !this.stepperItems[this.stepperItems.indexOf(item)-1].validated;
    }
    return false;
  }

  renderList() {
    return this.stepperItems.map((item: any) => {
      const isReadOnly = !(this.interactive && item.interactive);
      return [
        <li class={["stepper-item-wrapper", (this.getItemStep(this.selectedItem) === this.getItemStep(item) || item.validated) ? "selected" : ''].join(' ')}>
          <div class={["stepper-item", this.checkIfPreviousItemValidated(item) ? "disabled" : '', isReadOnly ? 'readonly' : ''].join(' ')} onClick={(event) => {
              if(isReadOnly) {
                event.preventDefault();
                return;
              }
              this.selectStep(item);
            }
          }>
            <span class={["indicator", item.validated && !item.active ? "se-icon" : ''].join(' ')}>{this.getItemStep(item)}</span>
            <span class="stepper-item-label">{item.label}</span>
          </div>
          {this.getItemStep(item) !== this.stepperItems.length ? <se-divider></se-divider> : ''}
        </li>
      ]
    })
  }

  componentDidLoad() {
    this.stepperItems = Array.from(this.el.querySelectorAll('se-stepper-item'));
    this.stepperItems.forEach((item: any) => {
      item.interactive = item.interactive === undefined ? true : !!item.interactive;
      if (this.linear && !item.validated) {
        item.validated = false;
      }
    });
    this.selectedItem = this.stepperItems[0];
    this.selectedItem.active = true;
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
