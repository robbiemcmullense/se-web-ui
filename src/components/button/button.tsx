import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'se-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonComponent {

  @Prop() mode: 'flat' | 'raised' | 'text' | 'login' | 'signup';
  @Prop() color: 'primary' | 'accent' | 'warn' | 'error';
  @Prop() isDisabled: boolean = false;
  @Element() el: HTMLElement;
  @Event() change: EventEmitter<any>;

  render() {
    return (
      <button data-mode={this.mode} color={this.color} disabled={this.isDisabled} onClick={() => this.emitEvent()}>
        <slot></slot>
      </button>
    )
  }

  emitEvent() {
    this.change.emit(this.el);
  }
}