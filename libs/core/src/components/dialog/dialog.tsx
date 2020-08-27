import {
  Component,
  h,
  Prop,
  Element,
  Method,
  Event,
  EventEmitter,
  Watch,
  Listen,
  Host,
  State,
} from '@stencil/core';

@Component({
  tag: 'se-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class DialogComponent {
  SHOW = 'show-dialog';
  HIDE = 'hide-dialog';

  @Element() el: HTMLElement;

  /**
   * Defines the size of the modal.
   * `small`: used in alerts and messages
   * `medium`: default setting, used by other apps
   * `fill`: takes the full space of the screen
   */
  @Prop() size: 'small' | 'medium' | 'large' | 'fill' = 'medium';
  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text
   * `primary`: Primary color schema and default setting.
   */
  @Prop() color: 'alternative' | 'primary' = 'primary';
  /**
   * Indicates whether or not the dialog is open or closed.  Default setting is `false`.
   */
  @Prop({ mutable: true }) open: boolean;
  @Watch('open') openDidChange() {
    if (this.open) {
      this.addAnimation();
    } else {
      this.removeAnimation(() => {
        this.didClose.emit();
      });
    }
  }
  /**
   * Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `true`.
   */
  @Prop() canBackdrop = true;
  /**
   * Emit the `backdrop` event from the dialog's parent component if `canBackdrop=true`. When the event is emitted, the dialog is automatically closed.
   */
  @Method()
  async backdropClicked() {
    if (this.canBackdrop) {
      // Only emit if canBackdrop was clicked
      this.backdrop.emit();
      this.open = false;
    }
  }
  /**
   * Send data to the parent component when the backdrop is clicked.
   */
  @Event() backdrop: EventEmitter<any>;
  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
   * The modal can then be safely removed from the DOM.
   */
  @Event() didClose: EventEmitter<any>;

  assignDialogHeaderColor() {
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach(
      (item: any) => {
        if (!item.color) {
          item.color = this.color;
        }
      }
    );
  }

  /**
   * Emit the `backdrop` event from the dialog's parent component if the escape key is clicked and if `canBackdrop=true`.
   */
  @Listen('keydown', { target: 'document' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.open) {
      this.backdropClicked();
    }
  }

  @State() modalAnimation: string;
  @State() showModal: boolean;

  addAnimation(callback = () => {}) {
    this.showModal = true;
    this.modalAnimation = this.SHOW;
    setTimeout(() => {
      this.modalAnimation = null;
      callback();
    }, 500);
  }

  removeAnimation(callback = () => {}) {
    this.modalAnimation = this.HIDE;
    setTimeout(() => {
      this.modalAnimation = null;
      this.showModal = false;
      callback();
    }, 500);
  }

  componentDidLoad() {
    this.assignDialogHeaderColor();
    if (this.open) {
      this.addAnimation();
    }
  }

  render() {
    return (
      <Host class={{ 'show-dialog': this.showModal }}>
        <div class={{ [this.size]: !!this.size, 'dialog-wrapper': true }}>
          <div
            class={{
              'dialog-background': true,
              [this.modalAnimation]: !!this.modalAnimation,
            }}
            onClick={() => this.backdropClicked()}
          ></div>
          <div
            class={{
              dialog: true,
              [this.modalAnimation]: !!this.modalAnimation,
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
