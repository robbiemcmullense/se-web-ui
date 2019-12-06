import { Component, h, Prop, Element, Method, Event, EventEmitter, Watch, Listen } from "@stencil/core";

const SHOW = "show-dialog";
const HIDE = "hide-dialog";

@Component({
  tag: "se-dialog",
  styleUrl: "dialog.scss",
  shadow: true
})
export class DialogComponent {
  backdropEl?: HTMLElement;
  menuInnerEl?: HTMLElement;
  @Element() el: HTMLElement;
  /**
   * Defines the size of the modal.
   * `small`: used in alerts and messages
   * `medium`: default setting, used by other apps
   * `fill`: takes the full space of the screen
   */
  @Prop() size: "small" | "medium" | "large" | "fill" = "medium";
  /**
   * Defines the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text
   * `primary`: Primary color schema and default setting.
   */
  @Prop() color: 'alternative' | 'primary' = 'primary'
  /**
   * Indicates whether or not the dialog is open or closed.  Default setting is `false`.
   */
  @Prop({mutable: true}) open: boolean = false;
  /**
   * Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `true`.
   */
  @Prop() canBackdrop: boolean = true;

  assignDialogHeaderColor() {
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach((item: any) => {
      if (!item.color) {
        item.color = this.color;
      }
    });
  }

  @Watch('open') openDidChange() {
    if(this.open){
      this.addAnimation(null);
    } else {
      this.removeAnimation(() => {
        this.didClose.emit();
      });
    }
  }
  /**
   * Emit the `backdrop` event from the dialog's parent component if `canBackdrop=true`. When the event is emitted, the dialog is automatically closed.
   */
  @Method()
  async backdropClicked() {
    if(this.canBackdrop){
      // Only emit if canBackdrop was clicked
      this.backdrop.emit();
      this.open = false;
    }
  }
  /**
   * Emit the `backdrop` event from the dialog's parent component if the escape key is clicked and if `canBackdrop=true`.
   */
  @Listen('keydown', { target: "document" })
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'Escape' && this.open){
      this.backdropClicked();
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

  private addAnimation(callback) {
    this.el.classList.add(SHOW);
    if (this.menuInnerEl && this.backdropEl) {
      this.menuInnerEl.classList.add(SHOW);
      this.backdropEl.classList.add(SHOW);
    }
    setTimeout(() => {
      this.menuInnerEl.classList.remove(SHOW);
      this.backdropEl.classList.remove(SHOW);
      callback && callback();
    }, 500);
  }

  private removeAnimation(callback) {
    this.menuInnerEl.classList.add(HIDE);
    this.backdropEl.classList.add(HIDE);
    setTimeout(() => {
      this.menuInnerEl.classList.remove(HIDE);
      this.backdropEl.classList.remove(HIDE);
      this.el.classList.remove(SHOW);
      callback && callback();
    }, 500);
  }

  componentDidLoad() {
    this.assignDialogHeaderColor();
    this.openDidChange();
  }

  render(){
    return (
      <div class={`${this.size} dialog-wrapper`}>
        <div class="dialog-background" onClick={() => this.backdropClicked()}  ref={el => this.backdropEl = el}></div>
        <div class="dialog" ref={el => (this.menuInnerEl = el)}><slot></slot></div>
      </div>
    )
  }
}
