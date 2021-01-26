import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Watch,
  Listen,
  Host,
  State,
  Method,
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
  @Prop() size: 'small' | 'medium' | 'large' | 'xlarge' | 'fill' = 'medium';
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
   * @deprecated use noBackdrop='true' instead
   */
  @Prop() canBackdrop = true;

  /**
   * Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `false`.
   */
  @Prop() noBackdrop = false;

  /**
   * Send data to the parent component when the backdrop is clicked.
   */
  @Event() backdrop: EventEmitter<any>;
  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
   * The modal can then be safely removed from the DOM.
   */
  @Event() didClose: EventEmitter<any>;

  /**
   * Option to scroll page in browser window if set to `true`.
   */
  @Prop() pageScroll: boolean;

  /**
   * Emit the `backdrop` event from the dialog's parent component if `canBackdrop=true`. When the event is emitted, the dialog is automatically closed.
   */
  backdropClicked() {
    // we should not quit if the animation has no completed (many click on a button open/close the dialog)
    if (!this.modalAnimation) {
      /*
        |                          | canBackdrop | noBackdrop | result         |
        | ------------------------ | ----------- | ---------- | -------------- |
        | default :                | true        | false      | emit & close   |
        | we use canBackrop:       | false       | false      | don't emit     |
        | we use noBackdrop:       | true        | true       | don't emit     |
        | unlikely we modify both: | false       | true       | don't emit     |
      */

      if (this.canBackdrop && !this.noBackdrop) {
        // This should be deprecated
        // Only emit if canBackdrop was clicked
        this.backdrop.emit();
        this.didClose.emit();
        this.open = false;
      }
    }
  }
  assignDialogHeaderProps() {
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach(
      (item: HTMLSeDialogHeaderElement) => {
        if (!item.color) {
          item.color = this.color;
        }
      }
    );
  }

  assignDialogContentProps() {
    Array.from(this.el.querySelectorAll('se-dialog-content')).forEach(
      (item: HTMLSeDialogContentElement) => {
        if (item.nextElementSibling) {
          item.isLastChild = false;
        }
      }
    );
  }

  /**
   * Emit the `backdrop` event from the dialog's parent component if the escape key is clicked and if `canBackdrop=true`.
   */
  @Listen('keydown', { target: 'document' })
  handleKeyDown(ev: KeyboardEvent) {
    const { key } = ev;

    // IE11 uses 'Esc'
    if (key === 'Escape' || (key === 'Esc' && this.open)) {
      this.backdropClicked();
    }
  }

  @Listen('didCloseDialog', { target: 'document' })
  handleCloseDialog(ev: CustomEvent) {
    // Mke sure the even is coming from the same dialog
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach(
      (item: HTMLSeDialogHeaderElement) => {
        if (item === ev.target) {
          this.open = false;
        }
      }
    );
  }

  @State() modalAnimation: string;
  @State() showModal: boolean;

  addAnimation(
    callback = () => {
      // do nothing.
    }
  ) {
    this.showModal = true;
    this.modalAnimation = this.SHOW;
    setTimeout(() => {
      this.modalAnimation = null;
      callback();
    }, 500);
  }

  removeAnimation(
    callback = () => {
      // do nothing.
    }
  ) {
    this.modalAnimation = this.HIDE;
    setTimeout(() => {
      this.modalAnimation = null;
      this.showModal = false;
      callback();
    }, 500);
  }

  componentDidLoad() {
    this.assignDialogHeaderProps();
    this.assignDialogContentProps();
    if (this.open) {
      this.addAnimation();
    }
  }

  render() {
    return (
      <Host class={{ 'show-dialog': this.showModal }}>
        <div
          class={{
            [this.size]: !!this.size,
            'dialog-wrapper': true,
            'scroll-page': this.pageScroll,
          }}
        >
          <div
            class={{
              'dialog-background': true,
              [this.modalAnimation]: !!this.modalAnimation,
              'scroll-page': this.pageScroll,
            }}
            onClick={() => this.backdropClicked()}
          ></div>
          <div
            class={{
              dialog: true,
              [this.modalAnimation]: !!this.modalAnimation,
              'scroll-content': !this.pageScroll,
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
