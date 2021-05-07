import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  Fragment,
} from '@stencil/core';
import { FiltrationSmartRefinementData } from '../types';
import { getRefinementData } from '../store';
import { option, size } from '../../checkbox/constants';
import { isIE11 } from '../../../utils';

@Component({
  tag: 'se-filtration-smart-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class FiltrationSmartCheckbox {
  /**
   * Id of the refinement that will be used to find the data in the Root Filter store.
   */
  @Prop() refinementId!: string;

  /**
   * Defines if the checkbox is used in mobile view.
   */
  @Prop({ mutable: true }) isMobile = false;

  /**
   * Event that has info about refinement whose state should be changed. Root component listens to it.
   */
  @Event()
  refinementStateChanged: EventEmitter<string>;

  get data(): FiltrationSmartRefinementData {
    return getRefinementData(this.refinementId);
  }

  private onClick = (): void => {
    this.refinementStateChanged.emit(this.refinementId);
  };

  render(): HTMLElement {
    return (
      <se-list-item
        disabled={this.data.isDisabled}
        onClick={!this.data.isDisabled && this.onClick}
      >
        <se-checkbox
          selected={this.data.isChecked}
          disabled={this.data.isDisabled}
          option={option.CHECKBOX_FAKE}
          size={this.isMobile ? size.LARGE : size.SMALL}
          class={{
            checkbox: true,
            'checkbox--disabled': this.data.count === 0,
            'checkbox--ie': isIE11(),
          }}
        >
          <span slot="label" class="checkbox__label">
            {this.data.label}
            {this.data.count !== null && this.data.count !== undefined && (
              <Fragment>
                &nbsp;
                <span class="checkbox__label-count">({this.data.count})</span>
              </Fragment>
            )}
          </span>
        </se-checkbox>
      </se-list-item>
    );
  }
}
