import {
  Component,
  Element,
  h,
  Listen,
  State,
  Prop,
  Method,
  EventEmitter,
  Event,
} from '@stencil/core';
import notification_ok from '@se/icons/svg/notification_ok.svg';

@Component({
  tag: 'se-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class StepperComponent {
  @Element() el: HTMLElement;
  observer: any;
  @State() stepperItems: HTMLSeStepperItemElement[] = [];
  @State() selectedItem: HTMLSeStepperItemElement;
  @State() validatedChanged: boolean;
  @State() activeChanged: boolean;
  /**
   * Sets the background color of your stepper.
   * The default setting is `primary`, implementing a green background for the stepper visual items.
   * The `alternative` setting implements a white background for the stepper visual items. This setting is best used against a gray background.
   */
  @Prop() color: 'primary' | 'alternative' = 'primary';
  /**
   * Defines if the stepper items must be completed sequentially.
   * The default setting is `true`, each stepper item must be validated before advancing to the next step.
   * `false` allows each step to be selected in any order.
   */
  @Prop() linear = true;

  /**
   * Defines if the stepper takes the whole space.
   */
  @Prop() block = false;

  /**
   * Defines if the stepper items is interactive or not.
   * The default setting is `true`, each stepper item can be interacted with. `linear` keeps its same interaction limitation.
   * `false` disabled the interactivness. It overrides the individual stepper item `interactive` property.
   */
  @Prop() interactive = true;

  /**
   * Sets the max width for each stepper label
   * The default setting is `none`.
   */
  @Prop() labelMaxWidth: string;

  /**
   * Sets the labels of the stepper items to be stacked below the steps
   * The default setting is `false`.
   */
   @Prop() stacked = false;

  /**
   * Event to send to the parent component when a stepper item is clicked and next and previous will be clicked.
   * The Stepper Item data is passed to the parent.
   */
  @Event({
    bubbles: false,
  })
  didChange: EventEmitter;
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
    this.selectStep(this.stepperItems[step - 1]);
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

  onItemClicked(item: any) {
    if (!this.canItemBeSelected(item)) {
      return;
    }
    this.selectStep(item);
  }

  selectStep(item: any) {
    if (this.selectedItem) {
      this.selectedItem.active = false;
    }
    this.selectedItem = item;
    if (item) {
      this.selectedItem.active = true;
    }
    this.didChange.emit(item);
  }

  @Listen('didValidate') itemValidated(value) {
    this.validatedChanged = value;
  }

  @Listen('didActivate') itemActivated(value) {
    this.activeChanged = value;
  }

  getItemStep(item: any) {
    return this.stepperItems.indexOf(item) + 1;
  }

  checkIfPreviousItemValidated(item: any) {
    if (this.getItemStep(item) > 1 && this.linear) {
      return this.stepperItems[this.stepperItems.indexOf(item) - 1].validated;
    }
    return true;
  }

  canItemBeSelected(item: any) {
    if (!this.linear || item.validated || this.getItemStep(item) === 1) {
      return true;
    }
    const itemIndex = this.stepperItems.indexOf(item);
    const previousItems = this.stepperItems.slice(0, itemIndex);
    return previousItems.every((_item: any) => _item.validated);
  }

  renderList() {
    return this.stepperItems.map((item: any) => {
      const itemStep = this.getItemStep(item);
      const isReadOnly = !(this.interactive && item.interactive);
      const disabled = !this.checkIfPreviousItemValidated(item);
      const TagType = isReadOnly || disabled ? ('div' as any) : 'button';
      const displayStyle = {
        maxWidth: this.labelMaxWidth || '',
      };

      return [
        <li
          class={{
            'stepper-item-wrapper': true,
            block: this.block,
            stacked: this.stacked,
            selected:
              this.getItemStep(this.selectedItem) === itemStep ||
              item.validated,
          }}
        >
          <TagType
            class={{
              'stepper-item': true,
              disabled: !this.checkIfPreviousItemValidated(item),
              readonly: isReadOnly,
            }}
            onClick={event => {
              if (isReadOnly) {
                event.preventDefault();
                return;
              }
              this.selectStep(item);
            }}
          >
            <span class={{ indicator: true, active: item.active }}>
              {item.validated && !item.active ? (
                <se-icon>
                  <span innerHTML={notification_ok}></span>
                </se-icon>
              ) : (
                itemStep
              )}
            </span>
            <span
              class={{
                'stepper-item-label': true,
                'text-wrap': !!this.labelMaxWidth,
              }}
              style={displayStyle}
            >
              {item.label}
            </span>
          </TagType>
          {itemStep !== this.stepperItems.length ? (
            <se-divider class={{ block: this.block }}></se-divider>
          ) : (
            ''
          )}
        </li>,
      ];
    });
  }

  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          this.setItemsArray();
        }
        if (mutation.removedNodes.length) {
          this.setItemsArray();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }

  setItemsArray() {
    this.stepperItems =
      Array.from(this.el.querySelectorAll('se-stepper-item')) || [];
    let previousItemValidated = true;
    this.stepperItems.forEach((item: any) => {
      item.interactive =
        item.interactive === undefined ? true : !!item.interactive;
      if (this.linear) {
        item.validated = !!item.validated && previousItemValidated;
      }
      previousItemValidated = item.validated;
    });
    const selectionnableItems = this.stepperItems.filter(
      this.canItemBeSelected.bind(this)
    );
    const selectedItem =
      selectionnableItems.reverse().find((item: any) => item.active) ||
      selectionnableItems.find((item: any) => !item.validated) ||
      this.stepperItems[0] ||
      null;
    this.stepperItems.forEach((item: any) => {
      item.active = selectedItem === item;
    });
    this.selectStep(selectedItem);
  }

  componentDidLoad() {
    this.setItemsArray();
    this.watchItemList();
  }

  disconnectedCallback() {
    this.stepperItems.length = 0;
    this.selectedItem = undefined;
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return [
      <nav class={this.color}>
        <ol>{this.renderList()}</ol>
      </nav>,
      <slot></slot>,
    ];
  }
}
