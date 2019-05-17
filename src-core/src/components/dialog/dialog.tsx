import { Component, h, Host, Prop, Element, Method, Event, EventEmitter, Watch } from "@stencil/core";

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
   * Indicates whether or not the dialog is open (`true`) or closed (`false`).  Default setting is `false`.
   */
  @Prop() open: boolean = false;
  /**
   * option to enable click on backdrop (`true`) or (`false`).  Default setting is `true`.
   */
  @Prop() canBackdrop: boolean = true;

  @Watch('color') colorDidChange(){
    Array.from(this.el.querySelectorAll('se-dialog-header')).forEach((item: any) => {
      item.color = this.color;
    });
  }
  
  @Watch('open') openDidChange(){
    if(this.open){
      this.addAnimation(null);
    } else {
      this.removeAnimation(() => {
        this.didClose.emit();
      });
    }
  }
  /**
   * Emit the `backdrop` event from the dialog's parent component.
   */
  @Method()
  async backdropClicked() {
    if(this.canBackdrop){
    this.backdrop.emit();
    }
  }
  /**
   * Send data to the parent component when the backdrop is clicked.
   */
  @Event() backdrop: EventEmitter<any>;
  /**
   * Send data to the parent component when clicking an element within the dialog to close it.
   * The modal can be safely removed from the DOM.
   */
  @Event() didClose: EventEmitter<any>;

  private addAnimation(callback) {
    this.el.classList.add(SHOW);
    this.menuInnerEl.classList.add(SHOW);
    this.backdropEl.classList.add(SHOW);
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
    this.colorDidChange();
    this.openDidChange();
  }

  render(){
    return [
      <Host class={this.size}/>,
      <div class="dialog-wrapper" >
        <div class="dialog" ref={el => (this.menuInnerEl = el)}><slot /></div>
      </div>,
      <div class="dialog-background" onClick={() => this.backdropClicked()}  ref={el => this.backdropEl = el} />
    ];
  }
}