import { Component, Prop, Element, Method, Event, EventEmitter, Watch } from "@stencil/core";

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
   * Define the size of the modal.
   * `small`: used by alert and message
   * `medium`: used by other app
   * `fill`: take the full space of the screen
   */
  @Prop() size: "small" | "medium" | "large" | "fill" = "medium";

  /**
   * Define the color of the dialog header.
   * `alternative`: Alternative background with primary color for the text
   * `primary`: Primary color schema.
   */
  @Prop() color: 'alternative' | 'primary' = 'primary'
  /**
   * Indicates whether or not the dialog is open (`true`) or closed (`false`).
   */
  @Prop() open: boolean = false;

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
  backdropClicked(): void {
    this.backdrop.emit();
  }
  /**
   * event emitted when the backdrop is clicked.
   */
  @Event() backdrop: EventEmitter<any>;
  /**
   * event emitted after the animation of closing is done. The modal can be safely removed from the DOM
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
  }

  hostData() {
    return {
      class: [this.size].join(" ")
    };
  }

  render(){
    return [
      <div class="dialog-wrapper" >
        <div class="dialog" ref={el => (this.menuInnerEl = el)}><slot /></div>
      </div>,
      <div class="dialog-background"onClick={() => this.backdropClicked()}  ref={el => this.backdropEl = el} />
    ];
  }
}
