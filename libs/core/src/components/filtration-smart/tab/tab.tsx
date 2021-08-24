import {
  Component,
  Event,
  EventEmitter,
  Prop,
  Element,
  h,
  Fragment,
} from '@stencil/core';
import { FiltrationSmartRefinementData } from '../types';
import { getRefinementData } from '../store';

@Component({
  tag: 'se-filtration-smart-tab',
  styleUrl: 'tab.scss',
  shadow: true,
})
export class FiltrationSmartTab {
  @Element() el: HTMLSeFiltrationSmartTabElement;

  /**
   * Id of the filter that will be used to find the data in the Root Filter store.
   */
  @Prop() refinementId!: string;

  /**
   * Event that has info about tab whose state should be changed. Root Filter component listens to it.
   */
  @Event()
  refinementStateChanged: EventEmitter<string>;

  get data(): FiltrationSmartRefinementData {
    return getRefinementData(this.refinementId);
  }

  private onClick = (): void => {
    this.refinementStateChanged.emit(this.refinementId);
  };

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render(): HTMLElement {
    return (
      <se-list-item
        onClick={!this.data.isChecked && !this.data.isDisabled && this.onClick}
        selected={this.data.isChecked}
        disabled={this.data.isChecked || this.data.isDisabled}
      >
        <span
          class={{
            tab: true,
            'tab--checked': this.data.isChecked,
          }}
        >
          <span innerHTML={this.data.label}/>
          {this.data.count !== null && this.data.count !== undefined && (
            <Fragment>
              &nbsp;
              <span class="tab__count">({this.data.count})</span>
            </Fragment>
          )}
        </span>
      </se-list-item>
    );
  }
}
