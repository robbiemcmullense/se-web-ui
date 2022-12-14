import {
  Component,
  h,
  Method,
  Element,
  State,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core';
import testResultsNok from '@se/icons/svg/test_results_nok.svg';

const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';
const OPEN_ITEM = 'open-item';

@Component({
  tag: 'se-sidemenu',
  styleUrl: 'sidemenu.scss',
  shadow: true,
})
export class SidemenuComponent {
  backdropEl?: HTMLElement;
  menuInnerEl?: HTMLElement;
  menuItemInnerEl?: HTMLElement;
  observer: any;
  @Element() el: HTMLElement;
  @State() open = false;
  @State() items: HTMLElement[] = [];
  @State() selectedItem?: HTMLElement;
  @Prop() disabled = false;
  /**
   * When the menu is opened, it will trigger a `toggled` event with `event.detail.state` set to `open`.
   * When the menu is closed, it will trigger a `toggled` event with `event.detail.state` set to `closed`.
   */
  @Event() toggled: EventEmitter<any>;
  @Event() didNavigationClick: EventEmitter<any>;
  /**
   * Defines the text displayed in the header of the Sidemenu.
   * The default value is `Menu`.
   */
  @Prop() label = 'Menu';
  /*
   * Defines the link to be uses in the external-link element of the Sidemenu.
   * The default value is www.se.com, which will generate if no link is defined.
   * If a different url is provided it will replace the default value.
   * If an empty string is provided the external link element will not be generated.
   */
  @Prop() link = 'www.se.com';
  /**
   * Toggle the sidemenu. Optionally, pass the `item` or `id` of a sidemenu-item to open that particular menu item.
   *
   * ex: `document.getElementById("main-sidemenu").toggle("side-about");`
   */
  @Method()
  async toggle(itemName?: string) {
    if (!this.disabled) {
      // Only perform toggle if no item name is passed or menu is closed
      if (!this.open || !itemName || (itemName && !this.open)) {
        // Only perform open animation if menu is closed
        if (!this.open) {
          this.el.classList.add(SHOW_MENU);
          this.addAnimation(null);
        }
        this.open = !this.open;
      } else if (
        this.selectedItem &&
        this.isItemElement(this.selectedItem, itemName)
      ) {
        // Deselect the active item if a new item name is passed
        this.unselectAll();
      }

      if (this.open) {
        if (itemName) {
          // If an item name was provided, open that item in the menu (#228)
          const itemElement = this.getItemElement(itemName);
          if (itemElement) {
            // Select the new active element
            this.setActive(itemElement);
          }
        } else {
          try {
            if (this.items.find(x => x.classList.contains('active'))) {
              this.el.classList.add(OPEN_ITEM);
            }
          } catch (error) {
            console.error(error);
          }
        }
        // Dispatch the 'opened' event
        this.toggled.emit({ state: 'open' });
      } else {
        // Remove css classes and unselect the active element
        this.removeAnimation(() => {
          this.el.classList.remove(SHOW_MENU);
        });
        this.unselectAll();
        // Dispatch the 'closed' event
        this.toggled.emit({ state: 'closed' });
      }
    }
  }

  noSelectedItem() {
    return !this.items.find(x => x === this.selectedItem);
  }

  unselectAll(): void {
    this.el.classList.remove(OPEN_ITEM);
    if (this.selectedItem && !this.selectedItem.childElementCount) {
      this.selectedItem = undefined;
      this.items.forEach((item: any) => {
        item.active = false;
      });
    }
  }

  getItemElement(name: string): HTMLElement {
    return this.items.find(i => this.isItemElement(i, name));
  }

  isItemElement(elm: HTMLElement, name: string): boolean {
    return elm.getAttribute('item') === name || elm.getAttribute('id') === name;
  }

  setActive(itemActive: any): void {
    if (!this.disabled && this.items.length) {
      this.items.forEach((item: any) => {
        item.active = false;
      });
      setTimeout(() => {
        itemActive.active = true;
        this.selectedItem = itemActive;
        this.el.classList.add(OPEN_ITEM);
      }, 100);
    }
  }

  addAnimation(callback) {
    try {
      this.menuInnerEl.classList.add(SHOW_MENU);
      this.backdropEl.classList.add(SHOW_MENU);
      setTimeout(() => {
        this.menuInnerEl.classList.remove(SHOW_MENU);
        this.backdropEl.classList.remove(SHOW_MENU);
        if (callback) {
          callback();
        }
      }, 200);
    } catch (error) {
      console.error(error);
    }
  }

  removeAnimation(callback) {
    try {
      this.menuInnerEl.classList.add(HIDE_MENU);
      this.backdropEl.classList.add(HIDE_MENU);
      setTimeout(() => {
        this.menuInnerEl.classList.remove(HIDE_MENU);
        this.backdropEl.classList.remove(HIDE_MENU);
        if (callback) {
          callback();
        }
      }, 200);
    } catch (error) {
      console.error(error);
    }
  }

  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      let activeItem = false;
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          this.setItemsArray();
        }
        if (mutation.removedNodes.length) {
          this.setItemsArray();
          this.items.forEach((item: any) => {
            if (item.active) {
              activeItem = true;
            }
          });
          if (!activeItem && this.selectedItem) {
            // console.log(this.selectedItem);
            this.selectedItem = undefined;
          }
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }

  setItemsArray() {
    this.items = Array.from(this.el.querySelectorAll('se-sidemenu-item'));
  }

  renderList() {
    return this.items.map((item: any) => {
      return [
        <se-list-item
          class={[
            !item.childElementCount ? 'hide-nav-icon' : '',
            'sidemenu-list-item',
          ].join(' ')}
          onClick={() => {
            this.setActive(item);
            this.didNavigationClick.emit();
          }}
          selected={item.active}
          item={item.item}
          id={item.id ? `list-${item.id}` : ''}
        />,
      ];
    });
  }

  componentWillLoad() {
    this.setItemsArray();
    this.watchItemList();
  }

  disconnectedCallback() {
    this.items.length = 0;
    this.selectedItem = undefined;
    this.observer.disconnect();
  }

  render() {
    return [
      <div
        class="menu-background animated d-flex-row flex"
        onClick={() => {
          this.toggle();
          this.didNavigationClick.emit();
        }}
        ref={el => (this.backdropEl = el)}
      />,
      <div
        class="actual-menu animated full-content d-flex-column flex"
        ref={el => (this.menuInnerEl = el)}
      >
        <div class="d-flex flex">
          <se-block width="250px">
            <div class="d-flex-center flex">
              <span class="menu-sidenav" onClick={() => this.toggle()}>
                <se-icon size="large" color="primary">
                  <span innerHTML={testResultsNok}></span>
                </se-icon>
              </span>
              <h3 class="header-title">{this.label}</h3>
            </div>
            <se-divider />
            <se-block-content option="fill">
              <se-list option="nav">{this.renderList()}</se-list>
            </se-block-content>
            <se-icon-lifeison class="footer-icon" color="standard" />
            {this.link ? (
              <div class="external-link">
                <se-link class="sidemenu-link" url={`http://${this.link}`}>
                  {this.link}
                </se-link>
              </div>
            ) : (
              ''
            )}
          </se-block>
          <se-divider option="vertical"></se-divider>
          <se-block ref={el => (this.menuItemInnerEl = el)}>
            <slot />
          </se-block>
        </div>
      </div>,
    ];
  }
}
