import { h } from '../se-components.core.js';

class ChipComponent {
    constructor() {
        this.canClose = true;
    }
    closeChip() {
        this.close.emit(this.value);
    }
    hostData() {
        return {
            'class': this.color
        };
    }
    render() {
        return [
            h("div", { class: "value" }, this.value),
            this.canClose && h("div", { class: "close se-icon", onClick: () => this.closeChip() }, "action_delete_cross")
        ];
    }
    static get is() { return "se-chip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "canClose": {
            "type": Boolean,
            "attr": "can-close"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "close",
            "method": "close",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-se-chip-h{display:-ms-inline-flexbox;display:inline-flex;margin:8px;height:32px;padding-left:16px;padding-right:16px;font-size:14px;line-height:16px;text-align:left;outline:none;border:none;border-radius:16px;color:#333;color:var(--,#333);background-color:#e6e6e6;background-color:var(--,#e6e6e6)}.sc-se-chip-h:not([disabled]):focus, .sc-se-chip-h:not([disabled]):hover{background-color:#cbcbcb}.sc-se-chip-h:not([disabled]):active{background-color:#626469;color:#fff}.sc-se-chip-h   .se-icon.sc-se-chip, .sc-se-chip-h   .value.sc-se-chip{padding-top:8px}.sc-se-chip-h   .se-icon.sc-se-chip{cursor:pointer;font-size:24px;margin-left:10px;margin-right:-10px;font-family:se-icon}.sc-se-chip-h   .se-icon[data-hide].sc-se-chip{display:none}.primary.sc-se-chip-h{background-color:#3dcd58;background-color:var(--primary,#3dcd58);color:#fff;color:var(--,#fff)}.primary.sc-se-chip-h:not([disabled]):focus, .primary.sc-se-chip-h:not([disabled]):hover{background-color:#32ad3c}.primary.sc-se-chip-h:not([disabled]):active{background-color:#626469;color:#fff}.primary.active.sc-se-chip-h{background-color:#007626;background-color:var(--,#007626)}.accent.sc-se-chip-h{background-color:#219bfd;background-color:var(--accent,#219bfd);color:#fff;color:var(--,#fff)}.accent.sc-se-chip-h:not([disabled]):focus, .accent.sc-se-chip-h:not([disabled]):hover{background-color:#0087cd}.accent.sc-se-chip-h:not([disabled]):active{background-color:#626469;color:#fff}.accent.active.sc-se-chip-h{background-color:#0087cd;background-color:var(--,#0087cd)}.warn.sc-se-chip-h{background-color:#e47f00;background-color:var(--warn,#e47f00);color:#fff;color:var(--,#fff)}.warn.sc-se-chip-h:not([disabled]):focus, .warn.sc-se-chip-h:not([disabled]):hover{background-color:#ffd100}.warn.sc-se-chip-h:not([disabled]):active{background-color:#626469;color:#fff}.warn.active.sc-se-chip-h{background-color:#ffd100;background-color:var(--,#ffd100)}.error.sc-se-chip-h{background-color:#dc0a0a;background-color:var(--error,#dc0a0a);color:#fff;color:var(--,#fff)}.error.sc-se-chip-h:not([disabled]):focus, .error.sc-se-chip-h:not([disabled]):hover{background-color:#b10043}.error.sc-se-chip-h:not([disabled]):active{background-color:#626469;color:#fff}.error.active.sc-se-chip-h   button.sc-se-chip, .error.active.sc-se-chip-h   button.sc-se-chip:focus{background-color:#b10043;background-color:var(--,#b10043)}"; }
}

class ListComponent {
    constructor() {
        this.mode = "classic";
    }
    PropDidChange() {
        this.updateItemMode();
    }
    componentDidLoad() {
        this.updateItemMode();
    }
    updateItemMode() {
        let items = this.el.querySelectorAll('se-list-item');
        items.forEach((item) => {
            item.mode = this.mode;
        });
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "se-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode",
            "watchCallbacks": ["PropDidChange"]
        }
    }; }
    static get style() { return ".sc-se-list-h{width:100%;height:100%;z-index:0;position:relative;overflow:hidden}"; }
}

class ListItemComponent {
    hostData() {
        return {
            class: [this.selected && 'selected', this.mode].join(' ')
        };
    }
    render() {
        return [
            h("button", null,
                h("div", null,
                    h("div", { class: "selectedBar" }),
                    h("div", { class: "nav-text" }, this.itemTitle)),
                h("i", { class: "se-icon" }, "arrow2_right")),
            h("se-divider", null)
        ];
    }
    static get is() { return "se-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "itemTitle": {
            "type": String,
            "attr": "item-title"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        }
    }; }
    static get style() { return ".sc-se-list-item-h{position:relative;display:block;margin:0;font-weight:lighter;font-size:20px;width:100%;height:50px}.sc-se-list-item-h   .se-icon.sc-se-list-item{font-family:se-icon;font-style:normal;font-size:40px}.sc-se-list-item-h   button.sc-se-list-item{border:none;margin:0;padding:0;width:100%;height:100%;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;text-align:start}.sc-se-list-item-h   button.sc-se-list-item   .selectedBar.sc-se-list-item{display:none}.sc-se-list-item-h   button.sc-se-list-item   .nav-text.sc-se-list-item{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;padding-left:20px}.nav.selected.sc-se-list-item-h{color:mat-color(#3dcd58);color:var(--primary,mat-color(#3dcd58))}.nav.selected.sc-se-list-item-h   .selectedBar.sc-se-list-item{display:block;position:absolute;top:0;bottom:0;width:5px;background-color:#3dcd58;background-color:var(----primary,#3dcd58)}"; }
}

const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';
class SidenavComponent {
    constructor() {
        this.open = false;
        this.items = [];
    }
    toggle() {
        this.open = !this.open;
        if (this.open) {
            this.el.classList.add(SHOW_MENU);
            this.addAnimation(null);
        }
        else {
            this.removeAnimation(() => {
                this.el.classList.remove(SHOW_MENU);
            });
        }
    }
    async componentWillLoad() {
        this.items = Array.from(this.el.querySelectorAll('se-sidenav-item'));
    }
    componentDidLoad() {
        this.initSelect();
    }
    componentDidUnload() {
        this.items.length = 0;
        this.selectedItem = undefined;
    }
    async initSelect() {
        if (!this.selectedItem) {
            this.setActive(this.items[0]);
        }
    }
    setActive(item) {
        this.items.forEach((item) => {
            item.active = false;
        });
        item.active = true;
        this.selectedItem = item;
    }
    addAnimation(callback) {
        this.menuInnerEl.classList.add(SHOW_MENU);
        this.backdropEl.classList.add(SHOW_MENU);
        setTimeout(() => {
            this.menuInnerEl.classList.remove(SHOW_MENU);
            this.backdropEl.classList.remove(SHOW_MENU);
            callback && callback();
        }, 500);
    }
    removeAnimation(callback) {
        this.menuInnerEl.classList.add(HIDE_MENU);
        this.backdropEl.classList.add(HIDE_MENU);
        setTimeout(() => {
            this.menuInnerEl.classList.remove(HIDE_MENU);
            this.backdropEl.classList.remove(HIDE_MENU);
            callback && callback();
        }, 500);
    }
    renderList() {
        return this.items.map((item) => {
            return [
                h("se-list-item", { onClick: () => this.setActive(item), selected: item.active, "item-title": item.itemTitle }),
            ];
        });
    }
    render() {
        return [
            h("div", { class: "menu-background animated", onClick: () => this.toggle(), ref: el => this.backdropEl = el }),
            h("div", { class: "actual-menu animated full-content d-flex-column flex", ref: el => this.menuInnerEl = el },
                h("div", { class: "d-flex-center" },
                    h("div", { class: "d-flex-center flex" },
                        h("i", { class: "se-icon menu-sidenav", onClick: () => this.toggle() }, "test_results_nok"),
                        h("h3", { class: "header-title" }, "Menu")),
                    h("se-chip", { color: "primary", "can-close": "false", value: "https://schneider-electric.com" })),
                h("se-divider", null),
                h("div", { class: "d-flex flex" },
                    h("div", { class: "listNavItems" },
                        h("se-list", { mode: "nav" }, this.renderList()),
                        h("img", { class: "image-logo", alt: "Schneider electric logo" })),
                    h("se-divider", { mode: "vertical" }),
                    h("div", { class: "flex" },
                        h("slot", null))))
        ];
    }
    static get is() { return "se-sidenav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "items": {
            "state": true
        },
        "open": {
            "state": true
        },
        "selectedItem": {
            "state": true
        },
        "toggle": {
            "method": true
        }
    }; }
    static get style() { return "\@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}\@keyframes fadeOut{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.sc-se-sidenav-h{display:none;height:100%;width:100%;z-index:20;background-color:transparent!important}.sc-se-sidenav-h, .sc-se-sidenav-h   .full-content.sc-se-sidenav{position:absolute;top:0;left:0}.sc-se-sidenav-h   .full-content.sc-se-sidenav{bottom:0;right:0}.sc-se-sidenav-h   .actual-menu.sc-se-sidenav{position:absolute;top:0;left:0;width:80%;height:100%;background-color:#fff;z-index:30}.sc-se-sidenav-h   .actual-menu.show-menu.sc-se-sidenav{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}.sc-se-sidenav-h   .actual-menu.hide-menu.sc-se-sidenav{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}.sc-se-sidenav-h   .menu-button.sc-se-sidenav{width:100%;margin:0;padding:10px}.sc-se-sidenav-h   .animated.sc-se-sidenav{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.sc-se-sidenav-h   .image-logo.sc-se-sidenav{height:45px;margin:0 auto}.sc-se-sidenav-h   .menu-background.sc-se-sidenav{position:absolute;background-color:rgba(38,38,38,.2);top:0;left:0;width:100%;min-height:100%;z-index:5}.sc-se-sidenav-h   .menu-background.show-menu.sc-se-sidenav{-webkit-animation-name:fadeIn;animation-name:fadeIn}.sc-se-sidenav-h   .menu-background.hide-menu.sc-se-sidenav{-webkit-animation-name:fadeOut;animation-name:fadeOut}.sc-se-sidenav-h   .se-icon.sc-se-sidenav{font-family:se-icon;font-style:normal}.sc-se-sidenav-h   .menu-sidenav.sc-se-sidenav{color:#3dcd58;color:var(--primary,#3dcd58);cursor:pointer;font-size:63px!important;margin-right:-17px}.sc-se-sidenav-h   .flex.sc-se-sidenav{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}.sc-se-sidenav-h   .d-flex.sc-se-sidenav{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left}.sc-se-sidenav-h   .d-flex.sc-se-sidenav, .sc-se-sidenav-h   .d-flex-center.sc-se-sidenav{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.sc-se-sidenav-h   .d-flex-center.sc-se-sidenav{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.sc-se-sidenav-h   .d-flex-column.sc-se-sidenav{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left}.sc-se-sidenav-h   .d-flex-column.sc-se-sidenav, .sc-se-sidenav-h   .listNavItems.sc-se-sidenav{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.sc-se-sidenav-h   .listNavItems.sc-se-sidenav{width:250px;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.sc-se-sidenav-h   .header-title.sc-se-sidenav{color:#333;padding-left:18px;font-size:30px;line-height:20px;font-weight:lighter;margin:0}.show-menu.sc-se-sidenav-h{display:block}"; }
}

export { ChipComponent as SeChip, ListComponent as SeList, ListItemComponent as SeListItem, SidenavComponent as SeSidenav };
